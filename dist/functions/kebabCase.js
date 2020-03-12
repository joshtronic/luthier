"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kebabCase = function (str) { return (str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, '-')); };
exports.kebabCase = kebabCase;
