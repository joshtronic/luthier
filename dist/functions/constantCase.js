"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantCase = void 0;
var constantCase = function (str) { return (str.toUpperCase().replace(/[^A-Z0-9 ]/g, '').trim().replace(/ +/g, '_')); };
exports.constantCase = constantCase;
