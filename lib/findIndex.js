'use strict';

function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) continue;
        else if(callback(arr[i], i)) return i;
    }
}

module.exports = findIndex;