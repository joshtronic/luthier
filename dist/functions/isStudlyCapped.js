"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isStudlyCapped = function (str) {
    var isStudly = true;
    var shouldBeUpperCased = true;
    str.split('').forEach(function (chr) {
        if (isStudly) {
            if (shouldBeUpperCased) {
                if (!/[A-Z]/.test(chr)) {
                    isStudly = false;
                }
            }
            else if (!/[a-z]/.test(chr)) {
                isStudly = false;
            }
        }
        shouldBeUpperCased = !shouldBeUpperCased;
    });
    return isStudly;
};
exports.isStudlyCapped = isStudlyCapped;
