import db from "./Model.js";

const course = new db.course();
course.insert({
  course_id: 0,
  imgURL: "../assets/icons/94a65614997aeace.jfif",
  title: "JavaScript",
  aurthor: "David J Martin",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
  rating: 0.0,
  level: "Beginner",
});
course.insert({
  course_id: 1,
  imgURL: "../assets/icons/94a65614997aeace.jfif",
  title: "C",
  aurthor: "David J Martin",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
  rating: 0.0,
  level: "Beginner",
});
course.insert({
  course_id: 2,
  imgURL: "../assets/icons/94a65614997aeace.jfif",
  title: "Python",
  aurthor: "David J Martin",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
  rating: 0.0,
  level: "Beginner",
});
course.insert({
  course_id: 3,
  imgURL: "../assets/icons/94a65614997aeace.jfif",
  title: "Django",
  aurthor: "David J Martin",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
  rating: 0.0,
  level: "Beginner",
});
// courses.commit()

const courses = course.getAll();
export default courses;