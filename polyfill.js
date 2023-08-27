'use strict';

var IsCallable = require('es-abstract/2023/IsCallable');

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	// Safari 7.1 defines Array#keys and Array#entries natively, but the resulting ArrayIterator objects don't have a "next" method.
	if (Array.prototype.keys && IsCallable([1].keys().next)) {
		return Array.prototype.keys;
	}

	return implementation;
};
