import db from "./Model.js";
import Show_schedule from "./schedule_input.js";

const current_user = db.current_user;
const user = new db.user();
const Schedule = ({ name, hr }) => {
    const schedule = document.createElement("div");
    const name_ = document.createElement("div");
    const hr_ = document.createElement("div");
    const finished = document.createElement("div");
  
    //   className
    schedule.classList.add("task");
    name_.className = "name";
    hr_.className = "hr";
    finished.className = "finished";
    if (Number(hr) < 3) {
      schedule.classList.add("primary");
      name_.style.color = "white";
      hr_.style.color = "white";
    } else if (Number(hr) >= 3 && Number(hr) <= 5) {
      schedule.classList.add("secondary");
    }else{
        schedule.classList.add("normal");
    }

    finished.addEventListener("click", (e)=>{
        const remove_index = current_user.my_schedules.findIndex( schelue => schelue.name === name);
        current_user.my_schedules.splice(remove_index, 1);
        localStorage.setItem("current_user", JSON.stringify(current_user));
        user.update(current_user);
        user.commit();
        Show_schedule();
    })
    
  
    // data
    name_.innerText = name;
    hr_.innerText = hr;
    finished.innerHTML = `<i class="fa-solid fa-minus"></i>`;
  
    schedule.appendChild(name_);
    schedule.appendChild(hr_);
    schedule.appendChild(finished);
  
    return schedule;
  };

export default Schedule;