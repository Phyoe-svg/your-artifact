import lessons from "../assets/js/LessonData.js";
import db from "./Model.js";

const course_id = Number(localStorage.getItem("course_id"));
const current_user = JSON.parse(localStorage.getItem("current_user"));
// removing item to test again
const my_course = new db.myCourse();
const reset = () => {
  my_course.remove(0);
  my_course.remove(1);
  my_course.remove(2);
  my_course.commit();

  const lessons_ = new db.lesson();
  lessons_.remove(0);
  lessons_.remove(1);
  lessons_.remove(2);
  lessons_.remove(3);
  lessons_.remove(4);
  lessons_.remove(5);
  lessons_.remove(6);
  lessons_.commit();
};
// reset();
/* NOTICE !!!!! */
// first purpose is to return the progress percent of the course but there's some issues related with lessons loopss i think
// i know that's my bad codes, But there's a deadline and I don't have much time to re-analysis the codes
// so I use another solution to add 1 everytime we click next
//
const countOf = (course_id) => {
  const progress_lesson = Object.values(lessons).filter(
    (lesson) => lesson.course_id === course_id && lesson.user_id
  );
  const finished = Object.values(lessons).filter(
    (lesson) => lesson.finish && lesson.course_id === course_id
  );
  let progress = (finished.length / progress_lesson.length) * 100;
  if (finished.length === progress_lesson.length) {
  }
  return {
    lesson_length: progress_lesson.length,
    finish_length: finished.length,
    progress: progress,
  };
};

let track_percent = countOf(course_id);

// update to user progress
const update_user_progress = (title, progress) => {
  let progress_data = {
    course_id: course_id,
    title: title,
    progress: progress,
  };
  const users = new db.user();
  let current_user = JSON.parse(localStorage.getItem("current_user"));
  let logined_user = Object.values(users.getAll()).filter(
    (user) => user.id === current_user.id
  );
  // check there is course is alreadt exist if true: update it false push
  const check_course = current_user.progress_course.findIndex(
    (course) => course.course_id === course_id
  );
  current_user.progress_course[check_course] = progress_data;
  logined_user[0].progress_course[check_course] = progress_data;
  localStorage.setItem("current_user", JSON.stringify(current_user));
  users.update(logined_user);
  users.commit();
};

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

  // video.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/0Fe7Z8baqZ8?si=2x8c65y-tWCZ5qmK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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

  // permission to next lessons
  next.onclick = () => {
    const course = new db.lesson();
    let finish = course.getOne(id);
    console.log(Object.values(lessons).length);
    let next_progress =
      id + 1 != Object.values(lessons).length
        ? course.getOne(id + 1)
        : course.getOne(id);
    // console.log(typeof(id));
    next_progress.progress = true;
    finish.finish = true;
    finish.user_id = db.current_user.id;
    // finish.who_finished.push(db.curr.id);
    course.update(finish);
    course.update(next_progress);
    if (course.commit()) {
      const my_course = new db.myCourse();
      let check = [];
      if (my_course.getAll() != undefined) {
        check = Object.values(my_course.getAll()).filter((course) => {
          if (course.lesson_id === finish.id) {
            return course;
          }
        });
      }
      if (check.length === 0 || my_course.getAll() === undefined) {
        let course_progress_data = {
          lesson_id: finish.id,
          user_id: db.current_user.id,
          course_id: finish.course_id,
          topic: finish.topic,
          finish: true,
          user_id: db.current_user.id,
          track:
            ((track_percent.finish_length + 1) / track_percent.lesson_length) *
            100,
        };

        update_user_progress(
          course_progress_data.topic,
          course_progress_data.track
        );
        my_course.insert(course_progress_data);
        my_course.commit();
      }

      if (track_percent.finish_length + 1 === track_percent.lesson_length) {
        alert(
          "Congratulation!!! U've finished the course, Hope you get something from this lessons"
        );
        window.location.href = "../index.html";
      } else {
        window.location.href = "/templates/course.html";
      }
    }

    // progress update to other table
  };
  return lesson_video;
};

const Lesson = ({
  id,
  course_id,
  topic,
  videoURL,
  description,
  progress,
  finish,
}) => {
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
  const progress_finished = () => {
    if (progress && finish) {
      return " - Finished";
    }
    if (progress) {
      return " - Progress";
    }
    return "";
  };
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
    const current_courses = new db.lesson().getAll();
    const previous_finished =
      id > 0 ? current_courses[id - 1].finish : current_courses[id].finish;
    if (progress || previous_finished) {
      container.appendChild(Video(id, videoURL));
    }
  };
  return lesson;
};

export default Lesson;
