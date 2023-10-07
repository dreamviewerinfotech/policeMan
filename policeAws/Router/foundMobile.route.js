const express = require('express');
const foundMobileRouter = express.Router();
const FoundMobileController = require('../Controlller/foundMobile.controller');
const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
foundMobileRouter.post('/foundMobile', [checkForExistingUser.ExistingUser], FoundMobileController.createFoundMobile);
foundMobileRouter.get('/foundMobile',checkForExistingUser.ExistingUser, FoundMobileController.getFoundAll);
foundMobileRouter.get('/foundMobile/:foundId',checkForExistingUser.ExistingUser,  FoundMobileController.getFoundById);
foundMobileRouter.put('/foundMobile/:foundId', checkForExistingUser.ExistingUser, FoundMobileController.updateFoundById);
foundMobileRouter.delete('/foundMobile/:foundId',checkForExistingUser.ExistingUser,  FoundMobileController.deleteFoundById);
module.exports = foundMobileRouter; 