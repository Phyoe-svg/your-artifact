import db from "./Model.js";

const container = document.querySelector(".container");
const Video = (id, videoURL) => {
  const lesson_video = document.createElement("div");
  const back = document.createElement("div");
  const video = document.createElement("div");
  const next = document.createElement("div");

  // give className
  lesson_video.className = "lesson-video";
  back.className = "back";
  video.className = "video";
  next.className = "next";

  video.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/0Fe7Z8baqZ8?si=2x8c65y-tWCZ5qmK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  // append to respective parent
  lesson_video.appendChild(back);
  lesson_video.appendChild(video);
  lesson_video.appendChild(next);

  // text to action elements
  back.innerText = "×";
  next.innerText = "Next";

  // actions
  // back to lessons list
  back.onclick = () => {
    lesson_video.style.display = "none";
  };

  // permission to next lessons
  next.onclick = () => {
    const course = new db.myCourse();
    let finish = course.getOne(id);
    let next_progress = ( id != course.getAll().length ? course.getOne(id+1): course.getOne(id));
    next_progress.progress = true;
    finish.finish = true;
    course.update(finish);
    course.update(next_progress);
    if(course.commit()){
      window.location.href = "/course.html";
    } 

    // progress update to other table 
  };
  return lesson_video;
};

const Lesson = ({ id, course_id, topic, videoURL, description, progress, finish }) => {
  const lesson = document.createElement("div");
  const option = document.createElement("div");
  const topic_ = document.createElement("div");
  const show_desc = document.createElement("div");
  const watch = document.createElement("div");
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

  //
  const progress_finished = ()=>{
    if( progress && finish ){
      return " - Finished";
    }
    if( progress ){
      return " - Progress";
    }
    return "";
  }
  topic_.innerHTML = topic + `<span>${progress_finished()}</span>`;
  show_desc.innerText = "Description";
  watch.innerText = "Watch";
  descript.innerText = description;

  // show and hide description
  show_desc.onclick = () => {
    if (descript.style.display === "block") {
      descript.style.display = "none";
    } else {
      descript.style.display = "block";
    }
  };

  // watch the lesson and continuous the progress
  watch.onclick = () => {
    const current_courses = new db.myCourse().getAll();
    const previous_finished = ( id > 0 ? current_courses[id-1].finish: current_courses[id].finish);
    if (progress || previous_finished ) {
      container.appendChild(Video(id, videoURL));
    }
  };
  return lesson;
};

export default Lesson;
