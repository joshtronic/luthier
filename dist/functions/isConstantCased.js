"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isConstantCased = function (str) { return (/^[A-Z]+((_([A-Z]|[0-9])+)+)?$/.test(str)); };
exports.isConstantCased = isConstantCased;
