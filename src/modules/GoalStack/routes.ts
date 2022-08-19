import express, { Request, Response } from "express";
import getGoalStack from "./services/getGoalStack";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const data = await getGoalStack();
  res.json(data);
});

export default router;
