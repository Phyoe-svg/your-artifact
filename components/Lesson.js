const Lesson = ({ id, progress, streamURL, title, description, finish }) => {
  const lesson = document.createElement("div");
  lesson.className = "lesson";
  lesson.id = id;
  lesson.innerHTML = `<div class="progress">${
    progress ? "Progress" : "Next"
  }</div>
    <div class="video">
        <!-- <iframe class="video-frame" src="${streamURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
    </div>
    <div class="title">${title}</div>
    <div class="description">
        ${description}
    </div>
    <button id="desc">Description</button>
    <button id="video">Video Lesson</button>
    ${finish ? `<button id="finish" class="disabled">Finished</button>`: `<button id="finish" disabled>Progress</button>`}`;

    return lesson;
  //     return `<div class="lesson" id="${id}">

  // </div>`
};

export default Lesson;
