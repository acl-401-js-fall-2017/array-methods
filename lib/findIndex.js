function findIndex(array, callback){
    for (let i = 0; i < array.length; i++){
        if (array.hasOwnProperty(i) && callback(array[i], i)) return i;
    }
    return 0;
}

module.exports = findIndex;