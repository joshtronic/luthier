"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = void 0;
var flipCharacters_1 = require("../mappings/flipCharacters");
var flip = function (str) { return (str.split('').reverse().map(function (chr) { return (flipCharacters_1.flipCharacters[chr] || chr); }).join('')); };
exports.flip = flip;
