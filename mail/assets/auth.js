import db from "./Model.js";

const user = new db.user();
const username = document.getElementById("username");
const mail = document.getElementById("mail");
const same = document.getElementById("same-mail");
const password = document.getElementById("password");
const re_password = document.getElementById("re-password");
const password_match = document.getElementById("pass-match");
const signup = document.getElementById("signup-btn");
signup.disabled = true;
let correct_mail = false;
mail.addEventListener("input", (e) => {
  const new_user = Object.values(user.getAll()).filter((_user) => {
    if (_user.info.mail === mail.value) {
      same.style.color = "red";
      same.style.backgroundColor = "white";
      same.innerText = "* Mail Already Exists *";
      correct_mail = false;
    } else {
      same.innerText = "";
      correct_mail = true;
    }
  });

  if (!mail.value.endsWith("@audrey.tulip")) {
    same.style.color = "red";
    same.innerText = "must end with @audrey.tulip";
  }
});

re_password.addEventListener("input", (e) => {
  if (re_password.value === password.value) {
    password_match.style.color = "green";
    password_match.innerHTML = "Ok";
    console.log(correct_mail);
    if (correct_mail) {
      signup.disabled = false;
    }
    // console.log(signup_datas)
  } else {
    password_match.style.color = "red";
    password_match.innerHTML = "Not match";
  }
});

// signup btn

signup.addEventListener("click", () => {
  user.insert({
    info: {
      username: username.value,
      mail: mail.value,
      password: password.value,
    },
    otp: [],
  });
  user.commit();
  localStorage.setItem(
    "current-mail-user",
    JSON.stringify({
      info: {
        username: username.value,
        mail: mail.value,
        password: password.value,
      },
      otp: [],
    })
  );
  window.location.href = "./index.html";
});

// login
const login_mail = document.getElementById("login-mail");
const login_password  = document.getElementById("login-password");
const mail_format = document.getElementById("mail-format");
mail_format.style.backgroundColor = "white";
login_mail.addEventListener("input", (e)=>{
  // alert(login_mail.value);
  mail_format.style.color = "red";
  mail_format.innerText = "must end with @audrey.tulip";
  if(login_mail.value.endsWith("@audrey.tulip")){
    mail_format.style.color = "green";
    mail_format.innerText = "correct";
  }
  
})

const login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", (e)=>{
  const exit_user = Object.values(user.getAll()).filter( user => user.info.mail === login_mail.value && user.info.password === login_password.value);
  localStorage.setItem("current-mail-user", JSON.stringify(exit_user[0]));
  if( exit_user.length > 0){
    window.location.href = "./index.html";
  }
})

// sign up form block
const register = document.getElementById("register");
register.addEventListener("click", ()=>{
  document.getElementById("sign-up").style.display = 'block';
  document.getElementById("login").style.display = "none";
})