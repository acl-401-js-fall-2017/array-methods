function findIndex(array, callback){
    for (let i = 0; i < array.length; i++){
        if (array[i] && callback(array[i])) return i;
    }
    return 0;
}

module.exports = findIndex;