import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

// Create a new Pool instance with the DB connection string
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Method for running SQL queries
function query(text, params) {
    return pool.query(text, params);
}

export default query;

