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

const app = express();

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


app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});







