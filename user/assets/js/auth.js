import db from "../../components/Model.js";
import commitDatas from "./LoadDatas.js";
let users;
window.onload = () => {
  const current_user = localStorage.getItem("current_user");
  localStorage.getItem("learning") === "{}" ? commitDatas() : "";
  users = new db.user().getAll();
  if (current_user) {
    window.location.href = "/";
  }
};

// playing between sign up and login
// buttons
const signup_btn = document.getElementById("signup");
const login_btn = document.getElementById("login");
const signup = document.querySelector(".container .signup");
const login = document.querySelector(".container .login");

signup_btn.addEventListener("click", (e) => {
  signup.style.display = "flex";
});

login_btn.addEventListener("click", (e) => {
  login.style.display = "flex";
});

// back to main
const back_login = document.querySelector(".login .back");
const back_singup = document.querySelector(".signup .back");
back_login.addEventListener("click", (e) => {
  login.style.display = "none";
});
back_singup.addEventListener("click", (e) => {
  signup.style.display = "none";
});

// input validate and continue process
const inputs = document.querySelectorAll(".signup input");
const email_exits = document.getElementById("email-exists");
const continues = document.getElementById("continue");
const username_error = document.getElementById("username-error");
const password_error = document.getElementById("password-error");

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
        (user) => user.info.email === input.value
      );
      if (email_exit.length > 0) {
        email_exits.style.color = "red";
        email_exits.innerHTML = "Email Already Taken";
        continues.disabled = true;
      }
      if (email_exit.length === 0) {
        email_exits.innerHTML = "";
        if (
          input.value.endsWith("@gmail.com") ||
          input.value.endsWith("@audrey.tulip")
        ) {
          continues.disabled = false;
        } else {
          continues.disabled = true;
        }
      }
      if (Number(input.value[0]) >= 0) {
        email_exits.style.color = "red";
        email_exits.innerHTML = "Email must be start with character";
        continues.disabled = true;
      }
    }
    if (input.name === "username") {
      if (Number(input.value[0]) >= 0 || input.value.length < 4) {
        console.log(input.value.length);
        username_error.style.color = "red";
        username_error.innerText =
          "Username must be start with character and greater than 4 character long";
        continues.disabled = true;
      } else {
        username_error.innerText = "";
        continues.disabled = false;
      }
    }

    if (input.name === "password") {
      if (input.value.length < 8) {
        password_error.style.color = "red";
        password_error.innerText = "Password must be greater than 8";
        continues.disabled = true;
      } else {
        password_error.innerText = "";
        continues.disabled = false;
      }
    }
  });
});
let track = 0;
continues.addEventListener("click", (e) => {
  if (next_inputs.length > track) {
    next_inputs[track].style.display = "block";
    continues.disabled = true;
  }
  if (next_inputs.length - 1 === track) {
    continues.disabled = false;
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
      progress_course: [],
      finished_lessons: [],
      my_schedules: [],
      finished_quiz: [],
    };
    const user = new db.user();
    user.insert(new_user);
    user.commit();
    localStorage.setItem("current_user", JSON.stringify(new_user));
    localStorage.setItem("new-user", true);
    window.location.href = "/user";
  }
  track++;
});

// login
const account_login = document.getElementById("login-login-btn");
const email = document.querySelector(".login #email");
email.addEventListener("input", () => {
  const validate = document.querySelector(".login-email small");
  if (
    email.value.endsWith("@gmail.com") ||
    email.value.endsWith("@audrey.tulip")
  ) {
    validate.innerHTML = `<i class="fa-solid fa-check"></i>`;
    validate.style.color = "green";
  } else {
    validate.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    validate.style.color = "red";
  }
});
account_login.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector(".login #email");
  const password = document.querySelector(".login #password");

  const user_exists = Object.values(users).filter((user) => {
    if (
      user.info.email === email.value &&
      user.info.password === password.value
    ) {
      localStorage.setItem("current_user", JSON.stringify(user));
      window.location.href = "/user";
    }
  });
  if (user_exists.length === 0) {
    document.getElementById("error").innerHTML = "Email or Password Incorrect";
  }
});
