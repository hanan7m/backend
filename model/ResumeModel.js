const mongoose = require("mongoose");
const schema = mongoose.Schema;


// Schema
const ResumeSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  education:[{
    type: Date,
    required: true,
    num:Number,
    name:string,
    Gpt:Number,
  }] ,
  
})

const Model =mongoose.model("Resume",ResumeSchema);
module.exports=Model;

