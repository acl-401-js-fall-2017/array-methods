function map(arr, callback) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) continue;        
        newArr.push(callback(arr[i], i));
    }
    return newArr;
}

module.exports = map;