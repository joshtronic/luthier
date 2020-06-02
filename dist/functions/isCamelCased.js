"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCamelCased = void 0;
var isCamelCased = function (str) { return (/^[a-z]+((([A-Z][a-z]+)|([A-Z]?[0-9]+))+)?$/.test(str)); };
exports.isCamelCased = isCamelCased;
