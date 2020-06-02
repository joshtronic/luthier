"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKebabCased = void 0;
var isKebabCased = function (str) { return (/^[a-z]+((-[a-z0-9]+)+)?$/.test(str)); };
exports.isKebabCased = isKebabCased;
