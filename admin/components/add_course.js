import db from "../Model/Model.js";

const courses = new db.course();
const course_id = Object.keys(courses.getAll()).length;
const add_lesson = document.getElementById("add-lesson");
const add_course = document.getElementById("add-course");

let lessons = [];
let id = 0;
add_lesson.addEventListener("click", () => {
  const topic = document.getElementById("topic");
  const videoURL = document.getElementById("videoURL");
  const description = document.getElementById("description");
  lessons.push({
    id: id,
    course_id: course_id,
    topic: topic.value,
    videoURL: videoURL.value,
    description: description.value,
  });
  id += 1;
});

add_course.addEventListener("click", (e) => {
  const title = document.getElementById("title");
  const aurthor = document.getElementById("aurthor");
  const info = document.getElementById("info");
  const rating = document.getElementById("rating");
  const level = document.getElementById("level");
  
  const new_course_data = {
    info: {
        course_id: course_id,
        imgURL: "./user/assets/icons/94a65614997aeace.jfif",
        title: title.value,
        aurthor: aurthor.value,
        info: info.value,
        rating: rating.value,
        level: level.value
    },
    lessons: lessons
  }
  courses.insert(new_course_data);
  courses.commit();
  window.location.href = "./";
});
