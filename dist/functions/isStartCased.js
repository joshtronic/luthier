"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isStartCased = function (str) { return (/^[A-Z][a-z]+(( (([A-Z][a-z]+)|[0-9]+))+)?$/.test(str)); };
exports.isStartCased = isStartCased;
