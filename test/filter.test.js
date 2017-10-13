const assert = require('assert');
const filter = require('../lib/filter');

describe('filter function', function () {
    it('should return an array of integers less than 3', () => {
        let array = [5, 4, 3, 2, 1];
        let filterArray = filter(array, (index) => index < 3);
        assert.deepEqual(filterArray, [2, 1]);
    });
    it('should return an array of integers less than 4', () => {
        let array = [5, 4, 3, 2, 1];
        let filterArray = filter(array, (index) => index < 4);
        assert.deepEqual(filterArray, [3, 2, 1]);
    });
});