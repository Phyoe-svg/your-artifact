import Lesson from "../../components/Lesson.js";
import lessons from "./LessonData.js";

const lesson_view = document.getElementById("lessons");
// show lessons
if( localStorage.getItem("course_id") !== null ){
  Object.values(lessons).filter( lesson => {
    if(lesson.course_id === Number(localStorage.getItem("course_id"))){
      lesson_view.appendChild(Lesson(lesson));
    }
  })
}
