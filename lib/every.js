function every(arr, callback){
    for(var i = 0; i < arr.length; i++){
        var result = callback(arr[i]);
        if(!result){ return false}
    }
    return true
}


module.exports = every;