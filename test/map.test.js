const assert = require('assert');
const map = require('../lib/map');

describe('map function', () => {
    it('returns an array of nums multiplied by their indices', () => {
        const originalArray = [1, 2, 3, 4];
        const mappedArray = map(originalArray, (num, index) => {
            return num * index;
        });
        assert.deepEqual(mappedArray, [0, 2, 6, 12]);
    });

    it('returns an array of nums (with holes) multiplied by their indices', () => {
        const originalArray = [1, 2, , 3, 4];
        const mappedArray = map(originalArray, (num, index) => {
            return num * index;
        });
        assert.deepEqual(mappedArray, [0, 2, , 9, 16]);
    });


});