// const pg = require("pg");

// const client = new pg.Client({
//   host: process.env.PGHOST,
//   name: process.env.PGDATABASE,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
//   ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
// });

// client
//   .connect()
//   .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

// module.exports = client;

// // app.js
// const postgres = require('postgres');
// require('dotenv').config();

require('../environment')
const { Client } = require('pg');

// Retrieve environment variables
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, ENDPOINT_ID, DATABASE_URL } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

// Initialize client
const client = new Client({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    rejectUnauthorized: false,
    require: true //
  },
  application_name: ENDPOINT_ID, 
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to Neon PostgreSQL database'))
  .catch(e => console.error(`Error connecting to Postgres server:\n${e}`));

module.exports = client;