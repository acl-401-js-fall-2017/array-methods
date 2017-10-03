const assert = require('assert');
const findIndex = require('../lib/findIndex');

describe('looking for index of array', () => {
    it('returns the index that was found', () => {
        const testArray = [ 10 , 20 , 30 ];
        const found = findIndex(testArray, x => x > 10);
        assert.equal(found, 1);

    });
});