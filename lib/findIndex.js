function findIndex(array, callback){
    for(let i = 0; i < array.length; i++ ){
        let callbackValue = callback(array[i]);
        if(callbackValue){//retruns the index of the first element in the array that evaluates to true.
            return i;
        }
    }
    return -1; //if no element evaluates to true by the callback returns -1.
}

module.exports = findIndex;