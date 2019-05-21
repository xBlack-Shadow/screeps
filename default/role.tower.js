'use strict';

let roleTower = {

    defendLasika: function(){
        let spawn = Game.spawns['Lasika'];
        let towers = spawn.room.find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        if(towers) {
            /*let targets = spawn.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType == STRUCTURE_ROAD ||
								structure.structureType == STRUCTURE_RAMPART ) &&
								structure.hits < structure.hitsMax
                        }
            });
                towers.forEach(function(tower){
                    if(targets && tower.energy >= tower.energyCapacity / 2) {
                        tower.repair(targets[0])
                    }
                });*/

            let hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
            towers.forEach(tower => tower.attack(hostiles[0]));

            /*let closestHostile = towers[1].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[1].attack(closestHostile);
            }*/
        }
    }


};
module.exports = roleTower;