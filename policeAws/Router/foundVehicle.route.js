const express = require('express');
const foundVehicleRouter = express.Router();
const FoundVehicleController = require('../Controlller/foundVehicle.controller');
 const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
foundVehicleRouter.post('/foundVehicle', [checkForExistingUser.ExistingUser] , FoundVehicleController.createFoundVehicle);
foundVehicleRouter.get('/foundVehicle',[checkForExistingUser.ExistingUser],  FoundVehicleController.getFoundAll);
foundVehicleRouter.get('/foundVehicle/:foundId', [checkForExistingUser.ExistingUser], FoundVehicleController.getFoundById);
foundVehicleRouter.put('/foundVehicle/:foundId', [checkForExistingUser.ExistingUser],  FoundVehicleController.updateFoundById);
foundVehicleRouter.delete('/foundVehicle/:foundId', [checkForExistingUser.ExistingUser], FoundVehicleController.deleteFoundById);
module.exports = foundVehicleRouter;