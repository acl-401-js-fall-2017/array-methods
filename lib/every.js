function every(array, callback){
    for(let i = 0; i < array.length; i++){
        let callbackValue = callback(array[i]);
        if(!callbackValue){//If an element returns false when evaluated by the callback 'every' will return false. 
             return false
        }
    }
    return true
}


module.exports = every;