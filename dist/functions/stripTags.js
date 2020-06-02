"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTags = void 0;
var stripTags = function (str) { return (str.replace(/<[^>]*>/g, '')); };
exports.stripTags = stripTags;
