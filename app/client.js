/**
 * @file client.js
 * @info our database connection
 * This is where we connect Node to Mongodb using Mongoose
 */
import mongoose from "mongoose";

// Connect to MongoDB

export default () => {
  mongoose
    .connect("mongodb://localhost:27017/students")
    .then(() => {
      console.info("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error Connecting to MongoDB", err.message);
    });
};
