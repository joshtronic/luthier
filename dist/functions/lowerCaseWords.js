"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lowerCaseFirst_1 = require("./lowerCaseFirst");
var lowerCaseWords = function (str) { return (str.replace(/\w\S*/g, function (w) { return lowerCaseFirst_1.lowerCaseFirst(w); })); };
exports.lowerCaseWords = lowerCaseWords;
