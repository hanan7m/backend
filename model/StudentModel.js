const mongoose = require("mongoose");
const schema = mongoose.Schema;

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
      require: true },
    email: { 
      type: String, 
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

 WorksOn:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobModel", 
 },
 WorksFor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "CompanyModel", 
 },
 resume:{
   type: mongoose.Schema.Types.ObjectId,
   ref: "ResumeModel", 
},
});


 // create model after schema creation
 var Student = mongoose.model("Student", studentSchema);
 
 // export student 
 module.exports = Student;

 //اختصارها بسطر واحد
 //module.exports = mongoose.model("Student", studentSchema);