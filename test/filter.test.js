'use strict';

const assert = require('assert');
const filter = require('../lib/filter');

describe('filter function', () => {
    it('returns an array filtered for even numbers', () => {
        const initialArray = [1, 2, , 3, 4, 5];
        const finalArray = filter(initialArray, (num, index) => {
            return !(num % 2);
        });
        assert.deepEqual(finalArray, [2, , 4]);
    });
});