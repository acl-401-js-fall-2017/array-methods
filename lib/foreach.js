function forEach(array, callback){
    for(let i = 0; i < array.length; i++){//Evaluates every element in the array by the callback.
        callback(array[i], i);
    }
}

module.exports = forEach;