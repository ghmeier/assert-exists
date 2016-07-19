'use strict';

var tape = require('tape');
var a = require('./index.js');

tape('testing exists', function t(assert) {
    var msg = a.existsMsg('test');
    a.exists(1, msg('num'));

    assert.end();
});
