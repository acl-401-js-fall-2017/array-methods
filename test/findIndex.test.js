const assert = require('assert');
const findIndex = require('../lib/findIndex'); //eslint-disable-line


describe('findIndex function', () => {
    it('should return the index of the first value of an even number', () => {
        const array = [1, 1, 3, 4, 5];
        let findIndexVal = findIndex(array, (x) =>  {
            let modulo = x % 2;
            return modulo === 0;
        });
        assert.deepEqual(findIndexVal, 3);
    });
    it('should return the index of the first value of an odd number', () => {
        const array = [2, 4, 45, 4, 5];
        let findIndexVal = findIndex(array, (x) =>  {
            let modulo = x % 2;
            return modulo === 1;
        });
        assert.deepEqual(findIndexVal, 2);
    });
});