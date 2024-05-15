import assert from 'assert';
import {addMilliseconds} from 'date-fns'

const now = () => new Date();
const timeout = 500;
const expected = addMilliseconds(now(), timeout);

setTimeout(() => {
	assert(now() >= expected);
	console.debug('done');
}, timeout);

console.debug('init');
