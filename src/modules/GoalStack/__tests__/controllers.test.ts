import App from "../../../App";
import request from "supertest";
import AppDataSource from "../../../database";

let app;
beforeAll(async () => {
  app = await new App().start();
  await AppDataSource.initialize();
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.clearTable("goal_stack");
  await queryRunner.clearTable("goal");
});

describe("GoalStack endpoints", () => {
  it("should create a new GoalStack", async () => {
    request(app)
      .post("/goal-stack")
      .send({
        goalStackTitle: "Test Goal",
        goalStackDescription: "Test Goal Description",
        goals: [
          {
            goalTitle: "Test Short Term Goal",
            goalType: 1,
          },
          {
            goalTitle: "Test Mid Term Goal",
            goalType: 2,
          },
          {
            goalTitle: "Test Long Term Goal",
            goalType: 3,
          },
        ],
      })
      .expect(200)
      .expect("Content-Type", /json/)
      .end();
  });

  it("Should return a list of all Goal Stacks", async () => {
    request(app)
      .get("/goal-stack")
      .expect(200)
      .expect("Content-Type", /json/)
      .end();
  });
});
