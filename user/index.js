import "./components/Tab.js";
import "./components/datas/User_datas.js";
import "./components/User.js";
import Course from "./components/Course.js";
import courses from "./components/datas/Course_datas.js";
import "./components/edit_profile.js";
import "./components/schedule_input.js";
import db from "./components/Model.js";
import Show_schedule from "./components/schedule_input.js";
// add course to course section
const all_courses = document.querySelector(".all-courses");
const search = document.getElementById("search");

Object.values(courses).forEach((course) => {
  all_courses.appendChild(Course(course.info));
});

const cache_courses = Object.values(courses);

search.addEventListener("input", (e) => {
  let matched_list = cache_courses.filter((course) => {
    if (course.info.title.toLowerCase().includes(search.value)) {
      return course;
    }
  });
  while (all_courses.hasChildNodes()) {
    all_courses.removeChild(all_courses.firstChild);
  }
  matched_list.forEach((course) => {
    all_courses.appendChild(Course(course.info));
  });
});

// is new user or not
const new_user = JSON.parse(localStorage.getItem("new-user"));
if (new_user) {
  const welcome = document.querySelector(".dashboard .welcome .text");
  welcome.innerHTML =
    "Hello " +
    db.current_user.info.username +
    ", Let's Start your Journey with Us.";
}

Show_schedule();

// close edit form btn
const edit_form_close = document.getElementById("close-edit-form");
edit_form_close.addEventListener("click", (e)=>{
  const edit_profile = document.getElementById("edit-profile");
  edit_profile.style.display = "none";
})

// upload form show
const upload_porject = document.getElementById("upload-project");
const is_upload = document.getElementById("is-upload");

is_upload.addEventListener("click", ()=>{
  if( upload_porject.style.display === "flex" ){
    upload_porject.style.display = "none";
    is_upload.innerText = "Upload Project";
  }else{
    upload_porject.style.display = "flex";
    is_upload.innerText = "Close";
  }
})