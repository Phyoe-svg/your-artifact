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
  const card = document.createElement("div");
  card.className = "card";
  card.id = course_id;
  // redirect to course page with associate data id and show 
  card.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("course_id", course_id);
    window.location.href = "./course.html";
  });
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
