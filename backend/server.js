import express from "express"
import mongoose from "mongoose";
import "dotenv/config"
import cors from "cors"
import reviewRouter from "./routes/reviewRoute.js";
const app=express();

const port=4000

app.use(cors())
app.use(express.json())

const connectdb=async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/reviews`)
}
connectdb()


app.use("/api/review",reviewRouter)

app.get("/",(req,res)=>{
    res.send("app live on 4000")
})

app.listen(port,()=>{
    console.log(" app is ruuning on port 4000")
})