'use strict';

let roleTrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.source === undefined){
            let sources = creep.room.find(FIND_SOURCES_ACTIVE);
            creep.memory.source = sources[0].id;
        }
        
        if(creep.memory.harvesting && creep.carry.energy === 0) {
            creep.memory.harvesting = false;
	    }
	    if(!creep.memory.harvesting && creep.carry.energy === creep.carryCapacity) {
	        creep.memory.harvesting = true;
	    }
        
	    if(!creep.memory.harvesting) {
            let source = Game.getObjectById(creep.memory.source);
            if(creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            let target = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType === STRUCTURE_TERMINAL )
                    }
            });
            if(creep.transfer(target[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target[0]);
            }
        }
	}
};

module.exports = roleTrader;