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





