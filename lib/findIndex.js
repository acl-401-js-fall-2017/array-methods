function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const pass = callback(item);
        if (pass){
            return i;
        }else if(array.length<=i){
            return -1;
        }
    }
}

module.exports = findIndex;



