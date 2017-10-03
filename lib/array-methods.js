

module.exports = {
    map(array, callback){
        const newArray = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)){
                newArray[i] = callback(array[i], i);
                console.log('inside array',newArray);
            } 
        }
        return newArray;
    },
    filter(array, callback){
        const newArray=[];
        let j=0;
        for (let i =0; i<array.length;i++) {
            if (callback(array[i])) {
                newArray[j] = array[i];
                j ++;
            }
        }
        return newArray;
    },

    reduce(array, callback, initValue){
        let start = 0;
        if(initValue === undefined){
            initValue = array[0];
            start = 1;
        }
        let accumulator = initValue;
        for (let i = start; i<array.length;i++) {
            accumulator = callback(accumulator, array[i]);
            console.log(accumulator);
        }
        return accumulator;
    },

    findIndex(array, callback) {
        for (let i = 0; i<array.length;i++) {
            if (callback(array[i])) {
                return i;    
            }
        } 
        return -1;
    },

    every(array, callback) {
        for (let i = 0; i<array.length; i++) {
            if (!callback(array[i])) {
                return false;
            }
        }
        return true;
    }

};
