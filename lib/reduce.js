function reduce(arr, callback, accumulator){
    var acc = accumulator;
    for(var i = 0; i < arr.length; i++){
        var newEle = callback(arr[i], acc);
        acc = newEle;
    }
    return acc

}

module.exports = reduce;