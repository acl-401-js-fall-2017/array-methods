const assert = require('assert');
const forEach = require('../lib/forEach');
const every = require('../lib/every');

describe('array methods', () => {
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });

    it('every', () => {
        const array = [1, 2, 3];
        let moreThanZero = function(a) {return a > 0;};
        assert.equal(every(array, moreThanZero), true);
    });
});