const assert = require('assert');
const forEach = require('../lib/forEach');

describe('array methods', () => {
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });
});