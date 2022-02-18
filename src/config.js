import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "34.135.111.10",
  user: process.env.DB_USER || "dbsoboce",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "soboce",
  port: process.env.DB_PORT ||"3306"
};
