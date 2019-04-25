'use strict';

let roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy === 0) {
            creep.memory.upgrading = false;
	    }
	    if(!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
	        creep.memory.upgrading = true;
	    }
	    let controller1 = creep.room.controller;

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(controller1) === ERR_NOT_IN_RANGE) {
                creep.moveTo(controller1);
            }
        }
        else {
            let sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
	}
};

module.exports = roleUpgrader;