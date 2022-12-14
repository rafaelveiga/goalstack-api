import "reflect-metadata";
import express from "express";
import cors from "cors";

import GoalStackRouter from "./modules/GoalStack/routes";

class App {
  public async start() {
    const app = express();
    app.use(express.json());
    app.use(cors());

    const port = process.env.PORT;

    app.use("/goal-stack", GoalStackRouter);

    await app.listen(port);
    console.log(`[server]: Server is running at https://localhost:${port}`);

    return app;
  }
}

export default App;
