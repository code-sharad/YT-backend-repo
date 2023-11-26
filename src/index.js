// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/init.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });


connectDB().then(() => {
    console.log('DB connected')
    app.listen(process.env.PORT || 8000,() => {
        console.log(`⚙️  Server running on port ${process.env.PORT}`)
    }) 
}).catch((err) => {
    console.log('DB connection failed ',err)
})