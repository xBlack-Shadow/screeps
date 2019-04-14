'use strict';

var lasika = {

    live: function () {
        var spawnModule = require('module.spawn');
        var spawn = Game.spawns['Lasika'];
        var lasikaCreeps = spawn.room.find(FIND_MY_CREEPS);

        var harvesters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'harvester');
        var builders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'builder');
        var upgraders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'upgrader');
        var fixers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'fixer');
        var roadsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'roadster');
        var rampsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'rampster');
        var scouts = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'scout');
        var outers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'out');
        var claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
        var trader = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'trader');

        if (harvesters.length < 1) {
            spawnModule.spawnsCreep('harvester', 'bigger');
        } else {
            if (upgraders.length < 1) {
                spawnModule.spawnsCreep('upgrader', 'bigger');
            } else {
                if (builders.length < 1) {
                    spawnModule.spawnsCreep('builder', 'big');
                } else {
                    if (fixers.length < 2) {
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
                                    if (outers.length < 1) {
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