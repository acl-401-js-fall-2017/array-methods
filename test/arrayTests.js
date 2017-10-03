const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {
    it('makes new array with result of calling fnctn every element', () => {
        assert.equal(map([1, 2, 3, 4]), [1, 4, 6, 8] );
    })

});