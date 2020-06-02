"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
var random = function (length) {
    var randomInt = function (min, max) { return (Math.random() * (max - min) + min); };
    var str = '';
    for (var i = 0; i < length; i += 1) {
        str += String.fromCharCode(randomInt(32, 126));
    }
    return str;
};
exports.random = random;
