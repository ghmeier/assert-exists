const test = require('ava');
const a = require('./index.js');

test('testing exists', t => {
	const message = a.msg('test');
	a.exists(1, message('num'));
	t.pass();
});

test('testing type', t => {
	const msg = a.msg('test');

	a.exists('value', msg('string'), 'string');
	t.pass();
});

test('testing type no value', t => {
	const msg = a.msg('test');
	t.throws(() => {
		a.exists(null, msg('none'), 'string');
	}, 'ERROR: Expected none to be passed into test.');
});
