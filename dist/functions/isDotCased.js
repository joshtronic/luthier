"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDotCased = void 0;
var isDotCased = function (str) { return (/^[a-z]+((\.[a-z0-9]+)+)?$/.test(str)); };
exports.isDotCased = isDotCased;
