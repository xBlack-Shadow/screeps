'use strict';

let log = {
    
	log: function(){
	    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === 'harvester');
    	let builders = _.filter(Game.creeps, (creep) => creep.memory.role === 'builder');
    	let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === 'upgrader');
    	let fixers = _.filter(Game.creeps, (creep) => creep.memory.role === 'fixer');
    	let roadsters = _.filter(Game.creeps, (creep) => creep.memory.role === 'roadster');
    	let rampsters = _.filter(Game.creeps, (creep) => creep.memory.role === 'rampster');
    	let scouts = _.filter(Game.creeps, (creep) => creep.memory.role === 'scout');
    	let outers = _.filter(Game.creeps, (creep) => creep.memory.role === 'out');
    	let claimboys = _.filter(Game.creeps, (creep) => creep.memory.role === 'claim');
    	let points = [];

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

		Memory.spawns.forEach(function (spawnID) {
			let current = Game.getObjectById(spawnID);
			if (current.spawning !== null) {
				console.log(current.name + ' spawning ' + JSON.stringify(current.spawning));
			}
		});
	}
};

module.exports = log;