const assert = require( 'assert' );
const findIndex = require( '../lib/findIndex' );

// test findIndex array

it( 'findIndex', () => {
    const origArr = [ 6, 2, 200, 30 ];
    const foundIndexArr = findIndex( origArr, ( ele ) => ele > 25 );

    assert.deepEqual( foundIndexArr, 2 );
});