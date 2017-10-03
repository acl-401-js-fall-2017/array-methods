
function every( array, callback ) {

    let returnedValue = true;

    for( let i = 0; i < array.length; i++ ) {
        const item = array[i];
        if(!callback( item, i )) {
            returnedValue = false;
            break;
        }
    }
    return returnedValue;
}
module.exports = every;