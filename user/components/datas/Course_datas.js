import db from "../Model.js";

const course = new db.course();
const course_data = {
  info: {
    course_id: 0,
    imgURL: "../assets/icons/94a65614997aeace.jfif",
    title: "JavaScript",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  lessons: [
    { id: 0, course_id: 0,topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 1, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
  ],
};
course.insert({
  info: {
    course_id: 0,
    imgURL: "./assets/icons/94a65614997aeace.jfif",
    title: "JavaScript",
    aurthor: "David J Martin",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  lessons: [
    { id: 0, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 1, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 2, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 3, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 4, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 5, course_id: 0, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
  ],
});
course.insert({
  info: {
    course_id: 1,
    imgURL: "./assets/icons/94a65614997aeace.jfif",
    title: "C",
    aurthor: "Joker",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum deleniti dolor vel est, iusto aliquam dolores esse odio beatae eaque voluptate eligendi. Ut aspernatur, consectetur quia inventore animi atque!",
    rating: 0.0,
    level: "Beginner",
  },
  lessons: [
    { id: 0, course_id: 1, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { id: 1, course_id: 1, topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
  ],
});

// course.commit();

const courses = course.getAll();
export default courses;
