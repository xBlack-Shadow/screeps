'use strict';

let roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        let roleNext = require('role.roadster');
        
        let targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
        
        if(creep.memory.source === undefined)
        {
            let daSources = creep.room.find(FIND_SOURCES_ACTIVE);
            creep.memory.source = daSources[0].id;
        }

	    if(creep.memory.building && creep.carry.energy === 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
	        creep.memory.building = true;
	    }

	    if(creep.memory.building) {
            if(targets/*.length*/) {
                if(creep.build(targets/*[0]*/) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets/*[0]*/);
                }
            }else{
                roleNext.run(creep);
            }
	    }
	    else {
	        let sources = Game.getObjectById(creep.memory.source);
            if(creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
	    }
	}
};

module.exports = roleBuilder;