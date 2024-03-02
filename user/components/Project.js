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
      <div class="live"><a href="${live_at}">Live</a></div>
      <div class="download"><a href="${download_link}">Download</a></div>
    </div>`;
  return project;
};

const project_section = document.getElementById("projects-section");
const projects = new db.projects();
Object.values(projects.getAll()).forEach( project => {
  project_section.appendChild(Project( project ));
})