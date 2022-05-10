/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * let mod = require('role.fixer');
 * mod.thing == 'a thing'; // true
 */

'use strict';

//TODO: Staffelung dÃÂ¼r die Walls einbauen

let roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let roleUpgrader = require('role.upgrader');
        let roleBuilder = require('role.builder');
        
        let wallHitpoints = 100000

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
                        structure.hits < wallHitpoints
                }
            });
            if(targets.length) {
                if(creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
                console.log('Damaged Walls in ' + creep.room.name);
            }else{
                
                if(creep.room.controller.level !== 8)
                {
                    roleUpgrader.run(creep);
                }
                else{
                    roleBuilder.run(creep);
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