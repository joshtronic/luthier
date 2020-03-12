"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var containsSpecialCharacters = function (str) { return (/[^a-z0-9]/i.test(str)); };
exports.containsSpecialCharacters = containsSpecialCharacters;
