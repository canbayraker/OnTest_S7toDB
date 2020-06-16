const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");

// Enviroment Varianbles
dotenv.config({
    path: "./config/env/config.env"
});




// MongoDb Connection
connectDatabase();


// Create Express App
const app = express();


// Body Middleware
app.use(express.json());


const PORT = process.env.PORT;


//Routers Middleware
app.use("/api",routers);



//Static Files
app.use(express.static(path.join(__dirname, "views")));
app.use('/index.js', express.static(path.join(__dirname, '/views/index.js'))); 
//app.use('/endDayReport.js', express.static(path.join(__dirname, '/views/endDayReport.js'))); 

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});




