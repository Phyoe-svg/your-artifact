const Course = ({
  id,
  course_id,
  imgURL,
  title,
  aurthor,
  info,
  rating,
  level,
}) => {
  console.log(imgURL);
  const card = document.createElement("div");
  card.className = "card";
  card.id = course_id;
  card.innerHTML = `<div class="image" id="${id}">
  <img src="${imgURL}" alt="" srcset="">
</div>
<div class="title">${title} - <small style="color: white;">${aurthor}</small></div>
<div class="info">${info}</div>
<div class="rating">${rating}/10</div>
<div class="course-level">${level}</div>`;
  return card;
};

export default Course;
