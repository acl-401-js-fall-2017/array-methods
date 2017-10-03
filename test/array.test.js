const assert = require('assert');
const forEach = require('../lib/foreach');
const map = require('../lib/map');
const filter = require('../lib/filter');
const reduce = require('../lib/reduce');
const findIndex = require('../lib/findIndex');



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

    it('reduce', () => {
        const arr = [1,2,3];
        assert.deepEqual(reduce(arr, function add(sum, value){
            var result = sum + value;
            return result;
        },0),6);
    });

    it('findIndex', () => {
        const arr = [1,3,3,3,6,7,8,99,3];
        assert.deepEqual(findIndex(arr, function isEven(item){
            var remainder = item % 2;
            return remainder === 0;
        }),4);
    });
});