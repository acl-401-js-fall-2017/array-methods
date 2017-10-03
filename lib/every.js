function every(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        const test = callback(array[i]);
        if (test);
        return false;
    }
}
module.exports = every;