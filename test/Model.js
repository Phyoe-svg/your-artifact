class Model {
  constructor(table_name) {
    this.table_name = table_name;
    this.datas = localStorage.getItem(this.table_name)
      ? localStorage.getItem(this.table_name)
      : localStorage.setItem(this.table_name, "[]");
  }

  addUser(username, email, password) {
    const new_user = {
        username: username, 
        email: email, 
        password: password, 
        time: new Date().getDate()
    }
    const user_exists = localStorage.getItem(this.table_name).search(email) >= 0 ? true: false;
    if(user_exists){
        return "user exists";
    }

    let new_datas = JSON.parse(localStorage.getItem(this.table_name)).push(new_user);

    localStorage.setItem(this.table_name, JSON.stringify(new_datas));
    return "user added";

  }
}

user = new Model("Users");
console.log(user.addUser("domak", "domak12@gmail.com", "password"))