import db from "../Model/Model.js";

const User_detail = ({ id, username, course_count }) => {
  const user = document.createElement("div");
  const user_id = document.createElement("div");
  const name = document.createElement("div");
  const course = document.createElement("div");
  const delete_user = document.createElement("div");

//   className
  user.className = "user";
  delete_user.className = "delete";
  //   insert text representation data
  user_id.innerText = id;
  name.innerText = username;
  course.innerText = course_count;
  delete_user.innerText = "Delete";

//   delete the user
delete_user.addEventListener("click", ()=>{
    let isDelete = confirm("Are your Sure to delete "+ username +" ?");
    if(isDelete){
        const delete_user = new db.user();
        delete_user.remove(id);
        delete_user.commit();
        localStorage.removeItem("current_user");
        user.style.display = "none";
    }
})
  //   append to parent
  user.appendChild(user_id);
  user.appendChild(name);
  user.appendChild(course);
  user.appendChild(delete_user);

  return user;
};

export default User_detail;