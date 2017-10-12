function indexFinder (arr, callback){
    var index = 0
    for (var i = 0; i < arr.length; i++) {
        if ( callback(arr[i], i) ) {
           return index = arr[i] 
        } 
    }
};

module.exports = indexFinder;