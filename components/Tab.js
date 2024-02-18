// const tabs = [
//     { home: document.getElementById("home") },
//     { courses: document.getElementById("courses") },
//     { quiz: document.getElementById("quiz") },
//     { projects: document.getElementById("projects") }
// ]
const display = document.getElementById("display");

window.onload = () => {
  // if user is new, it'll set default tab to home and it'll track user last tab id
  let current_tab =
    localStorage.getItem("current_tab") === null
      ? localStorage.setItem("current_tab", "display-home")
      : localStorage.getItem("current_tab");
  document.getElementById(current_tab).style.display = "block";
  
};
// get the tabs
const tabs = [
  document.getElementById("home"),
  document.getElementById("courses"),
  document.getElementById("quiz"),
  document.getElementById("projects"),
];
// listen the click for each and display the necessary target
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // get the id of tab and regenerate the display's id to get the style property
    let display_screen = document.getElementById("display-" + tab.id);
    localStorage.setItem("current_tab", "display-" + tab.id);
    display_screen.style.display = "block";
    closeDisplay(localStorage.getItem("current_tab"));
  });
});

// close the tabs what if isn't selected already,
const closeDisplay = (current_tab) => {
  const have_to_close_tabs = tabs.filter(
    (tab) => "display-" + tab.id != current_tab
  );
  have_to_close_tabs.forEach((close_tab) => {
    document.getElementById("display-" + close_tab.id).style.display = "none";
  });
};


// logout
const logout = document.getElementById("logout");
logout.addEventListener("click", (e)=>{
  localStorage.removeItem("current_user");
  window.location.href = "/";
})