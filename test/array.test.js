const assert = require('assert');
const forEach = require('../lib/forEach');
const map = require('../lib/map');
const filter = require('../lib/filter');

describe.only('array methods', () => {

    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let called = '';
        forEach(array, (letter, index) => {
            called += letter + index;
        });
        assert.equal(called, 'a0b1c2');
    });

    it('map', () => {
        const array = [ 1, 2, 4];
        const mapped = map(array, (item) => { 
            return  item*2;
        });
        assert.deepEqual(mapped, [2,4,8]);
    });
    
    it('filter', () => {
        const array = [1,11, 2, 98];
        const filtered = filter(array, (item) => {
            return item ;
        });
        assert.equal(filtered, [1,2]);
    });
});
