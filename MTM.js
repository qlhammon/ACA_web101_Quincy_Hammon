'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code will go here

// Form class called Ship

class Ship {
    constructor(name, type, ability, crew){
            this.name = name;
            this.type = type;
            this.ability = ability;
            this.crew = crew;
    }
let mav = new Ship ('Mars Ascent Vehicle','MAV', 'Ascend into low orbit', 0); 
          
let hermes = new Ship ('Hermes', 'Main Ship', 'Interplanetary Space Travel', 0);

//Remove crew member from list if assigned from a ship.
const changeCrew() {
    let crewIndex = this.ship.crew.indexOf(this);
    this.ship.crew.splice(crewIndex, 1)
}

// Check if crew member is on a ship already.
const enterShip(shipToBoard) =>{
    if (this.ship) {
        this.changeCrew();
    }
    
this.ship = shipToBoard;
// Add the crew member to the ship that they will be boarding.    
this.ship.crew.push(this);


}
const shipLaunch()=>{
    let crewReady = this.crew.findIndex(crewMember => {
        return jobTypes[crewMember['job']] ===this.type || crewMember ['job'] === 'programmer';
    })
}

let missionStatement ()=> {
    if (this.shipLaunch()) {
        return this.ability;
    }
    return "Can't perform a mission yet."
}


// Form class called Crewmember
class Crewmember {
    constructor(name, type, ability, crew){
            this.name = name;
            this.job = job;
            this.specialSkill = this.specialSkill;
            this.ship = this.ship;
    }

const CrewMember1 = new Crewmember ('Rick Martinez','pilot','chemistry', null);

const CrewMember2 = new Crewmember ('Commander Lewis', 'commander','geology', null);







// Begin by reading the tests and building a function that will full each one.
// As you build, you might not have to build them in order, maybe you do...
// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}