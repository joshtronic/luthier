"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = void 0;
var lowerCaseFirst_1 = require("./lowerCaseFirst");
var pascalCase_1 = require("./pascalCase");
var camelCase = function (str) { return (lowerCaseFirst_1.lowerCaseFirst(pascalCase_1.pascalCase(str))); };
exports.camelCase = camelCase;
