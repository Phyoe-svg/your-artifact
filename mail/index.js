import db from "./assets/Model.js";

// prevent unauthorized access
window.onload = ()=>{
  if( localStorage.getItem("current-mail-user") === null ){
    window.location.href = "./auth.html";
  }
}
const mail_list = document.getElementById("mail-list");
const users = new db.user();
const user = Object.values(users.getAll()).filter( user => user.info.mail === db.current_mail_user.info.mail )[0];
localStorage.setItem("current-mail-user", JSON.stringify(user));
document.getElementById("mail-addr").innerText = user.info.mail;
user.otp.forEach((mail) => {
  mail_list.innerHTML += `<div class="mail">
  <div class="from">${mail.sender}</div>
  <div class="code">Code - ${mail.code}</div>
  <div class="time">${mail.time}</div>
</div>`;
});