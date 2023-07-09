var bcrypt = require('bcrypt-nodejs'); // Import Bcrypt Package
var titlize = require('mongoose-title-case'); // Import Mongoose Title Case Plugin
const isArabic = require("is-arabic");
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin
const mongoose = require("mongoose");// Assign Mongoose Schema function to variable
const schema = mongoose.Schema;

// User E-mail Validator
var emailValidator = [
  validate({
      validator: 'matches',
      arguments: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
      message: 'Name must be at least 3 characters, max 40, no special characters or numbers, must have space in between name.'
  }),
  validate({
      validator: 'isLength',
      arguments: [3, 40],
      message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];
// Password Validator
var passwordValidator = [
  validate({
      validator: 'matches',
      arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
      message: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
  }),
  validate({
      validator: 'isLength',
      arguments: [8, 35],
      message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];


const studentSchema = new schema({
    fullName: { 
      type: String,
       required: true 
      },
    ssn:{
      type: Number, 
      required: true,
      unique: true
   },
    password: { 
      type: String, 
      select: false,
      validate: passwordValidator, 
      require: true },
    email: { 
      type: String, 
      validate: emailValidator,
      unique: true },
    phone:{
      type: Number, 
      required: true,
      unique: true},
    address:{
      type: String},

    
//relation
 applyOn:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobModel",
},],


 WorksOn:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobModel",
 },],
 
 WorksFor:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "CompanyModel", 
 },],
 resume:[{
   type: mongoose.Schema.Types.ObjectId,
   ref: "ResumeModel"
},],
});


 // create model after schema creation
 var Student = mongoose.model("Student", studentSchema);
 
 // export student 
 module.exports = Student;
