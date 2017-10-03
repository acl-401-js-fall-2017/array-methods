const assert = require('assert');
const findIndex = require('../lib/findIndex'); //eslint-disable-line


describe('findIndex function', function () {
    it('should return the index of the first value of an even number', () => {
        let array = [1, 2, 3, 4, 5];
        let findIndexVal = array.findIndex( function (x, index) {
            if (x % 2 === 0) {
                return index;
            }
        });
        assert.deepEqual(findIndexVal, 1);
    });
});