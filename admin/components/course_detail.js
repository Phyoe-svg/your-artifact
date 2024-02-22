import db from "../Model/Model.js";

const Course_detail = ({ course_id, title, count_lesson }) => {
  const course = document.createElement("div");
  const course_id_ = document.createElement("div");
  const title_ = document.createElement("div");
  const lesson_count_ = document.createElement("div");
  const action = document.createElement("div");
  const delete_course = document.createElement("div");
  const edit = document.createElement("div");

  // className to each
  course.className = "course";
  course_id_.className = "course-id";
  title_.className = "title";
  lesson_count_.className = "lesson-count";
  action.className = "action";
  delete_course.className = "delete";
  edit.className = "edit";

  //   text to button
  course_id_.innerText = course_id;
  title_.innerText = title;
  lesson_count_.innerText = count_lesson;
  delete_course.innerText = "Delete";
  edit.innerText = "Edit";

  course.appendChild(course_id_);
  course.appendChild(title_);
  course.appendChild(lesson_count_);
  action.appendChild(edit);
  action.appendChild(delete_course);
  course.appendChild(action);

  // add action listener
  delete_course.addEventListener("click", (e) => {
    const course = new db.course();
    course.remove(course_id);
    course.commit();
    window.location.href = "/admin";
  });

  edit.addEventListener("click", (e) => {
    alert("edit");
  });
  return course;
};

export default Course_detail;
