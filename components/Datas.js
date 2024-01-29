import Course from "./Course.js";

const courses = [
    {
      id: 0,
      imgURL: "../assets/icons/94a65614997aeace.jfif",
      title: "JavaScript",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
      rating: 0.0,
      level: "Beginner"
    },
    {
      id: 0,
      imgURL: "assets/icons/94a65614997aeace.jfif",
      title: "JavaScript",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
      rating: 0.0,
      level: "Beginner"
    },
    {
      id: 0,
      imgURL: "assets/icons/94a65614997aeace.jfif",
      title: "JavaScript",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
      rating: 0.0,
      level: "Beginner"
    }
  ];
const display_course = document.querySelector(".display #display-courses");
courses.forEach( course =>{
  display_course.innerHTML += Course(course);
})
