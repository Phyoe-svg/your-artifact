// check courses localStorage is already exists or created new
if (localStorage.getItem("courses") === null || localStorage.getItem("users") === null ) {
  localStorage.setItem("courses", "[]");
  localStorage.setItem("users", "[]");
}
// convert string into arry from localStorage "courses"
let current_courses = JSON.parse(localStorage.getItem("courses"));
let current_users = JSON.parse(localStorage.getItem("users"));


const Model = {
  User: {
    // create new User { parem: userdata is an object parameter }
    insert: ( user_data )=>{
      // check user is already exit or not
      // console.log(user_data);
      const user_exists = current_users.filter( user => user.email === user_data.email);
      // check user is exists or not by checking the result array filter list length 
      if( user_exists.length === 0 ){
        // push to current user array
        current_users.push(user_data);
        // update to localStorage: users
        localStorage.setItem("users", JSON.stringify(current_users));
        return "User created", true
      }
      return "Aleady Exists", false
    },

    delete: (id)=>{
      const will_deleted_user = current_users.findIndex( user => user.id === id);
      if(current_users[will_deleted_user] === undefined ){
        return "User not exist", false
      }
      // remove from the array temp
      current_users.splice(will_deleted_user, 1);
      // write to localStorage 
      localStorage.setItem("users", JSON.stringify(current_users));
      return "Deleted", true
    }
  },
  // Course object for managing course data
  Courses: {
    // insert data into courses key in localStorage
    // parem: * object as data parameter *
    insert: (new_course) => {
      //  push new course into courses
      current_courses.push(new_course);
      localStorage.setItem("courses", JSON.stringify(current_courses));
    },

    // parem: * first take id for find the index of data and second update content will update it *
    update: ({ id, update_content }) => {
      // check where is this content index is
      let course_for_update = current_courses.findIndex((course) => {
        return course.id === id;
      });
      // change the content where is the course arry in
      current_courses[course_for_update] = update_content;
      // update to localStorage
      localStorage.setItem("courses", JSON.stringify(current_courses));
    },
    // this will take one parameter id of course
    delete: (id) => {
      // find course
      if (current_courses[id] === undefined) {
        return "Wrong course ID or Empty data";
      }
      // find index of will deleted data
      let will_deleted = current_courses.findIndex(
        (course) => course.id === id
      );
      // delete from arry
      current_courses.splice(will_deleted, 1);
      // update to localStorage
      localStorage.setItem("courses", JSON.stringify(current_courses));
      return "Deleted";
    },
  },
};

export default Model;
