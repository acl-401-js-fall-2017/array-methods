function map(array, callback) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        const newInt = callback(array[i], i);
        
        newArr[i] = newInt;
        
    }
    return newArr;
}
module.exports = map;