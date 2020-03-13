// const assert = require('assert');
const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const sayNumber = require('../app').sayNumber;
// const addNumbers = require('../app').addNumbers;

describe('index', function(){
    // it('app should return hello', function(){
    //     assert.equal(app.sayHello(), 'hello');
    // });

    it('sayHello should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayNumber should return 1', function(){
        let result = app.sayNumber();
        assert.equal(result, 1);
    });
    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
            let result = app.addNumbers(5, 5);
            assert.isAbove(result, 5);
        });
    
        it('addNumbers should be typeof number', function(){
            let result = app.addNumbers(5, 5);
            assert.typeOf(result, 'number');
        });
    })
});