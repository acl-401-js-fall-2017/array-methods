function map( array, callback ) {
    const newArr = [];
    for( let i = 0; i < array.length; i++ ) {
        const newEle = callback( array[i], i ); 
        newArr.push( newEle );
    }
    return newArr; 
}
module.exports = map;