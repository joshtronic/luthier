"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upperCaseWords_1 = require("./upperCaseWords");
var pascalCase = function (str) { return (upperCaseWords_1.upperCaseWords(str.toLowerCase().replace(/[^a-z0-9 ]/g, '')).replace(/ /g, '')); };
exports.pascalCase = pascalCase;
