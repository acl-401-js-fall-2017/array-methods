const assert = require('assert');
const map = require('../lib/map');

describe('map function', () => {
    it('an array of integers raised to the power of their index', () => {
        const array = [1, 2, 3, 4, 5];
        const mapArray = map(array, (int, index) => {
            return int * index;
        });
        assert.deepEqual(mapArray, [0, 2, 6, 12, 20]);
    });
});