const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "postgres",
    database: "foodapp",
    password: "postgres123",
    port: 5432
});

module.exports = pool;
