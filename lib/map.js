function map (array, callback){
    let newArray = array.slice();

    for (let i = 0; i < array.length; i++){
        if ( newArray.hasOwnProperty(i) ) newArray[i] = callback(array[i], i);
    }
    
    return newArray;
}

module.exports = map;