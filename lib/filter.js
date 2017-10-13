function filter(array, callback) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const pass = callback(item);
        if(pass){
            filtered[filtered.length]=item;
        }
    }
    return filtered;
}


module.exports = filter;