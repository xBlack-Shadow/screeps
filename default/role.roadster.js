/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.fixer');
 * mod.thing == 'a thing'; // true
 */
 var roleRoadster = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var roleUpgrader = require('role.upgrader');
        if(creep.memory.fixing && creep.carry.energy == 0) {
            creep.say('collecting');
            creep.memory.fixing = false;
	    }
	    if(!creep.memory.fixing && creep.carry.energy == creep.carryCapacity) {
	        creep.say('fixing');
	        creep.memory.fixing = true;
	    }
        
        if(creep.memory.fixing){
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType == STRUCTURE_ROAD) &&
								structure.hits < structure.hitsMax
                        }
            });
            if(targets.length) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
                if(creep.room.controller.level != 8)
                {
                    roleUpgrader.run(creep);
                }
            }
        }else {
	        var sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
	    }
    }
};

module.exports = roleRoadster;