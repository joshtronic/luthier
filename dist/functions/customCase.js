"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customCase = void 0;
var customCase = function (delimiter, str) { return (str.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/ +/g, delimiter)); };
exports.customCase = customCase;
