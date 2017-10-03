module.exports = function findIndex(array, callback ) {
    const foundIndex = [];
    for( let i = 0; i<array.length; i++){
        if(callback(array[i], i)) {
            foundIndex.push(i);
        }
    }
    if(foundIndex.length === 0){
        return -1;
    }else{
        return foundIndex[0];
    }
};