/**
 * @file grade-schema.js
 */
import { Schema } from "mongoose";

const gradeSchema = new Schema({
  gradeType: {
    type: String,
    enum: ["exam", "quiz", "homework", "project"],
    default: "exam",
  },
  name: {
    type: String,
    // required: true,
    required: [true, "Grade name is required"],
    minLength: [3, "Grade name must be at least three characters long"],
    trim: true, // remove any leading or trailing whitespace
  },
  earned: {
    type: Number,
    required: [true, "Earned points are required"],
    min: [0, "Earned points must be greater than or equal to zero"],
    // max: [100, ""]
  },
  possible: {
    type: Number,
    required: [true, "Possible points are required"],
    // min: [0, "Possible points must be greater than or equal to zero"],
    // max: [100, ""]
    validator(possible) {
      return possible >= this.earned;
    },
  },
});

export default gradeSchema;
