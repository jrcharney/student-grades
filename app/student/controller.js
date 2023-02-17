/**
 * @file app/student/controller.js
 */
import initClient from "../client.js";
import Student from "./Student.js";

const controller = {
  index() {
    return Student.find();
  },
  show(id) {
    return Student.findById(id);
  },
  create(newStudent) {
    return Student.create(newStudent);
  },
};

await initClient();

// TODO: Put tests in a different file.
// TODO: What should I test it with? (Jest?)

/*
controller
  .index()
  .then((students) => console.log(JSON.stringify(students)))
  .catch((err) => console.error(err.message));
*/

/*
  controller
  .show("insert student id here")
  .then((students) => console.log(JSON.stringify(students)))
  .catch((err) => console.error(err.message));
*/

// TODO: test controller.create()

export default controller;
