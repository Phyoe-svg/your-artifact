import Render from "./components/Render.js";

const tabs = [
    document.getElementById("home"),
    document.getElementById("projects"),
    document.getElementById("course"),
    document.getElementById("puzzle"),
    document.getElementById("profile"),
]
// home, projects, course, brain, profile
tabs.forEach((tab)=>{
    tab.addEventListener("click", (e)=>{
        Render({'tab': tab.id, display: document.getElementById("topic")});
    })
})