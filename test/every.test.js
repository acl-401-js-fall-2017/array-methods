const assert = require('assert');
const every = require('../lib/every');

it('every', () => {
    const initArr = [7, 49, 68];
    const test = every(initArr, (ele) => ele > 5);

    assert.equal(test, true);
});