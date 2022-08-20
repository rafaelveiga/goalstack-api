import App from "../../../App";
import request from "supertest";

let app;
beforeAll(async () => {
  app = await new App().start();
});

describe("GoalStack services", () => {
  it("Should return a list of all Goal Stacks", async () => {
    request(app)
      .get("/goal-stack")
      .expect(200)
      .expect("Content-Type", /json/)
      .end();
  });
});
