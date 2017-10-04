function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        let indexValue = callback(array[i]);
        if (indexValue) return i;
    }
}

module.exports = findIndex;