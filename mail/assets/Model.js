class Model {
  db;
  db_name = "mail";
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
      const user = users.filter((user) => user.info.mail === datas.info.mail);
      if (user.length != 0) {
        return "User Already Exists";
      }
    }
    table[id] = datas;
    this.db[this.table_name] = table;
    console.log(this.db[this.table_name]);
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
class Code extends Model {}
const db = {
  user: User,
  code: Code,
  current_mail_user: JSON.parse(localStorage.getItem("current-mail-user"))
}
export default db;

