'use strict';

let roleOut = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let targetTerminal = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType === STRUCTURE_TERMINAL)
            }
        })
        if(!targetTerminal.length){
            console.log('Terminal existiert nicht.');
            let roleBuilder = require('role.builder');
            roleBuilder.run(creep);
        };
        
        if(creep.memory.source === undefined){
            let sources = creep.room.find(FIND_MINERALS);
            creep.memory.source = sources[0].id;
        }
        if(creep.memory.target === undefined && targetTerminal.length){
            console.log(targetTerminal[0].id);
            creep.memory.target = targetTerminal[0].id;
        }
        if(!creep.memory.harvesting && creep.store[RESOURCE_CATALYST] < creep.store.getCapacity()) {
            creep.memory.harvesting = true;
	    }
	    if(creep.memory.harvesting && creep.carry.X === creep.carryCapacity) {
	        creep.memory.harvesting = false;
	    }
        
	    if(creep.memory.harvesting) {
            let source = Game.getObjectById(creep.memory.source);
            if(creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            if(creep.memory.target){
                let target = Game.getObjectById(creep.memory.target);
                creep.transfer(target, RESOURCE_CATALYST);
                if(creep.transfer(target, RESOURCE_CATALYST) === ERR_NOT_IN_RANGE || creep.transfer(target, RESOURCE_CATALYST) === ERR_INVALID_TARGET) {
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = roleOut;