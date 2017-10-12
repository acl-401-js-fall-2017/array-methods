function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        if ( array.hasOwnProperty(i) ) callback(item, i);
    }
}

module.exports = forEach;