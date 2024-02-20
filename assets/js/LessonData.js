import db from "../../components/Model.js";

const lesson = new db.lesson();
const my_lesson = new db.myLesson();
// lesson.insert({
//   course_id: 0,
//   topic: "Variables 0",
//   progress: false,
//   finish: false,
//   videoURL: "",
//   description: "Testing desc ",
// });
lesson.insert({
  course_id: 0,
  topic: "Variables 0 ",
  videoURL: "",
  description: "Testing desc ",
});
lesson.insert({
  course_id: 0,
  topic: "Variables 0",
  videoURL: "",
  description: "Testing desc ",
});
lesson.insert({
  course_id: 0,
  topic: "Variables",
  videoURL: "",
  description: "Testing desc ",
});
lesson.insert({
  course_id: 0,
  topic: "Variables",
  videoURL: "",
  description: "Testing desc ",
});

lesson.insert({
  course_id: 1,
  topic: "Variables",
  videoURL: "",
  description: "Testing desc ",
});

lesson.insert({
  course_id: 1,
  topic: "Variables",
  videoURL: "",
  description: "Testing desc ",
});

lesson.insert({
  course_id: 1,
  topic: "Variables",
  videoURL: "",
  description: "Testing desc ",
});

// localStorage.clear();
// lesson.commit();

const lessons = lesson.getAll();
// console.log(lessons);
export default lessons;
