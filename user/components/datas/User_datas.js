import db from "../Model.js";

const user_datas = new db.user();
const users = user_datas.getAll();
export default users;

// let users = [
//   {
//     info: {
//       username: "Domak",
//       email: "domak@gmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
//   {
//     info: {
//       username: "Kyaw Thura",
//       email: "kyawthuragmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
//   {
//     info: {
//       username: "Thiha Naing",
//       email: "thihanaing@gmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
//   {
//     info: {
//       username: "Hla Moe Oo",
//       email: "hlamoeoo@gmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
//   {
//     info: {
//       username: "Zaw Zay Shine",
//       email: "zawzayshine@gmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
//   {
//     info: {
//       username: "Zaw Lin Naing",
//       email: "zawlinnaing@gmail.com",
//       password: "password",
//       profile: "./assets/icons/94a65614997aeace.jfif",
//       agreeNoti: "on",
//     },
//     progress_course: [],
//     finished_lessons: [],
//     my_schedules: [],
//   },
// ];
// users.forEach( user => {
//   const new_user = new db.user();
//   new_user.insert(user);
//   // new_user.commit();
// })