import mariadb from "mariadb";

const dbConnection = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "eshop",
  connectionLimit: 5,
});

export default dbConnection;
