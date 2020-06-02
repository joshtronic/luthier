"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsOnlySpecialCharacters = void 0;
var containsOnlySpecialCharacters = function (str) { return (/^[^a-z0-9]+$/i.test(str)); };
exports.containsOnlySpecialCharacters = containsOnlySpecialCharacters;
