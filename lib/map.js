function map(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let newInt = callback(arr[i]);
        newArr.push(newInt);
    }
    return newArr;
}
module.exports = map;