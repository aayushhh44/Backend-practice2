require('dotenv').config();
const express  = require("express");
const {connectDB} = require('./src/db/config')
const app =express();
connectDB();

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log('Hi! Its me Aayush')
})