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
      level: "Beginner"
    },
    {
      id: 0,
      course_id: 0,
      imgURL: "../assets/icons/94a65614997aeace.jfif",
      title: "Python",
      aurthor: "David J Martin",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
      rating: 0.0,
      level: "Beginner"
    },
    {
      id: 0,
      course_id: 0,
      imgURL: "../assets/icons/94a65614997aeace.jfif",
      title: "C",
      aurthor: "David J Martin",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
      rating: 0.0,
      level: "Beginner"
    },
  ];
// add course to course section
const display_course = document.querySelector(".display #display-courses");
const search_box = `<div class="search">
<input type="search" name="search" id="search" placeholder="Search">
</div>`;
display_course.innerHTML += search_box;
courses.forEach( course =>{
  display_course.innerHTML += Course(course);
})

const search = document.getElementById("search");

search.addEventListener("input", (e)=>{
  let search_list = courses.filter( course => {
      if(course.title.toLocaleLowerCase().startsWith(search.value)){
        return course;
      }
  })
  search_list.forEach( search_item => {
    display_course.innerHTML = Course(search_item);
  })
})