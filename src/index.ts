import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import GoalStackRouter from "./modules/GoalStack/routes";

const app = express();
const port = process.env.PORT;

app.use("/goal-stack", GoalStackRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

export default app;
