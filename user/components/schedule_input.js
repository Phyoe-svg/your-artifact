import db from "./Model.js";
import Schedule from "./Schedule.js";
const current_user = db.current_user;
const schedules = document.getElementById("schedules");


// get data and listen add btn from schedule
const Show_schedule = () => {
  while(schedules.hasChildNodes()){
    schedules.removeChild(schedules.firstChild);
  }
  current_user.my_schedules.forEach(( schedule ) => {
    schedules.appendChild(Schedule(schedule));
  });
};
const add = document.getElementById("add-schedule");
add.addEventListener("click", (e) => {
  const name = document.getElementById("schedule-name");
  const hr = document.getElementById("schedule-hr");

  if (name.value === "" || (hr.value === "" && hr.value >= 1)) {
    alert("Please be sure your input are valid");
  } else {
     current_user.my_schedules.push({ name: name.value, hr: hr.value });
     localStorage.setItem("current_user", JSON.stringify(current_user));
     const user = new db.user();
     user.update(current_user);
     user.commit();
     Show_schedule();
     name.value = "";
     hr.value = "";
  }
});

export default Show_schedule;