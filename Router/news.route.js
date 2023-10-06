

const express = require("express");
const NewsRouter = express.Router();
const NewsController = require("./../Controlller/news.controller")
const { ExistingUser } = require("../Middlewares/authMiddleware");


NewsRouter.post("/addNews" , ExistingUser, NewsController.addNews);
NewsRouter.get("/allNews" , ExistingUser, NewsController.getNews);
NewsRouter.get("/News/:id" , ExistingUser , NewsController.getNewsById);
NewsRouter.delete("/deleteNews/:id" , ExistingUser, NewsController.deleteNews);
NewsRouter.put("/updateNews" ,ExistingUser , NewsController.updateNews);

module.exports = NewsRouter;


//image