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

    spawnsCreep: function (spawn, objective, body) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep(this.getCreepBody(body), 'scribbles' + random, {memory: {role: objective}});
        if (spawn.spawning) {
            console.log(JSON.stringify(spawn.spawning));
        }
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
};

module.exports = spawn;