const assert = require('assert');
const every = require('../lib/every');

describe('returns true is all items pass', () => {
    it('every item', () => {

        const testArray = [5, 10, 15];
        const everyItem = every(testArray, x => x > 5);

        assert.deepEqual(everyItem, false);
    });
});