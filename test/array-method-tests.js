//const expect = require('chai').expect;
const arrayMethods = require('../lib/array-methods');
const assert = require('assert');

describe ('map', function() {
    const testArray = ['a','b','c','d'];
    it('should create a new array', function(){
        let newArray = arrayMethods.map(testArray,(value,i) => {
            return value += i;
        });

        assert.deepEqual(newArray,['a0','b1','c2','d3']);
        assert.deepEqual(newArray.length,4);
    });
});

describe ('filter', function() {
    const testArray = ['aaaaaaa','b','ccccccc','d'];
    it('should create a new array with all items whose callback returned truthy values', function(){
        let newArray =  arrayMethods.filter(testArray,(value) => {
            return value.length >5;
        });

        assert.deepEqual(newArray,['aaaaaaa','ccccccc']);
        assert.deepEqual(newArray.length,2);
    });
});

describe ('reduce', function() {
    const testArray = [4, 2, 7, 9];
    it('should return the accumulator value ', function(){
        let accum =  arrayMethods.reduce(testArray,(accumulator, value) => {
            return accumulator + value;
        });

        assert.deepEqual(accum,22);
    });

    it('should return the accumulator value starting with the different init index ', function(){
        let accum =  arrayMethods.reduce(testArray,(accumulator, value) => {
            return accumulator + value;
        }, 20);

        assert.deepEqual(accum,42);
    });
    
});


