const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const dotenv = require("dotenv");
dotenv.config();
app.use(bodyParser.json())
const mongoose = require('mongoose');

mongoose.connect(process.env.db)
.then(() => {
    console.log("Databse Connected Successfully!!");    
})
.catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


////////////////////router///////////////

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







