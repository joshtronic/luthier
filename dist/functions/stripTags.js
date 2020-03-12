"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stripTags = function (str) { return (str.replace(/<[^>]*>/g, '')); };
exports.stripTags = stripTags;
