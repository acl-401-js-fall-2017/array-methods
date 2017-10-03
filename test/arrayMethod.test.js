const assert = require('assert');
const forEach = require('../lib/forEach');
const map = require('../lib/map');
const filter = require('../lib/filter');


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

    it.only('filter', () => {
        const array = [2, 5, 8];
        const filterArray = filter(array, (num, index) => {
            return num % 2 === 0;
        });
        assert.deepEqual(filterArray, [2, 8]);
    })

});