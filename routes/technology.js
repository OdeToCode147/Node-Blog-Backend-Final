const express = require("express");
const technologyData = require("../Controllers/technology");
const mainRouter = express.Router();

mainRouter.route("/technologyPost").get(technologyData.getTechnologyData);
mainRouter.route("/technologyFirstPost").get(technologyData.getTechnologyFirstData);
mainRouter.route("/technologyTopPost").get(technologyData.getTechnologyTopData);

module.exports = mainRouter;
