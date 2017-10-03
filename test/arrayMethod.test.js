const assert = require('assert');
const forEach = require('../lib/forEach');
const map = require('../lib/map');


describe('array methods', () => {
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });

    it.only('map', () => {
        const array = [2, 3, 6];
        const mapArray = map(array, (num, index) => {
            return num * num;
        });
        assert.deepEqual(mapArray, [4, 9, 36]);
    });
});