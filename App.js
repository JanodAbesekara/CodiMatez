import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import DBConnection from "./Config/Databaseconnect.js"
import AuthAPI from "./API/AuthAPI.js"




const app = express();
dotenv.config();
DBConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

// apis 
app.use("/api/auth",AuthAPI);


const port = process.env.PORT || 6000;
app.listen(port, ()=>
console.log(`Server start in port ${port}`)
);