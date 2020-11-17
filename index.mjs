import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2020/RequireObjectCoercible.js';

import getPolyfill from 'array.prototype.keys/polyfill';

const bound = callBind(getPolyfill());

export default function keys(array) {
	RequireObjectCoercible(array);
	return bound(array);
}

export { default as getPolyfill } from 'array.prototype.keys/polyfill';
export { default as implementation } from 'array.prototype.keys/implementation';
export { default as shim } from 'array.prototype.keys/shim';
