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
        type: String
    },
    city: {      
        type: String,
        required: true },

    expernence: {
        type: String,
    },
    s_date: {
        type: String,
        required: true 
    },
    e_date: {
        type: Number,
        type: Date,
        required: true 
    },

    salary: {
        type: Number
    },
    skills: {
        type: String,
        //required: true
    }
});

const Job =mongoose.model("job",jobSchema);
module.exports=Job;
