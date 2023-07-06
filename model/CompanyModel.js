const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CompanySchema = new schema({
    fullName: { type: String, required: true },
    City: { type: String, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
    })


    const Model =mongoose.model("Company",CompanySchema);
module.exports=Model;