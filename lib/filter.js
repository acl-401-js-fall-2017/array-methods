'use strict';

function filter(arr, callback) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) continue;
        if(callback(arr[i], i)) newArr.push(arr[i]);
    }

    return newArr;
}

module.exports = filter;