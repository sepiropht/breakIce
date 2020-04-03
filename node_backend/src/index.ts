const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
const host = "0.0.0.0";
const Pool = require("pg").Pool;
const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: "admin",
  password: "postgres",
  database: "postgres"
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (request: any, response: any) => {
  response.json({ info: "It works!" });
});
app.get("/test_query", (request: any, response: any) => {
  let q = "SELECT * FROM data ORDER BY id ASC";
  pool.query(q, (error: any, results: any) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
