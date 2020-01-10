"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lowerCaseFirst(str) {
    return str.replace(/^\w/, function (c) { return c.toLowerCase(); });
}
exports.lowerCaseFirst = lowerCaseFirst;
function lowerCaseWords(str) {
    return str.replace(/\w\S*/g, function (w) { return lowerCaseFirst(w); });
}
exports.lowerCaseWords = lowerCaseWords;
function reverse(str) {
    return str.split('').reverse().join('');
}
exports.reverse = reverse;
function shuffle(str) {
    var _a;
    var arr = str.split('');
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr.join('');
}
exports.shuffle = shuffle;
function startCase(str) {
    return upperCaseWords(str.toLowerCase());
}
exports.startCase = startCase;
function upperCaseFirst(str) {
    return str.replace(/^\w/, function (c) { return c.toUpperCase(); });
}
exports.upperCaseFirst = upperCaseFirst;
function upperCaseWords(str) {
    return str.replace(/\w\S*/g, function (w) { return upperCaseFirst(w); });
}
exports.upperCaseWords = upperCaseWords;
