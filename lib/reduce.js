function reduce (array, callback, initialValue) {
    if (!initialValue) initialValue = array[0];
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

module.exports = reduce;