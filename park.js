const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeAllDinosaursByType = function(type){

  const dinosaursToKeep = [];
  for (const dinosaur of this.enclosure){
    if(dinosaur.type !== type) dinosaursToKeep.push(dinosaur);
  }
  this.enclosure = dinosaursToKeep;

}

Park.prototype.getAllDinosaursOffSpringCountExceedsNumber = function(number){
  let dinosaurList = [];
  for (let dinosaur of this.enclosure){
    if (dinosaur.offSpringNumber > number){
      dinosaurList.push(dinosaur);
    }
  }
  return dinosaurList;
}

module.exports = Park;
