function map(array, callback){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item * 2);
    }

}

module.exports = map;