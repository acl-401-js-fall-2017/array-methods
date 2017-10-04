const assert = require('assert');
const filter = require('../lib/filter');

describe('filter function', () => {
    it('should return an array of integers less than 3', () => {
        const array = [5, 4, 3, 2, 1];
        let filterArray = filter(array, (x) => x < 3);
        assert.deepEqual(filterArray, [2, 1]);
    });
    it('should return an array of integers less than 4', () => {
        const array = [5, 4, 3, 2, 1];
        let filterArray = filter(array, (x) => x < 4);
        assert.deepEqual(filterArray, [3, 2, 1]);
    });
});