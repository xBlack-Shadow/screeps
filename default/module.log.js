'use strict';

var log = {
    
	log: function(){
	    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
    	var builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
    	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
    	var fixers = _.filter(Game.creeps, (creep) => creep.memory.role === 'fixer');
    	var roadsters = _.filter(Game.creeps, (creep) => creep.memory.role === 'roadster');
    	var rampsters = _.filter(Game.creeps, (creep) => creep.memory.role === 'rampster');
    	var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout');
    	var outers = _.filter(Game.creeps, (creep) => creep.memory.role == 'out')
    	var claimboys = _.filter(Game.creeps, (creep) => creep.memory.role == 'claim');
    	var ramparts = _.filter(Game.structures, (structure) => structure.structureType === STRUCTURE_RAMPART);
    	var points = [];
    	
    	ramparts.forEach(function x(element, index, array) {
            points.push(element.hits);
        })

		Memory.harvester = harvesters.length; //TODO: Log umbauen. Anzahl der Einheiten in der Memory speichern und anzeigen
	    
	    console.log('Harvester: ' + harvesters.length +
	            ' Builder: ' + builders.length +
	            ' Upgrader: ' + upgraders.length +
	            ' Roadster: ' + roadsters.length + 
	            ' Fixer: ' + fixers.length + 
	            ' Scouts: ' + scouts.length + 
	            ' Outers: ' + outers.length + 
	            ' Claimboys: ' + claimboys.length + 
	            ' Rampster: ' + rampsters.length + ' |' +
	            ' Energy: '+ Game.spawns['Lasika'].room.energyAvailable + ' / ' +
	            Game.spawns['Lasika'].room.energyCapacityAvailable + ' |');
        console.log(points);

		for(const i in Memory.spawns) {
			let current = Game.getObjectById(Memory.spawns[i]);
			if (current.spawning !== null) {
				console.log(current.name + ' spawning ' + JSON.stringify(current.spawning));
			}
		}
	}
}

module.exports = log;