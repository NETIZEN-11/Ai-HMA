const mongoose = require("mongoose")

const mediaReportSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  appliance:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Appliance"
  },
  mediaType:{
    type:String,
    enum:["image","audio"],
    required:true
  },
  fileUrl:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model("MediaReport",mediaReportSchema)