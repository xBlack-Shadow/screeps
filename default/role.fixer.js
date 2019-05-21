/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * let mod = require('role.fixer');
 * mod.thing == 'a thing'; // true
 */

'use strict';

//TODO: Staffelung dÃ¼r die Walls einbauen

let roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let roleUpgrader = require('role.upgrader');

        if(creep.memory.fixing && creep.carry.energy === 0) {
            creep.memory.fixing = false;
        }
        if(!creep.memory.fixing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.fixing = true;
        }

        if(creep.memory.fixing){
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_RAMPART ||
                        structure.structureType === STRUCTURE_WALL) &&
                        structure.hits < 3000000
                }
            });
            if(targets.length) {
                if(creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }else{
                console.log('keine Walls unter 100000000 hits');
                if(creep.room.controller.level !== 8)
                {
                    roleUpgrader.run(creep);
                }
            }
        }else {
            let sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
    }
};

module.exports = roleFixer;