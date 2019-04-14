'use strict';

var roleTower = {
    
    defendLasika: function(){
        var towers = Game.spawns['Lasika'].room.find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        if(towers) {
            /*var targets = Game.rooms['W46N18'].find(FIND_STRUCTURES, {
                filter: (structure) => {
                        return (
								structure.structureType == STRUCTURE_ROAD) &&
								structure.hits < structure.hitsMax
                        }
            });
            if(targets) {
                towers.forEach(tower => tower.repair(targets[0]));
            }*/
            var hostiles = Game.spawns['Lasika'].room.find(FIND_HOSTILE_CREEPS);
            towers.forEach(tower => tower.attack(hostiles[0]));
    
            /*var closestHostile = towers[1].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                towers[1].attack(closestHostile);
            }*/
        }
    }
    
    
};
module.exports = roleTower;