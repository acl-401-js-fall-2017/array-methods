
function reduce(array, callback, accumulator) {
    const noAccumulator = value === null;
    const accumulator = value;
    if(noAccumulator) value = array[0];

    for (let i = 0; i < array.length; i++){
        accumulator(callback(accumulator, array[i], i));
    }
    return accumulator;
}   

module.exports = reduce;