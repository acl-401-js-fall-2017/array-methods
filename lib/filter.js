function filter(array, callback) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        const newInt = callback(array[i]);
        if (newInt === true) {
            newArr = newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports = filter;