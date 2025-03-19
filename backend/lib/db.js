import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

// Paksa dotenv membaca file .env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

console.log("Loaded DB_USERNAME:", process.env.DB_USERNAME); // Debugging

const database = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DB_USERNAME, // Ganti USERNAME ke DB_USERNAME
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default database;
