import db from "../Model/Model.js";
const course_ = new db.course();
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
  // action.appendChild(edit);
  action.appendChild(delete_course);
  course.appendChild(action);

  // add action listener
  delete_course.addEventListener("click", (e) => {
    let isDelete = confirm("Are you sure to delete " + title + " course?");
    if (isDelete) {
      course_.remove(course_id);
      course_.commit();
      course.style.display = 'none';
    }
  });

  edit.addEventListener("click", (e) => {
    let current_course = course_.getOne(course_id);
    current_course.info.title = "How To get GF";
    course_.update(current_course);
    // course_.commit();
  });
  return course;
};

export default Course_detail;
