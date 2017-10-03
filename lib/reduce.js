
function reduce( array, callback, value) {
    const noValue = value === null;

    if(noValue) value = array[0];

    let accumulator = value;

    for( let i = noValue ? 1 : 0; i < array.length; i++ ) {
        accumulator = callback(accumulator, array[i], i );
    } 
    return accumulator;
}
module.exports = reduce;