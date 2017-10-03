function reduce(array, callback , initialValue = 0) {
    let accumulator = 0;
    for (let i = initialValue; i < array.length; i++){
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

module.exports = reduce;