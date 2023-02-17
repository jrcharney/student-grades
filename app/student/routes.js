import { Router } from "express";
import studentController from "./controller.js";

const studentRouter = new Router();

studentRouter.get("/", (req, res) => {
  studentController
    .index()
    .then((students) => res.json(students))
    .catch((err) => res.json({ error: err.message }));
});

export default studentRouter;
