/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.fixer');
 * mod.thing == 'a thing'; // true
 */
 var roleRampster = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        //var spawn = creep.room.find(FIND_MY_SPAWNS);
        //var roadToRepair = creep.room.find(FIND_STRUCTURES, {
        //    filter: function(object){
        //        return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);
        //    } 
        //});
        
        //if(creep.energy === 0) {
        //    /*var moveResult =*/ creep.moveTo(spawn);
        //    /*
        //      check moveResult here
        //    */
        //}
        //if( spawn.energy > 100) {
        //    /*var transferResult =*/ spawn.transferEnergy(creep);
        //    /*
        //        check transferResult here
        //    */
        //}else{
        //    if (roadToRepair){
        //        if(creep.repair(roadToRepair) == ERR_NOT_IN_RANGE) {
        //            creep.moveTo(roadToRepair);
        //        }else{
        //            creep.repair(roadToRepair);
        //        }
        //        // perhaps check the results again?
        //
        //    }else{
        //        // nothing to repair, let's do something else?
        //    }
        //}
        if(creep.memory.fixing && creep.carry.energy == 0) {
            creep.say('collecting');
            creep.memory.fixing = false;
	    }
	    if(!creep.memory.fixing && creep.carry.energy == creep.carryCapacity) {
	        creep.say('Rampster');
	        creep.memory.fixing = true;
	    }
        
        if(creep.memory.fixing){
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType == STRUCTURE_RAMPART) &&
								structure.hits < 20000
                        }
            });
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
        }else {
	        var sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
	    }
    }
};

module.exports = roleRampster;