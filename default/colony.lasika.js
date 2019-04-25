'use strict';

let lasika = {

    live: function () {
        let spawnModule = require('module.spawn');
        let spawn = Game.spawns['Lasika'];
        let lasikaCreeps2 = spawn.room.find(FIND_MY_CREEPS);
        let lasikaCreeps = _.filter(Game.creeps, (creep) => creep.room.name === spawn.room.name);
        console.log(JSON.stringify(lasikaCreeps));
        console.log(JSON.stringify(lasikaCreeps2));

        let isit = _.isEqual(lasikaCreeps, lasikaCreeps2);
        console.log(isit);

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
                                        if (trader.length < 0) {
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