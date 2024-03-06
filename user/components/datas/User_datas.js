import db from "../Model.js";

const user_datas = new db.user();
const users = user_datas.getAll();
export default users;
