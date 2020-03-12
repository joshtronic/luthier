"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upperCaseWords_1 = require("./upperCaseWords");
var startCase = function (str) { return (upperCaseWords_1.upperCaseWords(str.toLowerCase())); };
exports.startCase = startCase;
