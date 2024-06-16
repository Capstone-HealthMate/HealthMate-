import { Sequelize } from "sequelize";
import "dotenv/config";

const database = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default database;
