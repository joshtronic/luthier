"use strict";
function toUpperCaseFirst(str) {
    return str.replace(/^\w/, function (c) { return c.toUpperCase(); });
}
module.exports = {
    toUpperCaseFirst: toUpperCaseFirst,
};
