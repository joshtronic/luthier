"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotCase = void 0;
var dotCase = function (str) { return (str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, '.')); };
exports.dotCase = dotCase;
