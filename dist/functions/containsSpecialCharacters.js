"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsSpecialCharacters = void 0;
var containsSpecialCharacters = function (str) { return (/[^a-z0-9]/i.test(str)); };
exports.containsSpecialCharacters = containsSpecialCharacters;
