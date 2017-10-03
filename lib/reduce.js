'use strict';

function reduce(arr, callback, initialVal) {
    let reduction;
    let i = 0

    if(initialVal) reduction = initialVal;
    else {
        reduction = arr[0]; 
        i = 1; 
    }

    for(i; i < arr.length; i++) {
        callback(reduction, arr[i], i);
    }

    return reduction;
}

module.exports = reduce;