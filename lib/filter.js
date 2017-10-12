function filter(array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array.hasOwnProperty(i) && callback(array[i], i)) newArray.push(array[i]);   
    }
    return newArray;
}

module.exports = filter;