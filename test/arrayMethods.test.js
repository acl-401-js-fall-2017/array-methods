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

    it('every', () => {
        // eslint-disable-next-line
        let array = [1, 2, , 3];
        let moreThanZero = arrayElement => arrayElement > 0;
        let result = every(array, moreThanZero);
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

    it('filter', () => {
        // eslint-disable-next-line
        let array = [1, 2, 3, , 4];
        let isOdd = arrayElement => arrayElement%2 != 0;
        let result = filter(array, isOdd);
        assert.deepEqual(result, [1, 3]);
    });

    it('map', () => {
        // eslint-disable-next-line
        let array = [1, 2, , 3];
        let plusOne = (arrayElement, index) => (arrayElement + 1) + String(index);
        let result = map(array, plusOne);
        // eslint-disable-next-line
        assert.deepEqual(result, ['20', '31', , '43']);
    });

    it('findIndex', () => {
        // eslint-disable-next-line
        let array = ['burd', , 'goku', 'slyme', 'goku'];
        let isGoku = arrayElement => arrayElement === 'goku';
        let result = findIndex(array, isGoku);
        assert.deepEqual(result, 2);
    });

});