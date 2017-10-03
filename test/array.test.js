const assert = require('assert');
const forEach = require('../lib/foreach');
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
        const arr = [1,2,3];
        assert.deepEqual(map(arr, (num) => {
            return num * num;
        }),[1,4,9]);
    });

    it('filter', () => {
        const arr = [1,2,3];
        assert.deepEqual(filter(arr, function isEven(num){
            var remainder = num % 2;  
            return remainder === 0;
        }),[2]);
    });
});