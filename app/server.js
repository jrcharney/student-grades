import { express } from "express";
import studentRouter from "./student/routes.js";

const PORT = 3000;

const app = express();

app.use("/api/students", studentRouter);

export default () => {
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost/${PORT}`);
  });
};
