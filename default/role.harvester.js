'use strict';

let roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        let roleNext = require('role.builder');
        if (creep.memory.source === undefined) {
            let sources = creep.room.find(FIND_SOURCES);
            creep.memory.source = sources[1].id;
        }

        if (creep.memory.harvesting && creep.carry.energy === 0) {
            creep.memory.harvesting = false;
        }
        if (!creep.memory.harvesting && creep.carry.energy === creep.carryCapacity) {
            creep.memory.harvesting = true;
        }

        if (!creep.memory.harvesting) {
            let source = Game.getObjectById(creep.memory.source);
            if (source.energy === 0){
                source = creep.room.find(FIND_SOURCES)[0];
            }
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            let target = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return(structure.structureType === STRUCTURE_EXTENSION ||
                structure.structureType === STRUCTURE_SPAWN ||
                structure.structureType === STRUCTURE_TOWER ||
                structure.structureType === STRUCTURE_STORAGE) &&
                (structure.energy < structure.energyCapacity || structure.storage < structure.storeCapacity);
        }
        });
            target.push();
            target.sort();
            /*if (Game.getObjectById('59a5e3340f493b307691227a').store[RESOURCE_ENERGY] < Game.getObjectById('59a5e3340f493b307691227a').storeCapacity / 2) {
                target.push(Game.getObjectById('59a5e3340f493b307691227a'));
            }*/

            if (target.length) {
                if (creep.transfer(target[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0]);
                }
            } else {
                roleNext.run(creep);
            }
        }
    }
};

module.exports = roleHarvester;