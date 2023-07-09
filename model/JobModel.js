const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    jobname: {
        type: String,
        required: true 
    },
    qualification: {
        type: String,required: true 
    },
    requirment: {
        type: String,
    },
    address: {
        type: String,
        required: true 
    },
    expernence: {
        type: String,
    },
    s_date: {
        type: Date,
        required: true 
    },
    e_date: {
        type: Date,
        required: true 
    },
    salary: {
        type: Number,
    },
    skills: {
        type: [String],
        //required: true
    },

      student: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "StudentModel",
        },
      ],
    
});

const Job =mongoose.model("job",jobSchema);
module.exports=Job;