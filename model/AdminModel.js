const mongoose = require("mongoose");
const schema = mongoose.Schema;
const uniqueValidatore = require("mongoose-unique-validator");

const AdminSchema = new schema({
    fullName: { type: String, required: true },
    password: { type: String, select: false, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
    
    createdjob: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"JobModel",
        },
      ], }, {
        timestamps: true,
    

});

AdminSchema.plugin(uniqueValidatore);
const Model =mongoose.model("Admin",AdminSchema);
module.exports=Model;

