"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCase = void 0;
var snakeCase = function (str) { return (str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, '_')); };
exports.snakeCase = snakeCase;
