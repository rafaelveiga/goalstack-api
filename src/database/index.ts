import { DataSource } from "typeorm";
import { Goal } from "./entities/Goal";
import { GoalStack } from "./entities/GoalStack";
import { GoalType } from "./entities/GoalType";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Goal, GoalType, GoalStack],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source hoas been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
