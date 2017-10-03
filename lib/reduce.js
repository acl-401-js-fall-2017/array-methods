function reduce(array, callback, accumulator){
    for(var i = 0; i < array.length; i++){
        let callbackValue = callback(array[i], accumulator);
        accumulator = callbackValue;
    }
    return accumulator
}

module.exports = reduce;