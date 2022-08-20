import AppDataSource from "../../../database";
import { GoalStack } from "../../../database/entities/GoalStack";

async function getGoalStack(): Promise<GoalStack[]> {
  const data = await AppDataSource.manager.find(GoalStack, {
    relations: ["goals", "goals.goalType"],
  });

  return data;
}

export default getGoalStack;
