import express, { Request, Response } from "express";
import createGoalStack from "./services/createGoalStack";
import getGoalStack from "./services/getGoalStack";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const data = await getGoalStack();
  res.json(data);
});

router.post("/", async (req: Request, res: Response) => {
  const newGoalStack = await createGoalStack(req.body);

  res.json(newGoalStack);
});

export default router;
