const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//middlewares
app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended:true, limit:'16kb'}));
app.use(express.static("public"));
app.use(cookieParser());



