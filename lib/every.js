function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const pass = callback(item);
        if (pass) {
            return i;
        } 
    }
}

module.exports = every;