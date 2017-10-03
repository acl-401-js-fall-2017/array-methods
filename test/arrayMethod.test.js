const assert = require('assert');
const forEach = require('../lib/forEach');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/findIndex');
const every = require('../lib/every');
const reduce = require('../lib/reduce');


describe('array methods', () => {

    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });

    it('map', () => {
        const array = [2, 3, 6];
        const mapArray = map(array, (num, index) => {
            return num * num;
        });
        assert.deepEqual(mapArray, [4, 9, 36]);
    });

    it('filter', () => {
        const array = [2, 5, 8];
        const filterArray = filter(array, (num, index) => {
            return num % 2 === 0;
        });
        assert.deepEqual(filterArray, [2, 8]);
    });

    it('findIndex', () => {  
        let array = [3, 7, 11];
        let findIndexNum = findIndex(array, (num, index) => {
            return num === 11;
        });
        assert.deepEqual(findIndexNum, 2);
    });

    it('findIndexIfNotInArray', () => {
        let array = [0, 5, 121];
        let findIndexNum = findIndex(array, (num, index) => {
            return num === 13;
        });
        assert.deepEqual(findIndexNum, -1);
    });

    it('everyIfTrue', () => {
        let array = [5, 6, 7];
        let everyArray = every(array, (num, index) => {
            return num > 0;
        });
        assert.deepEqual(everyArray, true);
    });

    it('everyIfFalse', () => {
        let array = [5, 6, 7];
        let everyArray = every(array, (num, index) => {
            return num > 100;
        });
        assert.deepEqual(everyArray, false);
    });

    // it.only('reduce', () => {
    //     let array = [10, 14, 18];
    //     let reduceArray = reduce(array, (total, initialValue) => {
    //         return total + initialValue;
    //     });
    //     assert.deepEqual(reduceArray, 42);
    // })

});

