import db from "./Model.js";


const users = [
  {
    info: {
      username: "Domak",
      email: "domak@gmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
  {
    info: {
      username: "Kyaw Thura",
      email: "kyawthuragmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
  {
    info: {
      username: "Thiha Naing",
      email: "thihanaing@gmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
  {
    info: {
      username: "Hla Moe Oo",
      email: "hlamoeoo@gmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
  {
    info: {
      username: "Zaw Zay Shine",
      email: "zawzayshine@gmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
  {
    info: {
      username: "Zaw Lin Naing",
      email: "domak@gmail.com",
      password: "password",
      profile: "./assets/icons/94a65614997aeace.jfif",
      agreeNoti: "on",
    },
    progress_course: [],
  },
];
// users.forEach( user => {
//   const new_user = new db.user();
//   new_user.insert(user);
//   new_user.commit();
// })

const course = {
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
    { topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
    { topic: "Variables 0 ", videoURL: "", description: "Testing desc " },
  ],
}

const course_data = new db.course();
course_data.insert(course);
course_data.commit();
console.log("user data");
