module.exports = function filter (array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            filteredArray[filteredArray.length] = array[i];
        }
    }
    return filteredArray;
};