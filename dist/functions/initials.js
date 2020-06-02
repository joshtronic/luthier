"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials = void 0;
var initials = function (str) { return (str.trim().split(/\s+/).reduce(function (result, word) { return result + word[0].toUpperCase(); }, '')); };
exports.initials = initials;
