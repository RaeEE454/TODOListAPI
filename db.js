const Pool = require("pg").Pool;

const pool = new Pool({
    user: "RaeE454",
    password: "postgres",
    database: "todoapp",
    host: "localhost",
    port: 5432
});

module.exports = pool;