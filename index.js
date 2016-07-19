'use strict';

var assert = require('assert');

module.exports.exists = assertExists;
module.exports.msg = existsMsg;

function assertExists(value, err, type) {
    var exists = value;
    if (type) {
        exists = value && typeof value === type;
    }
    assert(exists, err);
}

function existsMsg(module) {
    return function Err(name) {
        return 'ERROR: Expected ' + name + ' to be passed into ' + module + '.';
    };
}
