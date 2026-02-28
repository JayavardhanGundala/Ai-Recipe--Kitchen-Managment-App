import dotenv from "dotenv"
import express from "express"
import cors from "cors"


dotenv.config()
const Port=process.env.PORT

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({msg:"Ai-recipe generator"})
})


app.listen(Port,()=>{
    console.log(`server running.... ${Port}`)
})