'use strict';

let roleTower = {

    defendLasika: function () {
        let spawn = Game.spawns['L'];
        let towers = spawn.room.find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        if (towers) {
            let hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
            let targets = spawn.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                        structure.structureType === STRUCTURE_ROAD ||
                        structure.structureType === STRUCTURE_RAMPART) &&
                        structure.hits < structure.hitsMax / 10
                }
            });
            if (hostiles.length) {
                towers.forEach(tower => tower.attack(hostiles[0]));
            } else {
                towers.forEach(function (tower) {
                    if (targets && tower.energy >= tower.energyCapacity / 2) {
                        tower.repair(targets[0])
                    }
                });
            }
            /*let closestHostile = towers[1].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[1].attack(closestHostile);
            }*/
        }
    }


};
module.exports = roleTower;