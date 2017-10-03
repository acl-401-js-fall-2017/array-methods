const assert = require('assert');
const forEach = require('../lib/forEach');
const every = require('../lib/every');

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
        let results = every(array, moreThanZero);
        assert.equal(results, true);
    });

});