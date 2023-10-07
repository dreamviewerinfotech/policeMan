const express = require('express');
const FoundHumanRouter = express.Router();
const FoundHumanController = require('../Controlller/foundHuman.controller');
 const checkForExistingUser = require("./../Middlewares/authMiddleware")

// Register a new user
FoundHumanRouter.post('/foundHuman', checkForExistingUser.ExistingUser , FoundHumanController.reportFoundHuman);
FoundHumanRouter.get('/foundHuman',checkForExistingUser.ExistingUser, FoundHumanController.getFoundAll);
FoundHumanRouter.get('/foundHuman/:foundId',checkForExistingUser.ExistingUser, FoundHumanController.getFoundById);
FoundHumanRouter.put('/foundHuman/:foundId',checkForExistingUser.ExistingUser, FoundHumanController.updateFoundById);
FoundHumanRouter.delete('/foundHuman/:foundId',checkForExistingUser.ExistingUser, FoundHumanController.deleteFoundById);

module.exports = FoundHumanRouter;


