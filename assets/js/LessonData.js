import db from "../../components/Model.js";

const lesson = new db.lesson();
// lesson.insert({
//   course_id: 0,
//   topic: "Variables 0 ",
//   progress: true,
//   finish: false,
//   videoURL: "",
//   description: "Testing desc ",
// });
// lesson.insert({
//   course_id: 0,
//   topic: "Variables 0",
//   progress: false,
//   finish: false,
//   videoURL: "",
//   description: "Testing desc ",
// });
lesson.insert({
  course_id: 1,
  topic: "Variables",
  progress: false,
  finish: false,
  videoURL: "",
  description: "Testing desc ",
});
// localStorage.clear();
// lesson.commit(); 
const lessons = lesson.getAll();
// console.log(lessons);
export default lessons;
