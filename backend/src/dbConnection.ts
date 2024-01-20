import mariadb from "mariadb";

const dbConnection = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "eshop",
  connectionLimit: 10,
});

export default dbConnection;
