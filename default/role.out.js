const roleOut = {

  /** @param {Creep} creep * */
  run(creep) {
    const targetTerminal = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => (structure.structureType === STRUCTURE_TERMINAL),
    });
    if (!targetTerminal.length) {
      console.log('Terminal existiert nicht.');
      const roleBuilder = require('role.builder');
      roleBuilder.run(creep);
    }

    if (creep.memory.source === undefined) {
      const sources = creep.room.find(FIND_MINERALS);
      creep.memory.source = sources[0].id;
    }
    if (creep.memory.target === undefined && targetTerminal.length) {
      console.log(targetTerminal[0].id);
      creep.memory.target = targetTerminal[0].id;
    }
    if (!creep.memory.harvesting && creep.store[RESOURCE_CATALYST] < creep.store.getCapacity()) {
      creep.memory.harvesting = true;
	    }
	    if (creep.memory.harvesting && creep.carry.X === creep.carryCapacity) {
	        creep.memory.harvesting = false;
	    }

	    if (creep.memory.harvesting) {
      const source = Game.getObjectById(creep.memory.source);
      if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
        creep.moveTo(source);
      }
    } else if (creep.memory.target) {
      const target = Game.getObjectById(creep.memory.target);
      creep.transfer(target, RESOURCE_CATALYST);
      if (creep.transfer(target, RESOURCE_CATALYST) === ERR_NOT_IN_RANGE || creep.transfer(target, RESOURCE_CATALYST) === ERR_INVALID_TARGET) {
        creep.moveTo(target);
      }
    }
  },
};

module.exports = roleOut;
