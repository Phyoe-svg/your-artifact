import db from "./Model.js";

window.onload = ()=>{
  if(localStorage.getItem("current_user") === null ){
    window.location.href = "/user";
  }
}
const quiz = new db.quiz();
const current_quiz = Number(localStorage.getItem("current-quiz"));

// // quiz.remove(0);
// quiz.insert(quiz_datas);
// // quiz.commit()
let choosen = {};
quiz.getOne(current_quiz).questions.forEach((data) => {
  choosen[data.id] = false;
});

const container = document.querySelector(".container");
quiz.getOne(current_quiz).questions.forEach((question) => {
  const quiz = document.createElement("div");
  quiz.className = "quiz";
  quiz.innerHTML = `<div class="question">${question.question}</div>`;
  const answers = document.createElement("div");
  answers.className = "answers";
  question.choices.forEach((choice) => {
    const answer = document.createElement("div");
    answer.className = "answer";
    answer.innerText = choice;
    answer.id = choice;
    answer.addEventListener("click", () => {
      answer.style.backgroundColor = "rgb(10, 73, 116)";
      answer.style.color = "white";
      if (answer.id === question.answer) {
        choosen[question.id] = true;
        localStorage.setItem("choosen", JSON.stringify(choosen));
      } else {
        choosen[question.id] = false;
        localStorage.setItem("choosen", JSON.stringify(choosen));
      }
      answers.childNodes.forEach((ans) => {
        if (answer !== ans) {
          ans.style.backgroundColor = "rgba(247, 244, 239, 0.601)";
          ans.style.color = "black";
        }
      });
    });
    answers.appendChild(answer);
  });
  quiz.appendChild(answers);
  container.append(quiz);
});

const confirm = document.createElement("div");
confirm.className = "confirm";
confirm.innerText = "confirm";
container.appendChild(confirm);

confirm.addEventListener("click", () => {
  const point = document.getElementById("point");
  let points = 0;
  choosen = JSON.parse(localStorage.getItem("choosen"));
  Object.values(choosen).filter((ans_true) =>
    ans_true === true ? (points += 1) : points
  );
  point.innerText = `${points}/${quiz.getOne(current_quiz).questions.length}`;
  const current_user = db.current_user;
  const exit_quiz = current_user.finished_quiz.findIndex(
    (current) => current.title === quiz.getOne(current_quiz).title
  );
  if (exit_quiz !== -1) {
    current_user.finished_quiz[exit_quiz] = {
      title: quiz.getOne(current_quiz).title,
      points: points,
    };
  } else {
    current_user.finished_quiz.push({
      title: quiz.getOne(current_quiz).title,
      points: points,
    });
  }
  console.log(current_user.finished_quiz);
  const user = new db.user();
  user.update(current_user);
  user.commit();
  localStorage.setItem("current_user", JSON.stringify(current_user));
});

const mistake = document.getElementById("mistakes");

mistake.addEventListener("click", (e)=>{
  const mistake_show = document.createElement("div");
  mistake_show.className = "mistake-show";
  choosen = Object.values(JSON.parse(localStorage.getItem("choosen")));
  console.log(choosen);
  const quizs = quiz.getOne(current_quiz);
  for(let index = 0; index < choosen.length; index++ ){
    if( !choosen[index] ){
      mistake_show.innerHTML += `<div class="mistake-ans">${quizs.questions[index].question} - <b>Ans - </b> ${quizs.questions[index].answer}</div>`;
    }
  }
  container.appendChild(mistake_show);
})


