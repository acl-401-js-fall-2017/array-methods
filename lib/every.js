function every(array, callback) {
    let outputValue = true;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) outputValue = false;
    }

    return outputValue;
}




module.exports = every;