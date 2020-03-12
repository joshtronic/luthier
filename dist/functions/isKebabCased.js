"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isKebabCased = function (str) { return (/^[a-z]+((-[a-z0-9]+)+)?$/.test(str)); };
exports.isKebabCased = isKebabCased;
