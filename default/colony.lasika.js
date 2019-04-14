'use strict';

var lasika = {

    live: function () {
        var spawnModule = require('module.spawn');
        var spawn = Game.spawns['Lasika'];
        var myRoom = Game.spawns['Lasika'].room;
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

        if (harvesters.length < 2) {
            spawnModule.spawnCreep(spawn, 'harvester', 'big');
        } else {
            if (upgraders.length < 3) {
                spawnModule.spawnCreep(spawn, 'upgrader', 'big');
            } else {
                if (builders.length < 1) {
                    spawnModule.spawnCreep(spawn, 'builder', 'big');
                } else {
                    if (fixers.length < 2) {
                        spawnModule.spawnCreep(spawn, 'fixer', 'big');
                    } else {
                        if (roadsters.length < 0) {
                            spawnModule.spawnCreep(spawn, 'roadster', 'big');
                        } else {
                            if (rampsters.length < 0) {
                                spawnModule.spawnCreep(spawn, 'rampster', 'medium');
                            } else {
                                if (scouts.length < 0) {
                                    spawnModule.spawnCreep(spawn, 'scout', 'medium');
                                } else {
                                    if (outers.length < 1) {
                                        spawnModule.spawnCreep(spawn, 'out', 'out');
                                    } else {
                                        if (trader.length < 1) {
                                            spawnModule.spawnBigCreep(spawn, 'trader');
                                        }
                                        if (claimboys.lenght < 0) {
                                            spawnModule.spawnClaimCreep(spawn, 'claim')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    executeSpawn:

        function (spawn, role) {
            spawnModule.spawnCreep(spawn, role);
        }
}

module.exports = lasika