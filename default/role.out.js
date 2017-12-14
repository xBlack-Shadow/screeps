var roleOut = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var otherTarget = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TERMINAL)
                }
        })
        var target = Game.getObjectById('59a5e3340f493b307691227a');
        
        if(creep.memory.source === undefined){
            var sources = creep.room.find(FIND_MINERALS);
            creep.memory.source = sources[0].id;
        }
        if(!creep.memory.harvesting && creep.carry.K === undefined) {
            creep.memory.harvesting = true;
	    }
	    if(creep.memory.harvesting && creep.carry.K == creep.carryCapacity) {
	        creep.memory.harvesting = false;
	    }
        
	    if(creep.memory.harvesting) {
            var source = Game.getObjectById(creep.memory.source);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            };
        }
        else {
            if(target){
                creep.transfer(target, RESOURCE_KEANIUM)
                if(creep.transfer(target, RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE || creep.transfer(target, RESOURCE_KEANIUM) == ERR_INVALID_TARGET) {
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = roleOut;