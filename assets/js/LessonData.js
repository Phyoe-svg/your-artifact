import db from "../../components/Model.js";

const my_courses = new db.myCourse();
my_courses.insert({
  course_id: 1,
  topic: "Variables",
  progress: true,
  finish: false,
  videoURL: "",
  description: "Testing desc ",
});
my_courses.insert({
  course_id: 1,
  topic: "Variables",
  progress: false,
  finish: false,
  videoURL: "",
  description: "Testing desc ",
});
my_courses.insert({
  course_id: 1,
  topic: "Variables",
  progress: false,
  finish: false,
  videoURL: "",
  description: "Testing desc ",
});
// localStorage.clear();
// my_courses.commit();
const lessons = my_courses.getAll();
export default lessons;
