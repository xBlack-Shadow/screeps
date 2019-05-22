/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * let mod = require('module.spawn');
 * mod.thing == 'a thing'; // true
 */

'use strict';

//TODO: Body grÃ¶Ãe irgendwie staffeln und nach AbhÃ¤ngigkeit der Vorhandenen Energy spawnwn

let spawn = {
    spawnToUse: function(thisRoom){
        let result = undefined;
        for(const i in Memory.spawns) {
            let current = Game.getObjectById(Memory.spawns[i]);
            if (current.spawning == null && current.room === thisRoom) {
                result = current;
            }
        }
        return result;
    },

    getCreepBody: function (body) {
        let bodyArray = [];

        if(Memory.creeps === undefined || _.isEmpty(Memory.creeps)){
            body = '';
            Game.notify('there was no Creep');
        }

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
                // Cost: 1000+
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
                bodyArray = [TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'archer':
                bodyArray = [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
                break;
            case 'healer':
                bodyArray = [HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
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

    spawnsCreep: function (objective, body, spawnRoom) {
        let random = Math.floor((Math.random() * 100) + 1);
        let spawn = this.spawnToUse(spawnRoom);
        if(spawn !== undefined) {
            switch (spawn.spawnCreep(this.getCreepBody(body), 'test', {dryRun: true})) {
                case ERR_NOT_ENOUGH_ENERGY:
                    console.log('Not enought Energy to spawn ' + objective);
                    break;
                case ERR_BUSY:
                    console.log(spawn.name + ' running spawn');
                    break;
                default:
                    spawn.spawnCreep(this.getCreepBody(body), 'scribbles' + random, {memory: {role: objective}});
                    break;
            }
        }
    },
};

module.exports = spawn;