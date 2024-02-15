import Lesson from "../../components/Lesson.js";
import lessons from "./LessonData.js";

const lesson_view = document.getElementById("lessons");
// show lessons
Object.values(lessons).forEach( lesson => {
  lesson_view.appendChild(Lesson(lesson));
})

// interaction on lesson view