const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

let dinosaur1;
let dinosaur2;
let park;

beforeEach( function() {
  dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
  dinosaur2 = new Dinosaur("Velociraptor", 4);
  dinosaur3 = new Dinosaur("Triceratops", 2);
  park = new Park();
})

describe('Park', function () {
  describe('enclosure', function(){
    it('should have an enclosure that starts empty', function(){
      const actual = park.enclosure;
      assert.deepStrictEqual(actual, [] );
    });

    it('should be able to add a dinosaur', function(){
      park.addDinosaur(dinosaur1);
      assert.deepStrictEqual(park.enclosure.length, 1 );
    });

    // it('should be able to remove all dinosaurs of a particular type', function(){
    //   park.addDinosaur(dinosaur1);
    //   park.addDinosaur(dinosaur1);
    //   park.addDinosaur(dinosaur2);
    //   park.addDinosaur(dinosaur3);
    //
    //   park.removeAllDinosaursByType("Tyrannosaurus");
    //   assert.strictEqual(park.enclosure.length, 2 );
    // });

    it('should be able to get all the dinosaurs with an offspring count of more than 2', function(){
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.addDinosaur(dinosaur3);

      const actual = park.getAllDinosaursOffSpringCountExceedsNumber(2);
      const expected = [dinosaur1, dinosaur1, dinosaur2]
      assert.deepStrictEqual(actual, expected );
    });

  });
});


// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2
