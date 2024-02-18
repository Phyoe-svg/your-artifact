import db from "../../components/Model.js";

window.onload = ()=>{
    const current_user = localStorage.getItem("current_user");
    if( current_user ){
        window.location.href = "/";
    }
}

// playing between sign up and login
// buttons
const signup_btn = document.getElementById("signup");
const login_btn = document.getElementById("login");
const signup = document.querySelector(".container .signup");
const login = document.querySelector(".container .login");

signup_btn.addEventListener("click", (e)=>{
  signup.style.display = 'flex';
})

login_btn.addEventListener("click", (e)=>{
  login.style.display = 'flex';
})


// input validate and continue process
const inputs = document.querySelectorAll(".signup input");
const email_exits = document.getElementById("email-exists");
const continues = document.getElementById("continue");
const users = {
  0: {
    email: "domak@gmail.com",
  },
  1: {
    email: "kyaw@gmail.com",
  },
};

const next_inputs = [
  document.querySelector("form .username"),
  document.querySelector("form .password"),
  document.querySelector("form .email-preference"),
];
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.preventDefault();
    if (input.name === "email") {
      const email_exit = Object.values(users).filter(
        (user) => user.email === input.value
      );
      if (email_exit.length > 0) {
        email_exits.style.color = "red";
        email_exits.innerHTML = "Email Already Taken";
      }
      if (email_exit.length === 0) {
        email_exits.innerHTML = "";
        if (input.value.endsWith("@gmail.com")) {
          continues.disabled = false;
        }else{
          continues.disabled = true;
        }
      }
    }
  });
});
let track = 0;
continues.addEventListener("click", (e) => {
  if (next_inputs.length > track) {
    next_inputs[track].style.display = "block";
  }
  if (track === next_inputs.length) {
    const new_user = {
      info: {
        username: inputs[1].value,
        email: inputs[0].value,
        password: inputs[2].value,
        profile: "./assets/icons/94a65614997aeace.jfif",
        agreeNoti: inputs[3].value,
      },
      progress_course: []
    };
    const user = new db.user();
    user.insert(new_user);
    user.commit();
    localStorage.setItem("current_user", JSON.stringify(new_user));
    window.location.href = "/";
  }
  track++;
});
