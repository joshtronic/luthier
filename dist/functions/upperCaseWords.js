"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upperCaseFirst_1 = require("./upperCaseFirst");
var upperCaseWords = function (str) { return (str.replace(/\b\w/g, function (w) { return upperCaseFirst_1.upperCaseFirst(w); })); };
exports.upperCaseWords = upperCaseWords;
