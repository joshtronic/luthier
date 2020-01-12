"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flip_characters_1 = require("./flip-characters");
var camelCase = function (str) {
    return lowerCaseFirst(pascalCase(str));
};
exports.camelCase = camelCase;
var constantCase = function (str) {
    return str.toUpperCase().replace(/[^A-Z ]/g, '').trim().replace(/ +/g, '_');
};
exports.constantCase = constantCase;
var countLines = function (str) {
    return str.split(/\r\n|\r|\n/).length;
};
exports.countLines = countLines;
var countWords = function (str) {
    return str.trim().split(/\s+/).length;
};
exports.countWords = countWords;
var dotCase = function (str) {
    return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '.');
};
exports.dotCase = dotCase;
var flip = function (str) {
    return str.split('').reverse().map(function (chr) {
        return flip_characters_1.flipCharacters[chr] || chr;
    }).join('');
};
exports.flip = flip;
var initials = function (str) {
    return str.trim().split(/\s+/).reduce(function (result, word) { return result + word[0].toUpperCase(); }, '');
};
exports.initials = initials;
var kebabCase = function (str) {
    return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '-');
};
exports.kebabCase = kebabCase;
var lowerCaseFirst = function (str) {
    return str.replace(/^\w/, function (c) { return c.toLowerCase(); });
};
exports.lowerCaseFirst = lowerCaseFirst;
var lowerCaseWords = function (str) {
    return str.replace(/\w\S*/g, function (w) { return lowerCaseFirst(w); });
};
exports.lowerCaseWords = lowerCaseWords;
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
var pascalCase = function (str) {
    return upperCaseWords(str.toLowerCase().replace(/[^a-z ]/g, '')).replace(/ /g, '');
};
exports.pascalCase = pascalCase;
var random = function (length) {
    var randomInt = function (min, max) { return (Math.random() * (max - min) + min); };
    var str = '';
    for (var i = 0; i < length; i++) {
        str += String.fromCharCode(randomInt(32, 126));
    }
    return str;
};
exports.random = random;
var reverse = function (str) {
    return str.split('').reverse().join('');
};
exports.reverse = reverse;
var rot13 = function (str) {
    return str.replace(/[a-z]/gi, function (c) { return (String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13))); });
};
exports.rot13 = rot13;
var shuffle = function (str) {
    var _a;
    var arr = str.split('');
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr.join('');
};
exports.shuffle = shuffle;
var snakeCase = function (str) {
    return str.toLowerCase().replace(/[^a-z ]/g, '').trim().replace(/ +/g, '_');
};
exports.snakeCase = snakeCase;
var startCase = function (str) {
    return upperCaseWords(str.toLowerCase());
};
exports.startCase = startCase;
var stripTags = function (str) {
    return str.replace(/<[^>]*>/g, '');
};
exports.stripTags = stripTags;
var studlyCaps = function (str) {
    return str.split('').reduce(function (result, chr) {
        if (/[a-z]/i.test(chr)) {
            if (result.upper) {
                result.string += chr.toUpperCase();
                result.upper = false;
            }
            else {
                result.string += chr.toLowerCase();
                result.upper = true;
            }
        }
        else {
            result.string += chr;
        }
        return result;
    }, { string: '', upper: true }).string;
};
exports.studlyCaps = studlyCaps;
var upperCaseFirst = function (str) {
    return str.replace(/^\w/, function (c) { return c.toUpperCase(); });
};
exports.upperCaseFirst = upperCaseFirst;
var upperCaseWords = function (str) {
    return str.replace(/\w\S*/g, function (w) { return upperCaseFirst(w); });
};
exports.upperCaseWords = upperCaseWords;
