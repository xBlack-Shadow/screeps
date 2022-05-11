const roleTower = {

  defendLasika() {
    const spawn = Game.spawns.Lasika;
    const towers = spawn.room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_TOWER } });
    if (towers) {
      const hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
      const targets = spawn.room.find(FIND_STRUCTURES, {
        filter: (structure) => (
          structure.structureType === STRUCTURE_ROAD
                        || structure.structureType === STRUCTURE_RAMPART)
                        && structure.hits < structure.hitsMax / 10,
      });
      if (hostiles.length) {
        towers.forEach((tower) => tower.attack(hostiles[0]));
      } else {
        towers.forEach((tower) => {
          if (targets && tower.energy >= tower.energyCapacity / 2) {
            tower.repair(targets[0]);
          }
        });
      }
      /* let closestHostile = towers[1].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[1].attack(closestHostile);
            } */
    }
  },

};
module.exports = roleTower;
