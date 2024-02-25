import db from "./Model.js";

const edit_profile = document.getElementById("edit-profile");
const save_change = document.getElementById("save-change");
const current_user_datas = db.current_user;
const user_table = new db.user();
save_change.addEventListener("click", (e) => {
  // get datas dom
  const image = document.getElementById("profile-image");
  const username = document.getElementById("edit-username");
  const email = document.getElementById("edit-email");

  if (username.value === "" || email === "") {
    alert("You Must Enter At least a name");
  } else {
    current_user_datas.info.username = username.value;
    current_user_datas.info.email = email.value;
    user_table.update(current_user_datas);
    user_table.commit();

    localStorage.setItem("current_user", JSON.stringify(current_user_datas));
    edit_profile.style.display = "none";
    window.location.href = "/user";
  }
});
