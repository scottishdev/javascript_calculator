var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //can add test
  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })

  //can subtract test
  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('it can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })
  // calculator.numberClick() - concatenate multiple number button clicks
  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(9);
    calculator.numberClick(9);
    assert.equal(99, calculator.runningTotal)
  })
  // calculator.operatorClick() - chain multiple operations together
  it('it can chain multiple operations together', function(){
    calculator.numberClick(9);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('+');
    assert.equal(18, calculator.runningTotal)
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('it can clear running total without affecting the calculation', function(){
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(null, calculator.previousTotal)
    assert.equal(null, calculator.previousOperator)
  })

});
