/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.fixer');
 * mod.thing == 'a thing'; // true
 */
 var roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        var roleUpgrader = require('role.upgrader');
        
        if(creep.memory.fixing && creep.carry.energy === 0) {
            creep.memory.fixing = false;
	    }
	    if(!creep.memory.fixing && creep.carry.energy === creep.carryCapacity) {
	        creep.memory.fixing = true;
	    }
        
        if(creep.memory.fixing){
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType === STRUCTURE_WALL) &&
								structure.hits < 30000000
                        }
            });
            if(targets.length) {
                if(creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    console.log(creep.moveTo(targets[0]));
                }
            }else{
                console.log('keine Walls unter 100000000 hits')
                if(creep.room.controller.level != 8)
                {
                    roleUpgrader.run(creep);
                }
            }
        }else {
	        var sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
	    }
    }
};

module.exports = roleFixer;