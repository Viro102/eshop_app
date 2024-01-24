import mariadb from "mariadb";

const host = process.env.DB_HOST ?? "localhost";

const dbConnection = mariadb.createPool({
  host: host,
  user: "root",
  password: "admin",
  database: "eshop",
  connectionLimit: 10,
});

export default dbConnection;
