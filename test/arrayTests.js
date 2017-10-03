const assert = require('assert');
const map = require('../lib/map');


describe('map', () => {
    it('makes new array with result of calling fnctn every element', () => {
        var mapCallback = function (item, index) {
            return item * 2;
        }
        var mappedArr =  map([1,2,3,4], mapCallback);
        assert.deepEqual(mappedArr, [2, 4, 6, 8]);
    })

});