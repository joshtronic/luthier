"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowerCaseFirst = void 0;
var lowerCaseFirst = function (str) { return (str.replace(/^\w/, function (c) { return c.toLowerCase(); })); };
exports.lowerCaseFirst = lowerCaseFirst;
