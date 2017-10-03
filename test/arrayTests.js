const assert = require('assert');
const map = require('../lib/map');
const filter = require('../lib/filter');
const indexFinder = require('../lib/indexFinder')

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
    const filteredArr = filter(testArr, (item) => item > 1); //saving result to filteredArr
    it('creates new array of elements that meet filter criteria', () => {
        // const filterCallback = function (item, index) {
        //     if (item > 1) return item;
        // }

        // const filteredArr = filter([1, 2, 3, 4], filterCallback);
        assert.deepEqual(filteredArr, [5, 6, 7]);
    })
});

describe('indexFinder', () => {
    const testArr = [1, 3, 2, 4];
    const cond = indexFinder(testArr, (item) => item > 2);
    it.only('returns index of first element that passes condition', () => {

        assert.deepEqual(cond, 1);
    })

});