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
users.forEach( user => {
  const new_user = new db.user();
  new_user.insert(user);
  new_user.commit();
})
console.log("user data");
