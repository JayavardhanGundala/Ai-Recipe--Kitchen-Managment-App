import db from "../config/db.js"
import bcrypt from 'bcryptjs'



class User{
    //create new user
    async create({email,password,name}){
        const handlePassword=await bcrypt.hash(password,10)
        const result=await db.query(
            `INSERT INTO users (email,password_hash,name)
        VALUES($1,$2,$3)
        RETURNING id,email,name,created_at`,
        [emaiil,handlePassword,name]
        );
        return result.rows[0]

    }
}