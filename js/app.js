const loadCourseData = async () => {
  const url = `http://openapi.programming-hero.com/api/course/curriculum`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

const showMilestones = async () => {
  const milestones = await loadCourseData();
  // console.log(milestones);

  const milestoneContainer = document.getElementById('milestones');
  milestones.forEach(milestone => {
    // console.log(milestone);
    const { name, image, _id } = milestone;
    const li = document.createElement('li');
    li.innerHTML = `<a onclick="showModules('${name}')">${name}</a>`;
    milestoneContainer.appendChild(li);
  })
}

const showModules = async (milestoneName) => {
  const milestones = await loadCourseData();
  // console.log(milestones);
  const matchedMilestone = milestones.filter(milestone => milestone.name.includes(milestoneName));
  // console.log(matchedMilestone)
  const milestoneImage = document.getElementById('milestone__image');
  const moduleDetails = document.getElementById('module__details');
  moduleDetails.innerHTML = ``;
  matchedMilestone.forEach(milestone => {
    console.log(milestone);
    milestoneImage.innerHTML = `<img class="transition" src=${milestone.image}>`;
    milestone.modules.forEach(module => {
      console.log(module.name)
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
        </label>
      </div></td>
        <td>${module.name}</td>
        `;
      moduleDetails.appendChild(tr);
    })
  })
}

showMilestones();

