const express = require('express');
const foodData = require('../Controllers/food');
const mainRouter = express.Router();

mainRouter.route("/foodPost").get(foodData.getFoodData)
mainRouter.route("/foodFirstPost").get(foodData.getFoodFirstData)
mainRouter.route("/foodTopPost").get(foodData.getFoodTopData)

module.exports = mainRouter