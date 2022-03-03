import { config as dotenv } from "dotenv";
dotenv();

/* export const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "soboce",
  port: process.env.DB_PORT ||"3306"
}; */
export const config = {
  host: process.env.DB_HOST || "34.135.111.10",
  user: process.env.DB_USER || "dbsoboce",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "soboce",
  port: process.env.DB_PORT ||"3306"
};
