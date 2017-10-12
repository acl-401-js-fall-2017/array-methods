function reduce(arr, callback, initialVal) {
    let sum;
    let i = 0

    if(initialVal) sum = initialVal;
    else {
        sum = arr[0]; 
        i = 1; 
    }

    for(i; i < arr.length; i++) {
        callback(sum, arr[i], i);
    }

    return sum;
}

module.exports = reduce;