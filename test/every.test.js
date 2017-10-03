const assert = require('assert');
const every = require('../lib/every');

const callback = (ele) => ele > 10;

it('every', () => {
    const initArr = [7, 49, 68];
    const test = every(initArr, callback);

    assert.equal(test, false);
});