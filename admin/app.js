// import necessary module
import "./components/add_course.js";
import db from "./Model/Model.js";
import Course_detail from "./components/course_detail.js";
import User_detail from "./components/user_detail.js";

const add_new_course_section = document.getElementById("add-new-course-section");
const user_manage_section = document.querySelector(".users");
const current_course_section = document.querySelector(".current-courses");
const manage_user = document.getElementById("manage-user");
const manage_course = document.getElementById("manage-course");
const add_new_course = document.getElementById("new-course");
// listeners for the tabs
manage_course.addEventListener("click", () => {
  current_course_section.style.display = "block";
  user_manage_section.style.display = 'none';
});

manage_user.addEventListener("click", (e)=>{
    current_course_section.style.display = 'none';
    user_manage_section.style.display = 'block';
})

add_new_course.addEventListener("click", ()=>{
    add_new_course_section.style.display = 'flex';
})

// add course to section
let courses = new db.course();
courses = courses.getAll();

Object.values(courses).forEach( course => {
  current_course_section.appendChild(Course_detail({
    course_id: course.info.course_id,
    title: course.info.title,
    count_lesson: course.lessons.length
  }));
})

// add user to section
let users = new db.user();
users = users.getAll();
Object.values(users).forEach( user => {
  console.log(user);
  user_manage_section.appendChild(User_detail({
    id: user.id,
    username: user.info.username,
    course_count: user.progress_course.length
  }))
})