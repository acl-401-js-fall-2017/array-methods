function findIndex (array, callback) {
    let inArray = -1;
    for (let i = 0; i < array. length; i++) {
        if (callback(array[i], i)) {
            inArray = i;
        } 
    }
    return inArray;
}

module.exports = findIndex;