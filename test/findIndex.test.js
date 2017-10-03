const assert = require('assert');
const findIndex = require('../lib/findIndex');

describe('looking for index of array', () => {
    it('returns the index that was found', () => {
        const testArray = [ 5 , 10 , 20 ];
        const found = findIndex(testArray, x => x > 5);
        assert.equal(found, 1);

    });
});