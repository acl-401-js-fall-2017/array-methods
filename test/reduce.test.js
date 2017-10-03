const assert = require('assert');
const reduce = require('../lib/reduce');

describe('applies accumulator to every index, then reduces to one value', () => {
    it('reduces values to a single value', () => {

        const testArray = [ 5 , 10 , 15 ];
        const sum = reduce( testArray, ( total, x ) => total + x, 0 );

        assert.deepEqual( sum , 30 );

    });
}); 