const mongoose = require("mongoose");
const schema = mongoose.Schema;


const NotificationSchema = new schema({
    key	: {
    type:String,
    enum:[""]},

    
 })


 
const Model =mongoose.model("Notification",NotificationSchema);
module.exports=Model;

