function map(array, callback){
    let mappedArray = [];
    for(var i = 0; i<array.length; i++){//Evaluates each element in the given array and adds the result to a new array. 
        let newArrayElement = callback(array[i]);
        mappedArray.push(newArrayElement);
    }
    return mappedArray;
}

module.exports = map;