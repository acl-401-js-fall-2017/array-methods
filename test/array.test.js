const assert = require('assert');
const forEach = require('../lib/foreach');
const map = require('../lib/map');
const filter = require('../lib/filter');
const reduce = require('../lib/reduce');
const findIndex = require('../lib/findIndex');
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

    it('map1', () => {
        const arr = [1,2,3];
        assert.deepEqual(map(arr, (num) => {
            return num * num;
        }),[1,4,9]);
    });
    it('map2', () => {
        const arr = [1,2,3];
        assert.deepEqual(map(arr, (num) => {
            return num * 2;
        }),[2,4,6]);
    });
    it('map3', () => {
        const arr = [1,2,3];
        assert.deepEqual(map(arr, (num) => {
            let numString = `${num}`
            return numString;
        }),['1','2','3']);
    });

    it('filter1', () => {
        const arr = [1,2,3];
        assert.deepEqual(filter(arr, function isEven(num){
            var remainder = num % 2;  
            return remainder === 0;
        }),[2]);
    });
    it('filter2', () => {
        const arr = [1,2,3];
        assert.deepEqual(filter(arr, function isOdd(num){
            var remainder = num % 2;  
            return remainder !== 0;
        }),[1,3]);
    });
    it('filter3', () => {
        const arr = [1,2,3,51,4,365];
        assert.deepEqual(filter(arr, function isLargerThan50(num){
            if(num > 50){
                return true
            }
        }),[51,365]);
    });

    it('reduce1', () => {
        const arr = [1,2,3];
        assert.deepEqual(reduce(arr, function add(sum, value){
            var result = sum + value;
            return result;
        },0),6);
    });
    it('reduce2', () => {
        const arr = [1,2,3];
        assert.deepEqual(reduce(arr, function concat(a, b){
            var result = `${b}${a}`
            return result;
        },''),'123');
    });
    it('reduce3', () => {
        const arr = [1,2,3];
        assert.deepEqual(reduce(arr, function subtract(dif, value){
            var result = value - dif;
            return result;
        },0),-6);
    });

    it('findIndex1', () => {
        const arr = [1,3,3,3,6,7,8,99,3];
        assert.deepEqual(findIndex(arr, function isEven(item){
            var remainder = item % 2;
            return remainder === 0;
        }),4);
    });
    it('findIndex2', () => {
        const arr = [1,3,3,3,6,7,8,99,3];
        assert.deepEqual(findIndex(arr, function isOdd(item){
            var remainder = item % 2;
            return remainder !== 0;
        }),0);
    });
    it('findIndex3', () => {
        const arr = [1,3,3,3,6,'string',8,99,3];
        assert.deepEqual(findIndex(arr, function isString(item){
            let type = typeof item 
            return type === 'string';
        }),5);
    });

    it('every1', () => {
        const arr = [1,3,3,3,6,7,8,99,3];
        assert.deepEqual(every(arr, function isEven(item){
            var remainder = item % 2;
            return remainder === 0;
        }),false);
    });
    it('every2', () => {
        const arr = [1,3,3,3,7,99,3];
        assert.deepEqual(every(arr, function isOdd(item){
            var remainder = item % 2;
            return remainder !== 0;
        }),true);
    });
    it('every3', () => {
        const arr = ['1','3','3','3','7','string','3'];
        assert.deepEqual(every(arr, function isOdd(item){
            let type = typeof item 
            return type === 'string';
        }),true);
    });
});