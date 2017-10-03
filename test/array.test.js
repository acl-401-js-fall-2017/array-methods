const assert = require('assert');
const forEach = require('../lib/forEach');
const map = require('../lib/map');


describe.only('array methods', () => {
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });
    it.skip('map', () => {
        const array = [ 1, 2, 4];
        let called = '';
        map(array, (item, index) => { 
            called += item;
        });
        assert.equal(called, '[2,4,8]');
    });
});
