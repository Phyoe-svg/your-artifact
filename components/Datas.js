import Course from "./Course.js";

const courses = [
  {
    id: 0,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "JavaScript",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  {
    id: 1,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "JavaScript",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  {
    id: 2,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "JavaScript",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  {
    id: 0,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "Python",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  {
    id: 0,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "C",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  {
    id: 0,
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "C",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
];

// add course to course section
const all_courses = document.querySelector(".all-courses");
const search = document.getElementById("search");

courses.forEach( course => {
  all_courses.appendChild(Course(course));
})

search.addEventListener("input", (e)=>{
  let matched_list = courses.filter( course =>{
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