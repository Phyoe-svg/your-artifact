class Model {
  db;
  db_name = "learning";
  table_name = this.constructor.name;
  constructor() {
    if (localStorage.getItem(this.db_name) === null) {
      localStorage.setItem(this.db_name, "{}");
    }
    this.db = JSON.parse(localStorage.getItem(this.db_name));
  }

  // data insertion
  insert(datas) {
    // check table is exist or create new
    if (this.db[this.table_name] === undefined) {
      this.db[this.table_name] = {};
    }
    // get the table object
    let table = this.db[this.table_name];
    // generate new id key
    let id = Object.keys(table).length;
    // unique id to incoming new data insertion
    datas.id = id;
    // if the table is user, then check user is already register or not
    if (this.table_name === "User") {
      const users = Object.values(table);
      const user = users.filter((user) => user.info.email === datas.info.email);
      if (user.length != 0) {
        return "User Already Exists";
      }
    }
    table[id] = datas;
    this.db[this.table_name] = table;
    return "Added";
  }

  //   update data with unique id
  update(update_data) {
    if (update_data.id === undefined) {
      return "data doesn't exists";
    }
    let table = this.db[this.table_name];
    if (table === undefined) {
      return "Table haven't created yet";
    }
    table[update_data.id] = update_data;
    return "Tempo updated";
  }
  //   deleting the data with unique id
  remove(id) {
    let table = this.db[this.table_name];
    // delete the target data from table
    delete table[id];
    // overwrite the table and return true
    this.db[this.table_name] = table;
    return true;
  }

  //  commit to actual data collection localStorge;
  commit() {
    localStorage.setItem(this.db_name, JSON.stringify(this.db));
    return true;
  }

  //   get all datas
  getAll() {
    return JSON.parse(localStorage.getItem(this.db_name))[this.table_name];
  }

  // get by id
  getOne(id){
    const search_table = this.db[this.table_name];
    if(search_table === undefined ){
      return false;
    }
    return search_table[id];
  }

}

class User extends Model {}
class MyCourse extends Model {}
class Course extends Model {}
class Lesson extends Model {}
class MyLesson extends Model {}
const db = {
  user: User,
  myCourse: MyCourse,
  course: Course,
  lesson: Lesson,
  myLesson: MyLesson,
  current_user: JSON.parse(localStorage.getItem("current_user"))
}
export default db;
// const course = new Course();
// console.log(
//   course.update({
//     id: 0,
//     aurthor: "Martin2020",
//     publish_date: "13 feb 24",
//     duration: "10 hours",
//     logo: "./logo.png",
//     level: "Beginner",
//     desc: "Amazing course",
//   })
// );
// course.commit();
// localStorage.clear();
// const user = new User();
// console.log(
//   user.insert({
//     username: "Kyaw Than",
//     email: "domak1090@gmail.com",
//     password: "dompass",
//     since: "13 Feb 2024",
//     profile: "./profile.jpg",
//     bio: "take the risk, aganist the world",
//   })
// );
// console.log(
//   user.insert({
//     username: "Kyaw Than",
//     email: "domak1010@gmail.com",
//     password: "dompass",
//     since: "13 Feb 2024",
//     profile: "./profile.jpg",
//     bio: "take the risk, aganist the world",
//   })
// );
// console.log(
//   user.update({
//     id: 0,
//     username: "May",
//     email: "May@gmail.com",
//     password: "dompass",
//     since: "13 Feb 2024",
//     profile: "./profile.jpg",
//     bio: "take the risk, aganist the world",
//   })
// );
// user.commit();

// console.log(user.getAll());
// user.commit();
// const datas = JSON.parse(localStorage.getItem("learning"));
// console.log(datas.User);

// const user = new User();
// user.remove(0);
// user.commit();
// console.log(user.getAll());
