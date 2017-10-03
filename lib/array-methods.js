

module.exports = {
    map(array, callback){
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = callback(array[i], i);
            console.log('inside array',newArray);
        }
        return newArray;
    }
};
