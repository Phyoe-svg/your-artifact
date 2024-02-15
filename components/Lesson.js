const container = document.querySelector(".container");
const Video = ( topic, videoURL )=>{
  const lesson_video = document.createElement("div");
  const back = document.createElement("div");
  const video = document.createElement("div");
  const next = document.createElement("div");

  // give className
  lesson_video.className = "lesson-video";
  back.className = "back";
  video.className = "video";
  next.className = "next";
  
  // append to respective parent
  lesson_video.appendChild(back);
  lesson_video.appendChild(video);
  lesson_video.appendChild(next);

  // text to action elements
  back.innerText = "×";
  next.innerText = "Next";

  // actions
  back.onclick = ()=>{
    lesson_video.style.display = "none";
  }
  
  return lesson_video;
}

const Lesson = ({ id, course_id, topic, videoURL,  progress, description }) => {
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
  topic_.innerText = topic;
  show_desc.innerText = "Description";
  watch.innerText = "Watch";
  descript.innerText = description;

  // show and hide description
  show_desc.onclick = ()=>{
    if(descript.style.display === "block"){
      descript.style.display = 'none';
    }else{
      descript.style.display = 'block';
    }
  }

  // watch the lesson and continuous the progress
  watch.onclick = ()=>{
    container.appendChild(Video(topic, videoURL));
  };
  return lesson;
};

export default Lesson;
