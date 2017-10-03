function map (array, callback){
    let newArray = new Array(array.length);

    for (let i = 0; i < array.length; i++){
        if ( array.hasOwnProperty(i) ) newArray[i] = callback(array[i], i);
    }
    
    return newArray;
}

module.exports = map;