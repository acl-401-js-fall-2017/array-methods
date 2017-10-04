function reduce(array, callback, accumulator) {
    for(let i = 0; i < array.length; i++) {
        accumulator = callback(array[i], accumulator);
    }
    return accumulator;
}

module.exports = reduce;