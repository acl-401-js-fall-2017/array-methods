
function map( array, callback ) {
    const mappin = [];
    
    for( let i = 0; i < array.length; i++ ) {
        mappin[i] = callback( array[i], i );
    }
    return mappin;
}
module.exports = map;