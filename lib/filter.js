function filter( array, callback ) {
    
    const filteredArr = [];

    for( let i = 0; i < array.length; i++) {
        const conditionalEle = callback( array[i], i );
        if( conditionalEle) {
            filteredArr[filteredArr.length] = array[i];
        }
    }
    return filteredArr;

}

module.exports = filter;