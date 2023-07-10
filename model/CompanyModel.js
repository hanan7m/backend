const mongoose = require("mongoose");
const schema = mongoose.Schema;



const CompanySchema = new schema({
    fullName: { type: String, required: true },
    address: { type: String, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
    })


const Company =mongoose.model("Company",CompanySchema);
module.exports=Company;
