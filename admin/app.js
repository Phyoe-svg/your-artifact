// import necessary module
import "./components/add_course.js";
import db from "./Model/Model.js";
import Course_detail from "./components/course_detail.js";
import User_detail from "./components/user_detail.js";
const auth = document.getElementById("auth")
window.onload = ()=>{
  if( localStorage.getItem("admin") === null ){
    auth.style.display = "flex";
  }else{
    auth.style.display = "none";
  }
}

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

// admin auth
const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
const error = document.getElementById("error");
login.addEventListener("click", ()=>{
  if( username.value !== "" && password.value !== ""){
    if( username.value === "admin" && password.value === "admin"){
      const admin = {
        username: username.value,
        password: password.value
      }
      localStorage.setItem("admin", JSON.stringify(admin));
      window.location.href = "/admin";
    }else{
      error.style.color = "red";
      error.innerText = "Username or Password incorrect";
    }
  }else{
    error.style.color = "red";
    error.innerText = "Username or Password must not be empty"
  }
})

// logout
document.getElementById("logout").addEventListener("click", ()=>{
  localStorage.removeItem("admin");
  window.location.href = "/admin";
})

// left from add course
document.getElementById("dashboard").addEventListener("click", ()=>{
  document.getElementById("add-new-course-section").style.display = "none";
})