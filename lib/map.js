function map(array, callback){
    let mapped =[];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        mapped [i]=callback(item);
    }
    return mapped;
}

module.exports = map;