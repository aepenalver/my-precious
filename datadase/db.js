const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query('SELECT NOW()');
  console.log(`Database connected on ${result.rows[0].now}`);
};

getDate();

module.exports = pool;
