const express = require('express');
const foundBagRouter = express.Router();
const FoundBagController = require('../Controlller/foundBag.controller');
 const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
foundBagRouter.post('/foundBag', [checkForExistingUser.ExistingUser],  FoundBagController.createFoundBag);
foundBagRouter.get('/foundBag',checkForExistingUser.ExistingUser, FoundBagController.getFoundAll);
foundBagRouter.get('/foundBag/:foundId',checkForExistingUser.ExistingUser, FoundBagController.getFoundById);
foundBagRouter.put('/foundBag/:foundId', checkForExistingUser.ExistingUser,FoundBagController.updateFoundById);
foundBagRouter.delete('/foundBag/:foundId', checkForExistingUser.ExistingUser,FoundBagController.deleteFoundById);

module.exports = foundBagRouter; 


