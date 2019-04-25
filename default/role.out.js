'use strict';

var roleOut = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var otherTarget = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_TERMINAL)
                }
        });
        if(creep.memory.source === undefined){
            var sources = creep.room.find(FIND_MINERALS);
            creep.memory.source = sources[0].id;
        }
        if(creep.memory.target === undefined){
            console.log(otherTarget[0].id);
            creep.memory.target = otherTarget[0].id;
        }
        if(!creep.memory.harvesting && creep.carry.H === undefined) {
            creep.memory.harvesting = true;
	    }
	    if(creep.memory.harvesting && creep.carry.H === creep.carryCapacity) {
	        creep.memory.harvesting = false;
	    }
        
	    if(creep.memory.harvesting) {
            var source = Game.getObjectById(creep.memory.source);
            if(creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            if(creep.memory.target){
                let target = Game.getObjectById(creep.memory.target);
                creep.transfer(target, RESOURCE_HYDROGEN);
                if(creep.transfer(target, RESOURCE_HYDROGEN) === ERR_NOT_IN_RANGE || creep.transfer(target, RESOURCE_HYDROGEN) === ERR_INVALID_TARGET) {
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = roleOut;