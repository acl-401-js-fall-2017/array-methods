const assert = require( 'assert' );
const map = require( '../lib/map' );

// test map array
const createsNewArr = ( ele, index ) => {
    return index
};

it( 'map', () => {
    const origArr = [ 'x', 'y', 'z' ];
    const newArr = map( origArr, createsNewArr );

    assert.deepEqual( newArr, [0, 1, 2] );
});
