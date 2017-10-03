function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (array.hasOwnProperty(i) && callback(array[i], i) === false) return false;
    }
    return true;
}

module.exports = every;