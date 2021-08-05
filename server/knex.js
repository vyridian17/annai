require('dotenv').config();

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
    },
    searchPath: "public",
});

module.exports = knex;

/*
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_NAME,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
*/