const global = {

  live() {
    const spawnModule = require('module.spawn');
    const spawn = Game.spawns.Lasika;
    const globalCreeps = Game.creeps;

    const claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');

    if (claimboys.length < 0) {
      // spawnModule.spawnsCreep('claim', 'claim', spawn.room)
    }
  },
};

module.exports = global;
