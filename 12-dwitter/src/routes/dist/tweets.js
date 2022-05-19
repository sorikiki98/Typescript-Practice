"use strict";
exports.__esModule = true;
var express_1 = require("express");
var TweetController = require("../controller/tweets.js");
var router = express_1["default"].Router();
router.get('/', TweetController.getTweets);
exports["default"] = router;
