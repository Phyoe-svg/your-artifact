import "./components/Tab.js";
import "./components/Datas.js";

// bring to the new lesson page
const course_cards = document.querySelectorAll("#display-courses .card");
course_cards.forEach( card =>{
  card.addEventListener("click", (e)=>{
    localStorage.setItem("course_id", card.id);
    window.location.href = "./course.html";
  })
})