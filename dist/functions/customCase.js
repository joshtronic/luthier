"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customCase = function (delimiter, str) { return (str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, delimiter)); };
exports.customCase = customCase;
