'use strict';

const tape = require('tape');
const a = require('./index.js');

tape('testing exists', assert => {
	let message = a.msg('test');
	a.exists(1, message('num'));
	assert.pass();
	assert.end();
});

tape('testing type', assert => {
	let msg = a.msg('test');

	a.exists('value', msg('string'), 'string');
	assert.pass();
	assert.end();
});

tape('testing type no value', assert => {
	let msg = a.msg('test');
	assert.throws(() => {
		a.exists(null, msg('none'), 'string');
	}, 'Assertion Error');

	assert.end();
});
