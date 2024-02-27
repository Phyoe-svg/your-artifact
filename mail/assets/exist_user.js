import db from "./Model.js";

const user = {
    info: {
        username: "domak",
        mail: "domak12@audrey.tulip",
        password: "mailpass",
    },
    otp: []
}

const new_user = new db.user();
console.log(new_user.insert({
    info: {
        username: "domak",
        mail: "domak@audrey.tulip",
        password: "mailpass",
    },
    otp: [],
}));
// new_user.insert({
//     info: {
//         username: "domak",
//         mail: "domak@audrey.tulip",
//         password: "mailpass",
//     },
//     otp: [],
// })
export default new_user;