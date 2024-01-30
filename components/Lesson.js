const Lesson = ({id, progress, streamURL, title, description})=>{
    return `<div class="lesson" id="${id}">
    <div class="progress">${progress ? "Progress": ""}</div>
    <div class="video">
        <iframe class="video-frame" src="${streamURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="title">${title}</div>
    <div class="description">
        ${description}
    </div>
    <button id="desc">Description</button>
    <button id="video">Video Lesson</button>
    <button id="finish">Finish</button>
</div>`
}

export default Lesson;