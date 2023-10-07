const express = require('express');
const foundOtherRouter = express.Router();
const FoundOtherController = require('../Controlller/foundOther.controller');
const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
foundOtherRouter.post('/foundOther',checkForExistingUser.ExistingUser,  FoundOtherController.createFoundOther);
foundOtherRouter.get('/foundOther', checkForExistingUser.ExistingUser, FoundOtherController.getFoundAll);
foundOtherRouter.get('/foundOther/:foundId',checkForExistingUser.ExistingUser,  FoundOtherController.getFoundById);
foundOtherRouter.put('/foundOther/:foundId',  checkForExistingUser.ExistingUser, FoundOtherController.updateFoundById);
foundOtherRouter.delete('/foundOther/:foundId',checkForExistingUser.ExistingUser,  FoundOtherController.deleteFoundById);
module.exports = foundOtherRouter;