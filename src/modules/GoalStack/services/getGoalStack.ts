import AppDataSource from "src/database";
import { GoalStack } from "src/database/entities/GoalStack";

async function getGoalStack() {
  const data = await AppDataSource.manager.find(GoalStack, {
    relations: ["goals", "goals.goalType"],
  });

  return data;
}

export default getGoalStack;
