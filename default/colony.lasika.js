'use strict';

let lasika = {

    live: function () {
        let spawnModule = require('default/module.spawn');
        let spawn = Game.spawns['L'];
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
        let protectron = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'protectron');
        let ammunitioner = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'ammunitioner');
        
        if (harvesters.length < 2) {
            if (spawn.room.energyAvailable < 1000) {
                spawnModule.spawnsCreep('harvester', '', spawn.room);
            }
            spawnModule.spawnsCreep('harvester', 'big', spawn.room);
        } else {
            if (upgraders.length < 4) {
                if (spawn.room.energyAvailable < 1000) {
                spawnModule.spawnsCreep('upgrader', '', spawn.room);
                }
                spawnModule.spawnsCreep('upgrader', 'big', spawn.room);
            } else {
                let hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
                if (hostiles.length !== 0) {
                    if (ammunitioner.length < 2) {
                        spawnModule.spawnsCreep('ammunitioner', 'big', spawn.room)
                    } else {
                        if (protectron.length < 4) {
                            spawnModule.spawnsCreep('protectron', 'scout', spawn.room);
                        }
                    }
                } else {
                    if (builders.length < 1) {
                        if (spawn.room.energyAvailable < 1000) {
                        spawnModule.spawnsCreep('builder', '', spawn.room);
                        }
                spawnModule.spawnsCreep('builder', 'big', spawn.room);
                    } else {
                        if (fixers.length < 5) {
                            spawnModule.spawnsCreep('fixer', 'medium', spawn.room);
                        } else {
                            if (roadsters.length < 1) {
                                spawnModule.spawnsCreep('roadster', 'big', spawn.room);
                            } else {
                                if (rampsters.length < 0) {
                                    spawnModule.spawnsCreep('rampster', 'medium', spawn.room);
                                } else {
                                    if (scouts.length < 0) {
                                        spawnModule.spawnsCreep('scout', 'medium', spawn.room);
                                    } else {
                                        let minerals = spawn.room.find(FIND_MINERALS);
                                        if (outers.length < 1 && minerals[0].mineralAmount !== 0) {
                                            spawnModule.spawnsCreep('out', 'out', spawn.room);
                                        } else {
                                            let terminal = spawn.room.find(FIND_STRUCTURES, {
                                                filter: (structure) => {
                                                    return (structure.structureType === STRUCTURE_TERMINAL)
                                                }
                                            })[0];
                                            if (trader.length < 1 && terminal.store.energy <= 50000) {
                                                spawnModule.spawnsCreep('trader', 'big', spawn.room);
                                            }
                                            if (claimboys.length < 0) {
                                                spawnModule.spawnsCreep('claim', 'claim', spawn.room)
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
    }
};

module.exports = lasika;