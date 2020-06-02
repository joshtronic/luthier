"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPascalCased = void 0;
var isPascalCased = function (str) { return (/^[A-Z][a-z]+((([A-Z][a-z]+)|([A-Z]?[0-9]+))+)?$/.test(str)); };
exports.isPascalCased = isPascalCased;
