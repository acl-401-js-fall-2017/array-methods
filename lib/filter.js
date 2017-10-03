function filter(array, callback){
    var newArr = [];
    for(i = 0; i < array.length; i++){
        if(callback(array[i])){
            var newEle = array[i]
            newArr.push(newEle);
        }
    }
    return newArr;
}


module.exports = filter 