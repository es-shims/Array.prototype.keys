'use strict';

var define = require('define-properties');
var callBind = require('es-abstract/helpers/callBind');
var RequireObjectCoercible = require('es-abstract/2019/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundKeys = function keys(array) {
	RequireObjectCoercible(array);
	return bound(array);
};

define(boundKeys, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundKeys;
