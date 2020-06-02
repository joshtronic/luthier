"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studlyCaps = void 0;
var studlyCaps = function (str) { return (str.toLowerCase().replace(/[^a-z]/g, '').split('').reduce(function (previousResult, chr) {
    var result = previousResult;
    if (result.upper) {
        result.string += chr.toUpperCase();
        result.upper = false;
    }
    else {
        result.string += chr.toLowerCase();
        result.upper = true;
    }
    return result;
}, {
    string: '',
    upper: true,
}).string); };
exports.studlyCaps = studlyCaps;
