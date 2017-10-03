function map(array, callback){
    var newArr = [];
    for(var i = 0; i<array.length; i++){
        var newEle = callback(array[i]);
        newArr.push(newEle);
    }
    return newArr;
}

module.exports = map;