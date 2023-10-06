

const express = require("express");
const vehicleRouter = express.Router();
const vehicleController = require("./../Controlller/missingVehicle.controler");
// const imageUploader = require("./../Middlewares/missingVehicle")
//image
const { ExistingUser } = require("../Middlewares/authMiddleware");

vehicleRouter.post("/vehicleComplaint" ,ExistingUser, vehicleController.reportMissingVehicle);
vehicleRouter.get("/vehicleComplaints" , ExistingUser,vehicleController.allMissingVehicles);
vehicleRouter.get("/vehicleComplaint/:id" , ExistingUser, vehicleController.missingVehicleById);
vehicleRouter.put("/updateVehicleComplaint/:id" ,ExistingUser, vehicleController.updateVehicleDetails);
vehicleRouter.delete("/removeComplaint" , ExistingUser, vehicleController.deleteVehicleComplaint);

module.exports = vehicleRouter;