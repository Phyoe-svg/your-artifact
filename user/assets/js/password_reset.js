import db from "../../../mail/assets/Model.js";
import Reset from "../../components/Reset.js";

const mail = document.getElementById("mail");
const send_code = document.getElementById("send-code");
const password = document.getElementById("password");
const reset = document.getElementById('reset');
const user = new db.user();

send_code.addEventListener("click", (e) => {
  const code = {
    sender: "System",
    code: Math.floor(Math.random() * 9999) + 1000,
    time: new Date().toLocaleTimeString(),
  };
  const find_user = Object.values(user.getAll()).filter(
    (user) => user.info.mail === mail.value
  )[0];
  find_user.otp.push(code);
  user.update(find_user);
  localStorage.setItem("code", find_user.otp[find_user.otp.length - 1].code);
  user.commit();
});

const confirm = document.getElementById("confirm");
confirm.addEventListener("click", (e) => {
  const code = document.getElementById("code");
  if (Number(code.value) === Number(localStorage.getItem("code"))){
    reset.disabled = false;
    password.disabled = false;
}
});


reset.addEventListener("click", (e)=>{
    Reset(mail.value, password.value);
    window.location.href = "/user";
})