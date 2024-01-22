// home, projects, course, brain, profile
const Render = ({ tab, display }) => {
  switch (tab) {
    case "home":
      display.innerHTML = "HOME";
      break;
    case "projects":
      display.innerHTML = "PROJECTS";
      break;
    case "course":
      display.innerHTML = "COURSE";
      break;
    case "puzzle":
      display.innerHTML = "PUZZLES";
      break;
    case "profile":
      display.innerHTML = "PROFILE";
      break;
    default:
      console.error("wrong");
  }
};

export default Render;
