'use strict';

var tape = require('tape');
var a = require('./index.js');

tape('testing exists', function t(assert) {
    var message = a.msg('test');
    a.exists(1, message('num'));
    assert.pass();
    assert.end();
});

tape('testing type', function t(assert) {
    var msg = a.msg('test');

    a.exists('value', msg('string'), 'string');
    assert.pass();
    assert.end();

});

tape('testing type no value', function t(assert) {
    var msg = a.msg('test');
    assert.throws(function tryThrows() {
        a.exists(null, msg('none'), 'string');
    }, 'Assertion Error');

    assert.end();
});
