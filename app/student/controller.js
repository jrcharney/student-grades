/**
 * @file app/student/controller.js
 */
import Student from "./Student.js";

const controller = {
  index() {
    return Student.find();
  },
  showStudent(id) {
    return Student.findById(id);
  },
  async showStudentAverageGrade(id) {
    const student = await Student.findById(id);
    return student.averageGrade;
  },
  create(newStudent) {
    return Student.create(newStudent);
  },
  updateName(id, newName) {
    return Student.findByIdAndUpdate(id, { name: newName });
  },
  updateStudentWithNewGrade(id, newGrade) {
    return Student.findByIdAndUpdate(id, { $push: { grades: newGrade } });
  },
  dropStudent(id) {
    return Student.findByIdAndDelete(id);
  },
};

// await initClient();

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
