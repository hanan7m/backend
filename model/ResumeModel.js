const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address:{ 
    type: String,
    required: true
  },

  education:{
 type: String,
 required: true,
  name:String
  },
  experience:{
    type: String
  },
  skills:{
    type: String
  },
    description:{
    type: String
  },
  link:{type: String
  }
});

const Resume =mongoose.model("Resume",ResumeSchema);
module.exports=Resume;

