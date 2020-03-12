"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeronym = function (str) {
    var trimmed = str.trim().replace(/\s+/, '').split('');
    if (trimmed.length === 1) {
        return trimmed[0];
    }
    if (trimmed.length === 2) {
        return trimmed[0] + (trimmed.length - 1);
    }
    return trimmed[0] + (trimmed.length - 2) + trimmed.slice(-1);
};
exports.numeronym = numeronym;
