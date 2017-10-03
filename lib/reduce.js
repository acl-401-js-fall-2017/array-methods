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
        if(!arr.hasOwnProperty(i)) continue;
        else callback(reduction, arr[i], i);
    }

    return reduction;
}

module.exports = reduce;