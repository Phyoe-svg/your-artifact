import Lesson from "../../components/Lesson.js";
import Datas from "./LessonData.js";

const lesson_view = document.getElementById("lessons");

// show lessons
Datas.forEach((data) => {
  lesson_view.innerHTML += Lesson(data);
});

const video = document.getElementById("video");
const description = document.getElementById("desc");
const lessons = document.querySelectorAll(".lessons .lesson");

// interaction on lesson view
lessons.forEach((lesson) => {
  console.log(lesson.childNodes);
  lesson.childNodes[9].addEventListener("click", (e) => {
    if (lesson.childNodes[7].style.display === "block") {
      lesson.childNodes[7].style.display = "none";
    } else {
      lesson.childNodes[7].style.display = "block";
      lesson.style.height = "fit-content";
    }
  });

  lesson.childNodes[11].addEventListener("click", (e) => {
    if (lesson.childNodes[3].style.display === "block") {
      lesson.childNodes[3].style.display = "none";
    } else {
      if (lesson.childNodes[1].innerHTML === "Progress") {
        lesson.childNodes[3].style.display = "block";
        lesson.style.height = "fit-content";
      }else{
        alert("Finish previous lesson first");
      }
    }
  });

//   lesson.childNodes[13].addEventListener("click", (e)=>{
//     lesson.childNodes[1]
//   })
});
