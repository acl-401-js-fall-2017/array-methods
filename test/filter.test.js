const assert = require('assert');
const filter = require('../lib/filter');


describe('new filtered array', () => {
    const testFilterArray = [1,2,3];
    const greaterThanArray = filter(testFilterArray, (item) => item > 1);

    it('filtered array', () => {
        assert.deepEqual(greaterThanArray, [2,3]);
    });
});
