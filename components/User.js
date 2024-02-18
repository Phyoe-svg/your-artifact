import Result from "./Result.js";
// this module will set the user datas 
const profile = document.getElementById("profile");
const welcome_profile = document.getElementById("welcome-profile");
const username = document.getElementById("username");
const welcome_username = document.getElementById("welcome-username");
const email = document.getElementById("email");
const results = document.getElementById("result-detail");
const my_courses = document.getElementById("my-courses");

const user_datas = JSON.parse(localStorage.getItem("current_user"));
// const user_datas = JSON.parse(localStorage.getItem("current_user"));
  if (user_datas === null) {
    window.location.href = "./templates/auth.html";
  }
// current user info 
profile.src = user_datas.info.profile;
welcome_profile.src = user_datas.info.profile;
username.innerText = user_datas.info.username;
welcome_username.innerText = user_datas.info.username;
email.innerText = user_datas.info.email;

// results course with progress complete
user_datas.progress_course.forEach( result => {
    my_courses.innerHTML += `<div class="course">
    <div class="content">${result.title}</div>
  </div>`;
    results.appendChild(Result(result));
})
