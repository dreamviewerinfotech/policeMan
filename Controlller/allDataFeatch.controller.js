const FoundBagModel = require("../Model/foundBag.model")
const FoundHumanModel = require("../Model/foundHuman.model")
const FoundOtherModel = require("../Model/foundOther.model")
const FoundPetModel = require("../Model/foundPet.model")
const FoundVehicleModel = require("../Model/foundVehicle.model")
const FoundMobileModel = require("../Model/foundMobile.model")
const MissingBagModel = require("../Model/missingBag.model")
const MissingHumanModel = require("../Model/missingHuman.model")
const MissingOtherModel = require("../Model/missingOther.model")
const MissingVehicleModel =require("../Model/missingVehicle.model")



exports.allComplaints = async(req, res) => {
   const FoundBag = await FoundBagModel.find({}).limit(2).sort({date: -1})
    const FoundHuman  = await FoundHumanModel.find({}).limit(2).sort({date: -1})
    const FoundOther = await FoundOtherModel.find({}).limit(2).sort({date: -1})
    const  FoundPet  = await  FoundPetModel.find({}).limit(2).sort({date: -1})
   const FoundVehicle = await FoundVehicleModel.find({}).limit(2).sort({date: -1})
   const FoundMobile = await FoundMobileModel.find({}).limit(2).sort({date: -1})
   const MissingBag = await MissingBagModel.find({}).limit(2).sort({date: -1})
    const MissingHuman = await MissingHumanModel.find({}).limit(2).sort({date: -1})
   const MissingOther  = await MissingOtherModel.find({}).limit(2).sort({date: -1})
   const MissingVehicle = await MissingVehicleModel.find({}).limit(2).sort({date: -1})

   const allComplaints = [...FoundBag, ...FoundHuman, ...FoundOther,
                      ...FoundPet,  ...FoundVehicle, ...FoundMobile, ...MissingBag,
                       ... MissingHuman, ...MissingOther, ...MissingVehicle]

        res.status(200).json({success: true , allComplaints})
   
}