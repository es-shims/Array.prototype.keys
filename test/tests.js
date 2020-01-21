'use strict';

var iterate = require('iterate-iterator');

var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.

module.exports = function (keys, t) {
	t.deepEqual(iterate(keys([])), [], 'empty array yields noting');
	t.deepEqual(iterate(keys([1, 2])), [0, 1], 'array yields indices');
	if (canDistinguishSparseFromUndefined) {
		// eslint-disable-next-line no-sparse-arrays
		t.deepEqual(iterate(keys([1, , 3])), [0, 1, 2], 'sparse array yields dense keys');
	}
};
