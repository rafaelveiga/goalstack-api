import AppDataSource from "src/database";
import { Goal } from "src/database/entities/Goal";
import { GoalStack } from "src/database/entities/GoalStack";

async function createGoalStack(goalStack: GoalStack): Promise<GoalStack> {
  const newGoalStack = new GoalStack();

  newGoalStack.goalStackTitle = goalStack.goalStackTitle;
  newGoalStack.goalStackDescription = goalStack.goalStackDescription;
  newGoalStack.goals = await Promise.all(
    goalStack.goals.map(async (goal) => {
      const newGoal = new Goal();

      newGoal.goalTitle = goal.goalTitle;
      newGoal.goalType = goal.goalType;

      await AppDataSource.manager.save(newGoal);

      return newGoal;
    })
  );

  await AppDataSource.manager.save(newGoalStack);

  return newGoalStack;
}

export default createGoalStack;
