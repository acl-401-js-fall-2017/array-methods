const assert = require( 'assert' );
const filter = require( '../lib/filter' );

// test filter array
const createsFilteredArr = ( item, index ) => {
    return item
};

it( 'filter', () => {
    const initArr = [ 'sammy', 'sosa', 'sings', 'silly', 'songs' ];
    const filteredArr = filter( initArr, createsFilteredArr );

    assert.deepEqual( filteredArr, [ 'sammy', 'sings', 'silly', 'songs' ] );
});