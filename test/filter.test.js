const assert = require( 'assert' );
const filter = require( '../lib/filter' );

// test filter array
const createsFilteredArr = ( item) => {
    return item;
};

it( 'filter', () => {
    const initArr = [ 'sammy', 'sosa', 'sings', 'silly', 'songs' ];
    const filteredArr = filter( initArr, createsFilteredArr );
    // const filteredArr = filter( initArr, (item) =>  item > 4 );

    assert.deepEqual( filteredArr, [ 'sammy', 'sings', 'silly', 'songs' ] );
});