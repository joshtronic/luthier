"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countLines = void 0;
var countLines = function (str) { return (str.split(/\r\n|\r|\n/).length); };
exports.countLines = countLines;
