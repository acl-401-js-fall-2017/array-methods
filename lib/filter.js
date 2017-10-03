function filter(array, callback) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        filtered[i] = callback(item <= 10);
    }
    return filtered;
}


module.exports = filter;