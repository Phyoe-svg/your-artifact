import "./components/Tab.js";
import "./components/datas/User_datas.js";
import "./components/User.js";
import Course from "./components/Course.js";
import courses from "./components/datas/Course_datas.js";
import db from "./components/Model.js";
// add course to course section
const all_courses = document.querySelector(".all-courses");
const search = document.getElementById("search");

Object.values(courses).forEach( course => {
    all_courses.appendChild(Course(course));
})

const cache_courses = Object.values(courses);

search.addEventListener("input", (e)=>{
  let matched_list = cache_courses.filter( course =>{
    if( course.title.toLowerCase().includes(search.value)){
      return course;
    }
  })
  while( all_courses.hasChildNodes() ){
    all_courses.removeChild(all_courses.firstChild);
  }
  matched_list.forEach( course =>{
    all_courses.appendChild(Course(course));
  })
})

