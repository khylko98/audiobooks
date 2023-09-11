const Pool = require("pg").Pool;

const pool = new Pool({
  user: "username",
  host: "db",
  database: "db",
  password: "password",
  port: 5432,
});

module.exports = pool;
