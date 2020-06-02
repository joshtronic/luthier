"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rot13 = void 0;
var rot13 = function (str) { return (str.replace(/[a-z]/gi, function (c) { return (String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13))); })); };
exports.rot13 = rot13;
