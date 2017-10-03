function filter( array, callback ) {
    
    const filteredArr = [];

    for( let i = 0; i < array.length; i++) {
        if( array[i].length > 4 ) {
            const conditionalEle = callback( array[i], i );
            filteredArr.push( conditionalEle );
        }
    }
    return filteredArr;
}

module.exports = filter;