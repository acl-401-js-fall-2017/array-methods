

module.exports = {
    map(array, callback){
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = callback(array[i], i);
            console.log('inside array',newArray);
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
    }
};
