import db from "../../components/Model.js";
import courses from "../../components/datas/Courses.js";
import users from "../../components/datas/Users.js";


export default function commitDatas() {
  courses.commit();
  users.forEach((user) => {
    const new_user = new db.user();
    new_user.insert(user);
    new_user.commit();
  });
}
