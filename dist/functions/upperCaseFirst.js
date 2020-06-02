"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperCaseFirst = void 0;
var upperCaseFirst = function (str) { return (str.replace(/^\w/, function (c) { return c.toUpperCase(); })); };
exports.upperCaseFirst = upperCaseFirst;
