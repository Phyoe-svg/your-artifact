import db from "../Model.js";

const course = new db.course();

const courses = course.getAll();
export default courses;
