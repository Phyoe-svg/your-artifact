import Lesson from "../../components/Lesson.js";
import Datas from "./LessonData.js";

const lesson_view = document.getElementById("lessons");

// show lessons
Datas.forEach((data) => {
  lesson_view.appendChild(Lesson(data));
});

const lessons = document.querySelectorAll(".lessons .lesson");

// interaction on lesson view
lessons.forEach((lesson) => {
  lesson.childNodes[8].addEventListener("click", (e) => {
    if (lesson.childNodes[6].style.display === "block") {
      lesson.childNodes[6].style.display = "none";
    } else {
      lesson.childNodes[6].style.display = "block";
      lesson.style.height = "fit-content";
    }
  });

  lesson.childNodes[10].addEventListener("click", (e) => {
    if (lesson.childNodes[2].style.display === "block") {
      lesson.childNodes[2].style.display = "none";
    } else {
      if (lesson.childNodes[0].innerHTML === "Progress") {
        lesson.childNodes[2].style.display = "block";
        lesson.style.height = "fit-content";
      } else {
        alert("Finish previous lesson first");
      }
    }
  });

  lesson.childNodes[12].addEventListener("click", (e) => {
    const finish_index = Datas.findIndex(
      (data) => data.id === Number(lesson.id)
    ) + 1;
    if (finish_index !== Datas.length) {
       Datas[finish_index].progress = true;
       Datas[finish_index].finish = true;
       if( Datas[finish_index].progress === true && Datas[finish_index].finish === true){
        lesson.childNodes[12].disabled = true;
       }
    }else{
      alert("Finished All Lessons");
    }
  });
});
