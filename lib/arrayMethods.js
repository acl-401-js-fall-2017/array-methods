const arrayMethods = {};


arrayMethods.forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item, i);
    }
};

arrayMethods.map = (array, callback) => {
    const result =[];
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i], i);
    }
    return result;
};

arrayMethods.filter = (array, callback) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            filteredArray[filteredArray.length] = array[i];
        }
    }
    return filteredArray;
};

arrayMethods.findIndex = (array, callback ) => {
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

arrayMethods.every = (array, callback) => {
    for(let i = 0; i < array.length; i++){
        if( !callback(array[i]) ) {
            return false;
        }
    }
    return true;
};



module.exports = arrayMethods;