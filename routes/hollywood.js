const express = require('express');
const hollywoodData = require('../Controllers/hollywood');
const mainRouter = express.Router();

mainRouter.route("/hollywoodPost").get(hollywoodData.getHollywoodData)
mainRouter.route("/hollywoodFirstPost").get(hollywoodData.getHollywoodFirstData)
mainRouter.route("/hollywoodTopPost").get(hollywoodData.getHollywoodTopData)

module.exports = mainRouter