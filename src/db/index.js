import pkg from "pg";
const { Pool } = pkg
import dotenv from "dotenv";
dotenv.config();

const user = process.env.PGUSER;
console.log("🚀 ~ user:", user)
const password = process.env.PGPASSWORD;
console.log("🚀 ~ password:", password)
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;

const pool = new Pool({
    database,
    host,
    password,
    user: process.env.PGUSER,
    port: 5432
})

const createTable = async (tableName, columns) => {
    await pool.query(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`)
}

createTable(
    "users",
    "id SERIAL PRIMARY KEY,firstName TEXT NOT NULL, lastName TEXT NOT NULL,email TEXT NOT NULL,password TEXT NOT NULL"
)

export default pool