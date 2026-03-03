import dotenv from "dotenv"
dotenv.config()
import pkg from "pg"
const {Pool}=pkg
const pool =new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:process.env.DATABASE_URL?{rejectUnauthorized:false}:false
})
 export default async function connectDB() {
    try {
        await pool.query("SELECT 1");
        console.log("database connected");
    } catch (err) {
        console.log("database not connected", err);
        process.exit(1);
    }
}