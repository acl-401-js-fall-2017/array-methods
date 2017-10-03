function reduce(array, callback , initialValue = false) {
    let accumulator = 0;
    for (let i = 0; i < array.length; i++){
        accumulator += array[i];
    }
    return accumulator;
}

module.exports = reduce;