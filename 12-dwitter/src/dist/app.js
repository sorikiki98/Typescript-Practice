"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var morgan_1 = require("morgan");
var index_1 = require("../node_modules/helmet/dist/types/index");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(morgan_1["default"]('tiny'));
app.use(index_1["default"]());
app.use(function (req, res, next) {
    res.sendStatus(404);
});
app.listen(8080, function () {
    console.log('STARTED!');
});
