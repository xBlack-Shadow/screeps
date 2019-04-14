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
    spawnToUse: function(){
        for(const i in Memory.spawns) {
            let current = Game.getObjectById(Memory.spawns[i]);
            if (current.spawning == null) {
                return current;
            }
        }
    },

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
            case 'bigger':
                // Cost: 1000
                bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'out':
                // Cost: 2550
                bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'protectron':
                bodyArray = [ATTACK, ATTACK, MOVE, MOVE];
                break;
            case 'scout':
                bodyArray = [ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE];
                break;
            case 'claim':
                bodyArray = [CLAIM, MOVE];
                break;
            default:
                // Cost: 300
                bodyArray = [WORK, WORK, CARRY, MOVE];
                break;
        }

        return bodyArray;
    },

    spawnsCreep: function (objective, body) {
        let random = Math.floor((Math.random() * 100) + 1);
        let spawn = this.spawnToUse();
        switch (spawn.spawnCreep(this.getCreepBody(body), 'test', {dryRun: true})) {
            case ERR_NOT_ENOUGH_ENERGY:
                console.log('Not enought Energy');
                break;
            case ERR_BUSY:
                console.log(spawn.name + ' running spawn');
                break;
            default:
                spawn.spawnCreep(this.getCreepBody(body), 'scribbles' + random, {memory: {role: objective}});
                break;
        }
    },
};

module.exports = spawn;