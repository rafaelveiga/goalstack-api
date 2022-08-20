import app from "../../../index";
import request from "supertest";

beforeAll(async () => {});

describe("GoalStack services", () => {
  it("Should return a list of all Goal Stacks", async () => {
    request(app).get("/goal-stack").expect(200).end();
  });
});
