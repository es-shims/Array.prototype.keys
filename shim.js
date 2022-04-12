'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimArrayKeys() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ keys: polyfill },
		{ keys: function () { return Array.prototype.keys !== polyfill; } }
	);

	shimUnscopables('keys');

	return polyfill;
};
