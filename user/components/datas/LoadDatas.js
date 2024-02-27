import db from "../Model.js";
import course from "./Courses.js";
import users from "./Users.js";


export default function commitDatas() {
  course.commit();
  users.forEach((user) => {
    const new_user = new db.user();
    new_user.insert(user);
    new_user.commit();
  });
}
