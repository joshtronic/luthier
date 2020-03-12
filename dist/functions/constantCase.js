"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constantCase = function (str) { return (str.toUpperCase().replace(/[^A-Z0-9 ]/g, '').trim().replace(/ +/g, '_')); };
exports.constantCase = constantCase;
