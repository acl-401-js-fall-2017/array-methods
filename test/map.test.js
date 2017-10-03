const assert = require('assert');
const map = require('../lib/map');

describe('mapping arrays!', () => {
    it('mapping', () => {

        const array = [ 8 , 9 , 10 ];
        const mapped = map( array, x => x + x );
        
        assert.deepEqual( mapped, [ 16 , 18 , 20 ] );
    });
});