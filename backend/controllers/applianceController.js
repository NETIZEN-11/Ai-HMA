const Appliance = require("../models/Appliance")

exports.addAppliance = async(req,res)=>{
  try{

    const {name,brand,purchaseDate} = req.body

    const appliance = await Appliance.create({
      user:req.user,
      name,
      brand,
      purchaseDate
    })

    res.json(appliance)

  }catch(err){
    res.status(500).json({error:err.message})
  }
}

exports.getAppliances = async(req,res)=>{
  try{

    const appliances = await Appliance.find({user:req.user})

    res.json(appliances)

  }catch(err){
    res.status(500).json({error:err.message})
  }
}