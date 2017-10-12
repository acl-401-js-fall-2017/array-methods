function filter(array, callback){
    let filteredArray = [];
    for(var i = 0; i < array.length; i++){
        if(callback(array[i])){//checks which elements of the array return true when evaluated by the callack. 
            let validElement = array[i];
            filteredArray.push(validElement);
        }
    }
    return filteredArray;
}


module.exports = filter;