

const express = require("express");
const BannerRouter = express.Router();
const BannerController = require("./../Controlller/banner.controller")
// const BannerMiddleware = require("./../Middlewares/BannerImage");
const { ExistingUser } = require("../Middlewares/authMiddleware");


BannerRouter.post("/addBanner" , ExistingUser, BannerController.addBanner);
BannerRouter.get("/allBanners" , ExistingUser , BannerController.getBanners);

module.exports = BannerRouter;