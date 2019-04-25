'use strict';

let lasika = {

    live: function () {
        let spawnModule = require('module.spawn');
        let spawn = Game.spawns['Lasika'];
        //let lasikaCreeps2 = spawn.room.find(FIND_MY_CREEPS); // Alle Creeps die aktuell existieren
        let lasikaCreeps = _.filter(Game.creeps, (creep) => creep.room.name === spawn.room.name); //Alle Creeps + Creeps die gespawnt werden

        let harvesters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'harvester');
        let builders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'builder');
        let upgraders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'upgrader');
        let fixers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'fixer');
        let roadsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'roadster');
        let rampsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'rampster');
        let scouts = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'scout');
        let outers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'out');
        let claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
        let trader = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'trader');

        if (harvesters.length < 2) {
            if (spawn.room.energyAvailable < 1000) {
                spawnModule.spawnsCreep('harvester', '');
            }
            spawnModule.spawnsCreep('harvester', 'big');
        } else {
            if (upgraders.length < 1) {
                spawnModule.spawnsCreep('upgrader', 'bigger');
            } else {
                if (builders.length < 1) {
                    spawnModule.spawnsCreep('builder', 'big');
                } else {
                    if (fixers.length < 1) {
                        spawnModule.spawnsCreep('fixer', 'medium');
                    } else {
                        if (roadsters.length < 0) {
                            spawnModule.spawnsCreep('roadster', 'big');
                        } else {
                            if (rampsters.length < 0) {
                                spawnModule.spawnsCreep('rampster', 'medium');
                            } else {
                                if (scouts.length < 0) {
                                    spawnModule.spawnsCreep('scout', 'medium');
                                } else {
                                    let minerals = spawn.room.find(FIND_MINERALS);
                                    if (outers.length < 1 && minerals[0].mineralAmount !== 0) {
                                        spawnModule.spawnsCreep('out', 'out');
                                    } else {
                                        let terminal = spawn.room.find(FIND_STRUCTURES, {
                                            filter: (structure) => {
                                                return(structure.structureType === STRUCTURE_TERMINAL)
                                            }
                                        })[0];
                                        if (trader.length < 1 && terminal.store.energy <= 50000) {
                                            spawnModule.spawnsCreep('trader', 'big');
                                        }
                                        if (claimboys.length < 0) {
                                            spawnModule.spawnsCreep('claim', 'medium')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

module.exports = lasika;