'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayKeys() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ keys: polyfill },
		{ keys: function () { return Array.prototype.keys !== polyfill; } }
	);
	return polyfill;
};
