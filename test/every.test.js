'use strict';

const assert = require('assert');
const every = require('../lib/every');

describe('every', () => {
    it('checks if the array [2, 4, 12, 2] has even numbers', () => {
        const array = [2, 4, 12, 2];
        assert(every(array, (num, i) => {
            return !(num % 2);
        }), true);
    })

    it('checks if the array [2, 3, "dog"] has only numbers', () => {
        const array = [2, 3, "dog"];
        assert.equal(every(array, ele => /^\d+$/.test(ele) ), false);
    });
});