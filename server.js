//import
// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser")
// const cors = require("cors");
// const mongoose = require('mongoose');
// const dotenv =require("dotenv").config();


// app.use(bodyParser.json())
// app.use(express.json());
// app.use(cors());


const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
const studentRoute = require('./Router/StudentRouter.js')

app.use('/student',studentRoute)

// server.js
const express = require("express");
const app = express();
// Include mongoose in the server file
const mongoose = require('mongoose');
app.use(express.json());

// Tell the server file about the .env file
require("dotenv").config(); 
// Use the MONGO_URI from .env or use local mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db working");
  })
  .catch(() => {
    console.log("db not working");
  });



//////////////////router///////////////

//student
const studentRoute = require('./Router/StudentRouter.js')
app.use('/student',studentRoute)

//Hr
const hrRoute = require('./Router/HrRouter.js')
app.use('/hr',hrRoute)

//Company
const companyRoute = require('./Router/CompanyRouter.js')
app.use('/company',companyRoute)

//job
const jobRouter = require('./Router/JobRouter.js')
app.use('/job',jobRouter)

//resume
const resumeRouter = require('./Router/ResumeRouter.js')
app.use('/resume',resumeRouter)


app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

//server
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});







