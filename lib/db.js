import mysql from "mysql2/promise";

export const db = await mysql.createPool({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "blogapp",
});
