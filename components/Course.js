const Course = ({ id, imgURL, title, info, rating, level }) => {
  console.log(imgURL);
  return `<div class="card">
  <div class="image" id="${id}">
      <img src="${imgURL}" alt="" srcset="">
  </div>
  <div class="title">${title}</div>
  <div class="info">${info}</div>
  <div class="rating">${rating}/10</div>
  <div class="course-level">${level}</div>
</div>`;
};

export default Course;
