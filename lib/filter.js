'use strict';

function filter(arr, callback) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) newArr = newArr.concat([,]);
        else if(callback(arr[i], i)) newArr.push(arr[i]);
    }

    return newArr;
}

module.exports = filter;