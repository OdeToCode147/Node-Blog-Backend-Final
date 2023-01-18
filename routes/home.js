const express = require('express');
const homeData = require('../Controllers/home');
const mainRouter = express.Router();

mainRouter.get('/latest',homeData.getLatestData)
mainRouter.get('/latestArticle',homeData.getLatestArticleData)

module.exports = mainRouter