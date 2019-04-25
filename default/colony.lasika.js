'use strict';

const lasika = {

    live: function () {
        const spawnModule = require('module.spawn');
        const spawn = Game.spawns['Lasika'];
        const lasikaCreeps = spawn.room.find(FIND_MY_CREEPS);

        const harvesters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'harvester');
        const builders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'builder');
        const upgraders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'upgrader');
        const fixers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'fixer');
        const roadsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'roadster');
        const rampsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'rampster');
        const scouts = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'scout');
        const outers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'out');
        const claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
        const trader = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'trader');

        if (harvesters.length < 2) {
            if (spawn.room.energyAvailable <= 500) {
                spawnModule.spawnsCreep('harvester', '');
            }
            spawnModule.spawnsCreep('harvester', 'medium');
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