const mongoose = require("mongoose")

const applianceSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  name:{
    type:String,
    required:true
  },
  brand:String,
  purchaseDate:Date,
  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model("Appliance", applianceSchema)