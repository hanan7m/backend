const mongoose = require("mongoose");
const schema = mongoose.Schema;
const AdminSchema = new schema({
    fullName: { type: String, required: true },
    password: { type: String, select: false, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
//relation
//ON HOLD
});
const Model =mongoose.model("Admin",AdminSchema);
module.exports=Model;

