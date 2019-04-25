'use strict';

let roleTower = {
    
    defendLasika: function(){
        let towers = Game.spawns['Lasika'].room.find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        if(towers) {
            /*let targets = Game.rooms['W46N18'].find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType == STRUCTURE_ROAD) &&
								structure.hits < structure.hitsMax
                        }
            });
            if(targets) {
                towers.forEach(tower => tower.repair(targets[0]));
            }*/
            let hostiles = Game.spawns['Lasika'].room.find(FIND_HOSTILE_CREEPS);
            towers.forEach(tower => tower.attack(hostiles[0]));
    
            /*let closestHostile = towers[1].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[1].attack(closestHostile);
            }*/
        }
    }
    
    
};
module.exports = roleTower;