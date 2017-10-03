const assert = require('assert');
const forEach = require('../lib/forEach');
const every = require('../lib/every');
const reduce = require('../lib/reduce');
const filter = require('../lib/filter');

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
        let array = [1, 2, 3, 4];
        let isOdd = arrayElement => arrayElement%2 != 0;
        let result = filter(array, isOdd);
        assert.deepEqual(result, [1, 3]);
    });

    it('map', () => {
        let array = [1, 2, 3];
        let plusOne = arrayElement => arrayElement + 1;
        let result = map(array, plusOne);
        assert.deepEqual(result, [2, 3, 4]);
    });

});