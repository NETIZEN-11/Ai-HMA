const MediaReport = require("../models/MediaReport")

exports.uploadMedia = async(req,res)=>{
  try{

    const {applianceId,mediaType} = req.body

    const fileUrl = `/uploads/${req.file.filename}`

    const report = await MediaReport.create({
      user:req.user,
      appliance:applianceId,
      mediaType,
      fileUrl
    })

    res.json(report)

  }catch(err){
    res.status(500).json({error:err.message})
  }
}