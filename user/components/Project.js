import db from "./Model.js";

const Project = ({
  title,
  screenshot,
  description,
  live_at,
  download_link,
}) => {
  const project = document.createElement("div");
  project.className = "project";
  project.innerHTML = `<div class="title">${title}</div>
    <div class="screen-shot"><img src="${screenshot}" alt="" srcset=""></div>
    <div class="description">${description}</div>
    <div class="option">
      <a href="/projects/${live_at}"><div class="live">View</div></a>
      <a href="/projects/source/${download_link}><div class="download">Download</div></a>
    </div>`;
  return project;
};

const projects = new db.projects();
projects.insert({})