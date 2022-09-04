const loadCourseData = async () => {
  const url = `http://openapi.programming-hero.com/api/course/curriculum`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

const showMilestones = async () => {
  const milestones = await loadCourseData();
  console.log(milestones);

  const milestoneContainer = document.getElementById('milestones');
  milestones.forEach(milestone => {
    console.log(milestone);
    const { name, image } = milestone;
    const li = document.createElement('li');
    li.innerHTML = `<a>${name}</a>`;
    milestoneContainer.appendChild(li);
  })
}
showMilestones();