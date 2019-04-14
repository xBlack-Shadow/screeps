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
            spawnModule.spawnsCreep(spawn, 'harvester', 'big');
        } else {
            if (upgraders.length < 3) {
                spawnModule.spawnsCreep(spawn, 'upgrader', 'big');
            } else {
                if (builders.length < 1) {
                    spawnModule.spawnsCreep(spawn, 'builder', 'big');
                } else {
                    if (fixers.length < 2) {
                        spawnModule.spawnsCreep(spawn, 'fixer', 'big');
                    } else {
                        if (roadsters.length < 0) {
                            spawnModule.spawnsCreep(spawn, 'roadster', 'big');
                        } else {
                            if (rampsters.length < 0) {
                                spawnModule.spawnsCreep(spawn, 'rampster', 'medium');
                            } else {
                                if (scouts.length < 0) {
                                    spawnModule.spawnsCreep(spawn, 'scout', 'medium');
                                } else {
                                    if (outers.length < 1) {
                                        spawnModule.spawnsCreep(spawn, 'out', 'out');
                                    } else {
                                        if (trader.length < 1) {
                                            spawnModule.spawnsCreep(spawn, 'trader', 'big');
                                        }
                                        if (claimboys.length < 0) {
                                            spawnModule.spawnsCreep(spawn, 'claim', 'medium')
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