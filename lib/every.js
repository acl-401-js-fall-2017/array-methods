function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) return false;
    }
    return true;
}

module.exports = every;