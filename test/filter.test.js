const assert = require('assert');

describe('filter function', () => {
    it('those of an array greater than 5', () => {
        const array = [2, 4, 6, 8, 10];
        const filterArray = filter(array, (int) => {
            if (int > 5) return int; 
        });
        assert.deepEqual(filterArray, [6, 8, 10]);
    });
});