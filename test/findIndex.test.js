'use strict';

const assert = require('assert');
const findIndex = require('../lib/findIndex');

describe('findIndex', () => {
    it('finds the index of the 4th item in the array', () => {
        const array = ['a', 'b', 'c', 'd', 'e'];
        assert(findIndex(array, (ele, index) => {
            return index === 3;
        }), 3);
    });

    it('finds the index of the letter b', () => {
        const array = ['a', 'b', 'c', 'd', 'e'];
        assert(findIndex(array, (ele, index) => {
            return ele === 'b';
        }), 1);
    });

    it('finds the index of the letter e in an array with holes', () => {
        const array = [ , 'b', 'c', , 'e'];
        assert(findIndex(array, (ele, i) => {
            return ele === 'e';
        }), 4)
    })
});