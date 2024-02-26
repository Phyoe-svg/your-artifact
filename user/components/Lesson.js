import db from "./Model.js";

const user = new db.user();
const course_id = Number(localStorage.getItem("course_id"));
const finished_lessons = user.getOne(db.current_user.id);
console.log(finished_lessons);

const Video = (id, videoURL)=>{
  const lesson_video = document.createElement("div");
  const back = document.createElement("div");
  const video = document.createElement("div");
  const next = document.createElement("div");

  // give className
  lesson_video.className = "lesson-video";
  back.className = "back";
  video.className = "video";
  next.className = "next";

  video.innerHTML = videoURL;
  // append to respective parent
  lesson_video.appendChild(back);
  lesson_video.appendChild(video);
  lesson_video.appendChild(next);

  // text to action elements
  back.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  next.innerText = "Next";

  // actions
  // back to lessons list
  back.onclick = () => {
    lesson_video.style.display = "none";
  };

  next.onclick = ()=>{
    // const finised_lesson = my_lesson.getOne(course_id);
    const duplicate_id = finished_lessons.finished_lessons.filter( lesson => lesson.id === id+1 && lesson.course_id === course_id);
    if(duplicate_id.length === 0){
      finished_lessons.finished_lessons.push({id: id + 1, course_id: course_id});
      user.update(finished_lessons);
      user.commit();
      // current user data 
      localStorage.setItem("current_user", JSON.stringify(finished_lessons));
    }
    window.location.href = "./course.html";
  }

  return lesson_video;
}


// my_lesson.commit();
const container = document.querySelector(".container");
const Lesson = ({ id, topic, videoURL, description }) => {
  const lesson = document.createElement("div");
  const option = document.createElement("div");
  const topic_ = document.createElement("div");
  const show_desc = document.createElement("div");
  const watch = document.createElement("button");
  const descript = document.createElement("div");

  // given class Name to each new elements
  lesson.className = "lesson";
  option.className = "option";
  topic_.className = "topic";
  show_desc.className = "action";
  watch.className = "action";
  descript.className = "description";

  // append to each parent
  option.appendChild(topic_);
  option.appendChild(show_desc);
  option.appendChild(watch);
  lesson.appendChild(option);
  lesson.appendChild(descript);

  topic_.innerText = topic;
  show_desc.innerText = "Description";
  watch.innerText = "Watch";
  (id===0? "": watch.disabled = true);
  // const next = my_lesson.getOne(course_id).lessons;
  finished_lessons.finished_lessons.forEach( lesson => {
    if( lesson.id === id && lesson.course_id === course_id){
      watch.disabled = false;
    }
  })
  
  descript.innerText = description;

  // show and hide description
  show_desc.onclick = () => {
    if (descript.style.display === "block") {
      descript.style.display = "none";
    } else {
      descript.style.display = "block";
    }
  };

  // watch 
  watch.onclick = ()=>{
    container.appendChild(Video(id, videoURL));
  };
  return lesson;
};

export default Lesson;