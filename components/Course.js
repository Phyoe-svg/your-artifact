const Course = ({ id, course_id, imgURL, title, aurthor,  info, rating, level }) => {
  console.log(imgURL);
  return `<div class="card">
  <a href="/${course_id}">
  <div class="image" id="${id}">
      <img src="${imgURL}" alt="" srcset="">
  </div>
  <div class="title">${title} - <small style="color: white;">${aurthor}</small></div>
  <div class="info">${info}</div>
  <div class="rating">${rating}/10</div>
  <div class="course-level">${level}</div>
  </a>
  </div>`;
};

export default Course;
