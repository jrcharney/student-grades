/**
 * @file app/student/Student.js
 * Note: This is a model
 */
import { model, Schema } from "mongoose";
import gradeSchema from "./grade-schema";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
      required: [true, "Grade name is required"],
      minLength: [3, "Grade name must be at least three characters long"],
      trim: true, // remove any leading or trailing whitespace
      validate: {
        validator(name) {
          return /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(name);
        },
        message:
          "Student name must only contain letters and one space in between words.",
      },
    },
    // An array of subdocuments.
    grades: [gradeSchema],
    // TODO: Add a virtual property to calculate the student's average grade
  },
  {
    // Additional options
    strict: "throw",
    versionKey: false,
  }
);

// This is a virtual property not stored in the database
studentSchema.virtual("averageGrade").get(function () {
  const totalEarned = this.grades.reduce((acc, grade) => {
    return acc + grade.earned;
  }, 0);

  const totalPossible = this.grades.reduce((acc, grade) => {
    return acc + grade.possible;
  }, 0);

  if (!totalPossible) return 0;

  return ((totalEarned / totalPossible) * 100).toFixed(1);
});

// This method should prevent duplicate grade names (use a custom hook)
studentSchema.path("grades").validate(function (grades) {
  // Use OPTIONAL CHAINING to prevent an error if grade.name is undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const lowerCasedGradeNames = grades.map((grade) => grade.name?.toLowerCase());

  // If the number of unique grade names is less than the number of grades, then there are duplicates
  return new Set(lowerCasedGradeNames).size === lowerCasedGradeNames.length;
}, "Duplicate grade name");

export default model("Student", studentSchema);
