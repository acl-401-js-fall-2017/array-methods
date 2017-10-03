'use strict';

function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i]) continue;
        if( !(callback(arr[i], i)) ) return false;
    }
    return true;
}

module.exports = every;