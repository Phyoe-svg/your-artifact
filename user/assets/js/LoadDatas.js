import db from "../../components/Model.js";
import courses from "../../components/datas/Courses.js";
import projects from "../../components/datas/Projects.js";
import users from "../../components/datas/Users.js";


export default function commitDatas() {
  courses.commit();
  users.forEach((user) => {
    const new_user = new db.user();
    new_user.insert(user);
    new_user.commit();
  });
  projects.forEach( project => {
    const new_project = new db.projects();
    new_project.insert(project);
    new_project.commit();
  })
}
