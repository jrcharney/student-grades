import { Schema, model } from "mongoose";
import gradeSchema from "./grade-schema";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
      required: [true, "Grade name is required"],
      minLength: [3, "Grade name must be at least three characters long"],
      trim: true, // remove any leading or trailing whitespace
      // TODO: Add custom validator
    },
    // An array of subdocuments.
    grades: [gradeSchema],
    // TODO: Add a virtual proerty to calcuate the student's average grade
  },
  {
    // Additional options
    strict: "throw",
    versionKey: false,
  }
);
