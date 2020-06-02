"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSnakeCased = void 0;
var isSnakeCased = function (str) { return (/^[a-z]+((_[a-z0-9]+)+)?$/.test(str)); };
exports.isSnakeCased = isSnakeCased;
