const assert = require('assert');
const forEach = require('../lib/forEach');
const every = require('../lib/every');
const reduce = require('../lib/reduce');


function filter(array, callback){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])) newArray.push(array[i]);
    }
    return newArray;
}

describe('array methods', () => {
    it('forEach', () => {
        let array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });

    it('every', () => {
        let array = [1, 2, 3];
        let moreThanZero = a => a > 0;
        let result = every(array, moreThanZero);
        assert.equal(result, true);
    });

    it('reduce', () => {
        let array = [1, 2, 3];
        let addToAccumulator = (accumulator, arrayElement) => accumulator += arrayElement;
        let initialValue = 1;
        let result = reduce(array, addToAccumulator, initialValue);
        assert.equal(result, 5);
    });

    it('filter', () => {
        let array = [1, 2, 3];
        let isThree = arrayElement => arrayElement === 3;
        let result = filter(array, isThree);
        assert.deepEqual(result, [3]);
    });

});