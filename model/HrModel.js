const mongoose = require("mongoose");
const schema = mongoose.Schema;



const HrSchema = new schema({
    fullName: { type: String, required: true },
    City: { type: String, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
  


    worksOn:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "companyModel",
    },]
})
    const Model =mongoose.model("Hr",HrSchema);
module.exports=Model;