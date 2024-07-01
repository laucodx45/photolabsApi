require('../environment')
const { Pool } = require('pg');

// Retrieve environment variables
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, ENDPOINT_ID, DATABASE_URL } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

// Initialize client
const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    rejectUnauthorized: false
  },
  application_name: ENDPOINT_ID, 
});

// Connect to the database
pool.connect()
  .then(() => console.log('Connected to Neon PostgreSQL database'))
  .catch(e => console.error(`Error connecting to Postgres server:\n${e}`));

module.exports = pool;