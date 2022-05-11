const roleFixer = {
  wallHitSteps: {
    step1: 500,
    step2: 1000,
    step3: 10000,
    step4: 50000,
    step5: 100000,
  },

  /** @param {Creep} creep * */
  run(creep) {
    const roleUpgrader = require('role.upgrader');
    const roleBuilder = require('role.builder');

    const currentStep = 'step2';
    const wallHitpoints = this.wallHitSteps[currentStep];

    if (creep.memory.fixing && creep.carry.energy === 0) {
      creep.memory.fixing = false;
    }
    if (!creep.memory.fixing && creep.carry.energy === creep.carryCapacity) {
      creep.memory.fixing = true;
    }

    if (creep.memory.fixing) {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => (structure.structureType === STRUCTURE_RAMPART
                        || structure.structureType === STRUCTURE_WALL)
                        && structure.hits < wallHitpoints,
      });
      if (targets.length) {
        if (creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
        console.log(`Damaged Walls in ${creep.room.name}`);
      } else if (creep.room.controller.level !== 8) {
        roleUpgrader.run(creep);
      } else {
        roleBuilder.run(creep);
      }
    } else {
      const sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
      if (creep.harvest(sources) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources);
      }
    }
  },

  checkCurrentStep() {

  },
};

module.exports = roleFixer;
