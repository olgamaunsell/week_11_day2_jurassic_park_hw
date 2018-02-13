const assert = require('assert');
const Dinosaur = require('../dinosaur');

let dinosaur;

beforeEach(function () {
  dinosaur = new Dinosaur("Tyrannosaurus", 2);

})

describe('Dinosaur', function () {
  it('should have a type', function(){
    const actual = dinosaur.type;
    assert.strictEqual(actual, "Tyrannosaurus" );
  });

  it('should have a number of offspring per year', function(){
    const actual = dinosaur.offSpringNumber;
    assert.strictEqual(actual, 2 );
  });

});
