'use strict';

const assert = require('assert');
const reduce = require('../lib/reduce');

describe('reduce', () => {
    it('reduces an array of nums to their sum + 5', () => {
        const array = [5, 4, 3, 2, 1];
        assert(
            reduce(array, (sum, ele, index) => {
                return sum += ele; 
            }, 5),

            20
        );
    });

    it('reduces an array of words to a single string', () => {
        const array = ['Hello ', 'World', '!'];
        const str = reduce(array, (sentence, ele, i) => {
            return sentence += ele;
        });
        assert(str, 'Hello World!');
    })
});