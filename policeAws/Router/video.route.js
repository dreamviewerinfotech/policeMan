

const express = require("express");
const VideoRouter = express.Router();
const VideoController = require("./../Controlller/Videos.controller")
const { ExistingUser } = require("../Middlewares/authMiddleware");


VideoRouter.post("/addVideo" , ExistingUser , VideoController.addVideo);
VideoRouter.get("/allVideos" , ExistingUser , VideoController.getVideos);
VideoRouter.get("/video/:id" , ExistingUser , VideoController.getVideoById);
VideoRouter.delete("/deleteVideo/:id" , ExistingUser , VideoController.deleteVideo);

module.exports = VideoRouter;

//image