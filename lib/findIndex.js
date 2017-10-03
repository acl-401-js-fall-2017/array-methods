function findIndex(arr, callback){
    for(var i = 0; i < arr.length; i++ ){
        var result = callback(arr[i]);
        if(result){return i}
    }
}

module.exports = findIndex;