import Lesson from "../../components/Lesson.js";
import db from "../../components/Model.js";
import courses from "../../components/datas/Course_datas.js";

const lesson_view = document.getElementById("lessons");
// show lessons
const course_id = Number(localStorage.getItem("course_id"));
courses[course_id].lessons.forEach( lesson => {
  lesson_view.appendChild(Lesson(lesson));
})