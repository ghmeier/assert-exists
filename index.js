const assert = require('assert');

module.exports.exists = assertExists;
module.exports.msg = existsMsg;

function assertExists(value, err, type) {
	let exists = value;
	if (type && typeof type === 'string') {
		/* eslint-disable valid-typeof */
		exists = value && typeof value === type;
		/* eslint-enable valid-typeof */
	}
	assert(exists, err);
}

function existsMsg(module) {
	return name => {
		return 'ERROR: Expected ' + name + ' to be passed into ' + module + '.';
	};
}
