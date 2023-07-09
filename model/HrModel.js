const mongoose = require("mongoose");
const schema = mongoose.Schema;
const uniqueValidatore = require("mongoose-unique-validator");

const HrSchema = new schema({
    fullName: { type: String, required: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    email: { type: String, unique: true },
    phone:{type: Number, required: true,unique: true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },
    deleted_by: { type: String, default: null },
    deleted_by_name: { type: String, default: null }, 
    
    createdjob: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"JobModel",
        },
      ],
      updatedjob: [
        {   type: mongoose.Schema.Types.ObjectId,   ref:"JobModel",
        },
      ],
      deletedjob: [
        {   type: mongoose.Schema.Types.ObjectId,   ref:"JobModel",
        },
      ],
      deleted_by_job: [
        {   type: mongoose.Schema.Types.ObjectId,   ref:"JobModel",
        },
      ],

    },
    
    {
      timestamps: true,
    }
  );

    HrSchema.plugin(uniqueValidatore);
    const Hr =mongoose.model("Hr",HrSchema);
    module.exports=Hr;