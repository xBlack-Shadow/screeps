/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('module.spawn');
 * mod.thing == 'a thing'; // true
 */

'use strict';

//TODO: Namensgebung irgendwie randomisieren. spawncreep nimmt kein undefined mehr an.
//TODO: Fehlerkennung mit einem SwitchCase bauen.
//TODO: Bevor es Ã¼berhaupt zu einem Fehlerfall kommt: dryrun
var spawn = {

    bodyCost: function (body) {
        var cost = 0;
        for (var i = 0; i < body.length; i++) {
            cost += BODYPART_COST[body[i]];
        }
        return cost
    },

    getCreepBody: function (body) {
        let bodyArray = [];

        switch (body) {
            case 'medium':
                // Cost: 550
                bodyArray = [WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'big':
                // Cost: 1000
                bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'out':
                // Cost: 2550
                bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            default:
                // Cost: 300
                bodyArray = [WORK, WORK, CARRY, MOVE];
                break;
        }

        return bodyArray;
    },


    spawnCreep: function (spawn, objective, body) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep(this.getCreepBody(body), 'scribbles' + random, {memory: {role: objective}});
        console.log(spawn.spawning);
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    spawnMedCreep: function (spawn, objective) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE], 'Wedge' + random, {memory: {role: objective}});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },


    spawnBigCreep: function (spawn, objective) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], 'Biggs' + random, {memory: {role: objective}});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('Spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    // Cost: 260
    spawnProtectron: function (spawn, objective) {
        var newName = spawn.spawnCreep([ATTACK, ATTACK, MOVE, MOVE], undefined, {role: objective});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('Spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    spawnScoutCreep: function (spawn, objective) {
        var newName = spawn.spawnCreep([ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE], undefined, {role: objective});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('Spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    spawnOutCreep: function (spawn, objective) {
        var newName = spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY], undefined, {
            role: objective,
            target: '5793fc87bc81495b7d8c885e',
            sources: '577b92b60f9d51615fa46f87'
        });
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('Spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    spawnDefScout: function (spawn, objective) {
        var newName = spawn.spawnCreep([MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK], undefined, {role: objective});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('Spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    },

    spawnClaimCreep: function (spawn, objective) {
        var newName = spawn.spawnCreep([CLAIM, MOVE], undefined, {role: objective});
        if (newName === -6) {
            console.log('Not enought Energy');
        } else {
            if (newName === -4) {
                console.log(spawn.name + ' running spawn');
            } else {
                console.log('spawning new' + ' ' + objective + ' ' + newName);
            }
        }
    }
}

module.exports = spawn;