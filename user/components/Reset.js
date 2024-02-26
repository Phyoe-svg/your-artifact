import db from "./Model.js";

const Reset = ( email, password ) => {
    const users = new db.user();
    const user = Object.values(users.getAll()).filter( user => user.info.email === email )[0];
    user.info.password = password;
    users.update(user);
    users.commit();
}

export default Reset;