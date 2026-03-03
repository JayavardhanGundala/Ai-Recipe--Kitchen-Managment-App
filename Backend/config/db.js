import dotenv from "dotenv"
dotenv.config()
import pkg from "pg"
const {Pool}=pkg
const pool =new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:process.env.DATABASE_URL?{rejectUnauthorized:false}:false
})
pool.on("connect",()=>{
    console.log("database connected")

})
pool.on("error",(err)=>{
    console.log("database not conected",err)
    process.exit(-1)
})
export default {query:(text,parms)=>pool.query(text,parms),pool}