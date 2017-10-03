function map(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) {
            newArr = newArr.concat([,]);
        }        
        else newArr.push(callback(arr[i], i));
    }
    return newArr;
}

module.exports = map;