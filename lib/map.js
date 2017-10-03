function map (array, callback){
    for (let i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
    }
    return array;
}

module.exports = map;