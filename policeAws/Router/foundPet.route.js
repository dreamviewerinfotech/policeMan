const express = require('express');
const foundPetRouter = express.Router();
const FoundPetController = require('../Controlller/foundPet.controller');
const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
foundPetRouter.post('/foundPet',[checkForExistingUser.ExistingUser],  FoundPetController.createFoundPet);
foundPetRouter.get('/foundPet',checkForExistingUser.ExistingUser, FoundPetController.getFoundAll);
foundPetRouter.get('/foundPet/:foundId', checkForExistingUser.ExistingUser, FoundPetController.getFoundById);
foundPetRouter.put('/foundPet/:foundId', checkForExistingUser.ExistingUser, FoundPetController.updateFoundById);
foundPetRouter.delete('/foundPet/:foundId', checkForExistingUser.ExistingUser, FoundPetController.deleteFoundById );
module.exports = foundPetRouter;