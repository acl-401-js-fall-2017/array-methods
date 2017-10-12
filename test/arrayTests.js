const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const indexFinder = require('../lib/indexFinder')
const every = require('../lib/every')
const reduce = require('../lib/reduce')

describe('map', () => {
    it('makes new array with result of calling fnctn every element', () => {
        var mapCallback = function (item, index) {
            return item * 2;
        }
        var mappedArr =  map([1,2,3,4], mapCallback);
        assert.deepEqual(mappedArr, [2, 4, 6, 8]);
    })

});

describe('filter', () => {
    const testArr = [1, 5, 6, 7];
    const filteredArr = filter(testArr, (item) => item > 1);
    it('creates new array of elements that meet filter criteria', () => {
    
        assert.deepEqual(filteredArr, [5, 6, 7]);
    })
});

describe('indexFinder', () => {
    const testArr = [1, 3, 2, 4];
    const cond = indexFinder(testArr, (item) => item = 3);
    it('returns index of first element that passes condition', () => {

        assert.deepEqual(cond, 1);
    })

});


describe('every', () => {
    const arr = [2, 4, 6];
    const cond = every(arr, (item) => item % 2 == 0);
    it('returns true if all elements pass callback condition', () => {
        assert.deepEqual(cond, true);
    })
});


describe('reduce', () => {
    it('reduces an array to one number value', () => {
        const array = [1, 2, 3];
        const cond = reduce(array, (sum, ele, index) => {
            return sum += ele; 
        })

        assert(cond, 3);
    })
          
});