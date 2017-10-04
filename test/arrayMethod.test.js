const assert = require('assert');
const arrayMethods = require('../lib/arrayMethods');

describe('array methods', () => {
    it('forEach', () => {
        const array = ['a', 'b', 'c'];
        let string = '';
        arrayMethods.forEach(array, (item) => {
            string += `${item}${item.toUpperCase()}`;
        });
        assert.equal(string, 'aAbBcC');
    });
    it('creating a new array with doubled numbers', () => {
        const testArray = [1,2,3,4];
        const newArray =  arrayMethods.map(testArray, (item) => item*2);
        assert.deepEqual(newArray, [2,4,6,8]);
    });
    it('filtering array items that bigger than 5', () => {
        const testArray = [1,2,3,4,5,6,7,8,9];
        const newArray = arrayMethods.filter(testArray, (item) => item>5);
        assert.deepEqual(newArray, [6,7,8,9]);
    });
    it('find index of first element that value is greater than 5', () => {
        const testArray = [5,6,6,7,8,9];
        const foundIndex =  arrayMethods.findIndex(testArray, (item) => item>5);
        assert.equal(foundIndex, 1);
    });
    it('return index -1 if not found', () => {
        const testArray = [5,6,6,7,8,9];
        const foundIndex =  arrayMethods.findIndex(testArray, (item) => item<5);
        assert.equal(foundIndex, -1);
    });
    it('return true if all elements are greater than 4', () => {
        const testArray = [5,6,7,8,9];
        const greaterThanFour = arrayMethods.every(testArray, (item) => item>4);
        assert.equal(greaterThanFour, true);
    });
});