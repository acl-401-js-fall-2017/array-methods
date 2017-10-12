function filter(arr, callback) {
    const newArr = []; 
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) { //aparently this defininig a callback
            newArr.push (arr[i]);
            
        }
    }
    return newArr
}
module.exports = filter;