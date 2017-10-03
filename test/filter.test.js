const assert = require('assert');
const filter = require('../lib/filter'); //eslint-disable-line

describe('filter function', function () {
    it('should return an array of integers less than 3', () => {
        let array = [5, 4, 3, 2, 1];
        let filterArray = array.filter( function (index) {
            return index < 3;
        });
        assert.deepEqual(filterArray, [2, 1]);
    });
});