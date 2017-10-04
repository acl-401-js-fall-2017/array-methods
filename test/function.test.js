const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const findIndex = require('../lib/findIndex');
const every = require('../lib/every');
const reduce = require('../lib/reduce');

describe('Array Methods', () => {
    describe('map function', () => {
        it('an array of integers multiplied by their index', () => {
            const array = [1, 2, 3, 4, 5];
            const mapArray = map(array, (int, index) => {
                return int * index;
            });
            assert.deepEqual(mapArray, [0, 2, 6, 12, 20]);
        });
    });
    describe('filter function', () => {
        it('should return an array of integers less than 3', () => {
            const array = [5, 4, 3, 2, 1];
            let filterArray = filter(array, (x) => x < 3);
            assert.deepEqual(filterArray, [2, 1]);
        });
        it('should return an array of integers less than 4', () => {
            const array = [5, 4, 3, 2, 1];
            let filterArray = filter(array, (x) => x < 4);
            assert.deepEqual(filterArray, [3, 2, 1]);
        });
    });
    describe('findIndex function', () => {
        it('should return the index of the first value of an even number', () => {
            const array = [1, 1, 3, 4, 5];
            let findIndexVal = findIndex(array, (x) =>  {
                let modulo = x % 2;
                return modulo === 0;
            });
            assert.deepEqual(findIndexVal, 3);
        });
        it('should return the index of the first value of an odd number', () => {
            const array = [2, 4, 45, 4, 5];
            let findIndexVal = findIndex(array, (x) =>  {
                let modulo = x % 2;
                return modulo === 1;
            });
            assert.deepEqual(findIndexVal, 2);
        });
    });
    describe('every function', () => {
        it('should return true if all integers are greater than 2', () => {
            const array = [3, 4, 5];
            let everyResult = every(array, x => x > 2 ? true : false); 
            assert.deepEqual(everyResult, true);
        });
    });
    describe.skip('reduce function', () => {
        it('should return the sum of the array', () => {
            const array = [1, 2, 3];
            let reduceResult = reduce(array, (x, y) => {
                return x + y;
            });
            assert.deepEqual(reduceResult, 6);
        });
    });
});