//const expect = require('chai').expect;
const arrayMethods = require('../lib/array-methods');
const assert = require('assert');

describe ('map', function() {
    const testArray = ['a','b','c','d'];
    it('should create a new array', function(){
        const newArray = arrayMethods.map(testArray,(value,i) => {
            return value += i;
        });
        assert.deepEqual(newArray,['a0','b1','c2','d3']);
        assert.deepEqual(newArray.length,4);
    });
});

