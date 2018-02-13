const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeAllDinosaursByType = function(type){
  console.log("enclosure", this.enclosure);

  for (let dinosaur of this.enclosure){
    if (dinosaur.type === type){
      console.log("dinosaur type", dinosaur.type);
      const index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
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
