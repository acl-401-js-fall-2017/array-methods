function every (array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            newArray[newArray.length] = array[i];
        }}
    return newArray;
}

module.exports = every;