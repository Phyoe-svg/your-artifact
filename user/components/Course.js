import db from "./Model.js";

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
    const user_progress = JSON.parse(localStorage.getItem("current_user"));
    // console.log(user_progress);
    const check_exists_progress = user_progress.progress_course.filter(
      (course) => {
        if (course.title === title ) {
          return course;
        }
      }
    );
    console.log(check_exists_progress);
    if (check_exists_progress.length === 0) {
      user_progress.progress_course.push({
        course_id: course_id,
        title: title,
        progress: 0,
      });
    }
    localStorage.setItem("current_user", JSON.stringify(user_progress));
    const update_progress = new db.user();
    update_progress.update(user_progress);
    update_progress.commit();
    window.location.href = "./templates/course.html";
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
