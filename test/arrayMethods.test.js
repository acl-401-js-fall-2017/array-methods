const assert = require('assert');
const forEach = require('../lib/forEach');
const every = require('../lib/every');
const reduce = require('../lib/reduce');
const filter = require('../lib/filter');
const map = require('../lib/map');
const findIndex = require('../lib/findIndex');

describe('array methods', () => {
    it('forEach', () => {
        // eslint-disable-next-line
        let array = ['a', 'b', , 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c3');
    });

    it('every - passing index into callback', () => {
        let array = [0, 1, 2, 3];
        let isEqualToIndex = (arrayElement, index) => arrayElement === index;
        let result = every(array, isEqualToIndex);
        assert.equal(result, true);
    });

    it('every - array holes', () => {
        // eslint-disable-next-line
        let array = [1, 2, , 3];
        let greaterThanZero = (arrayElement) => arrayElement > 0;
        let result = every(array, greaterThanZero);
        assert.equal(result, true);
    });

    it('reduce', () => {
        // eslint-disable-next-line
        let array = [1, 2, , 3];
        let addToAccumulator = (accumulator, arrayElement) => accumulator += arrayElement;
        let initialValue = 1;
        let result = reduce(array, addToAccumulator, initialValue);
        assert.equal(result, 7);
    });

    it('filter - array holes', () => {
        // eslint-disable-next-line
        let array = [1, 2, 3, , 4];
        let isOdd = arrayElement => arrayElement%2 != 0;
        let result = filter(array, isOdd);
        assert.deepEqual(result, [1, 3]);
    });

    it('filter - passing index into callback', () => {
        // eslint-disable-next-line
        let array = [0, 'bob', 2, , 4];
        let isEqualToIndex = (arrayElement, index) => arrayElement === index;
        let result = filter(array, isEqualToIndex);
        assert.deepEqual(result, [0, 2, 4]);
    });

    it('map - array holes and index passed into callback', () => {
        // eslint-disable-next-line
        let array = [1, 2, , 3];
        let plusOne = (arrayElement, index) => (arrayElement + 1) + '-' + index;
        let result = map(array, plusOne);
        // eslint-disable-next-line
        assert.deepEqual(result, ['2-0', '3-1', , '4-3']);
    });

    it('map - basic string manipulation', () => {
        // eslint-disable-next-line
        let array = ['how', 'are', 'you', 'today'];
        let allCaps = arrayElement => arrayElement.toUpperCase();
        let result = map(array, allCaps);
        // eslint-disable-next-line
        assert.deepEqual(result, ["HOW", "ARE", "YOU", "TODAY"]);
    });

    it('findIndex', () => {
        // eslint-disable-next-line
        let array = ['burd', , 'goku', 'slyme', 'goku'];
        let isGoku = arrayElement => arrayElement === 'goku';
        let result = findIndex(array, isGoku);
        assert.equal(result, 2);
    });

});