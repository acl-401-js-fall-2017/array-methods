const assert = require('assert');
const map = require('../lib/map');

describe('map function', () => {
    it('returns a modified array', () => {
        const originalArray = [1, 2, 3, 4];
        const mappedArray = map(originalArray, (num, index) => {
            return num * index;
        });
        assert.deepEqual(mappedArray, [0, 2, 6, 12]);
    });
});