const roleProtectron = {

  /** @param {Creep} creep * */
  run(creep) {
    console.log('Protectron startet Systeme');
    const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (target) {
      if (creep.attack(target) === ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    }
  },
};

module.exports = roleProtectron;
