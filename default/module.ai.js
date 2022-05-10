'use strict';

let ai = {
    runCreeps: function(){
        let roleHarvester = require('role.harvester');
        let roleUpgrader = require('role.upgrader');
        let roleBuilder = require('role.builder');
        let roleFixer = require('role.fixer');
        let roleRoadster = require('role.roadster');
        let roleRampster = require('role.rampster');
        let roleScout = require('role.scout');
        let roleClaim = require('role.claimboy');
        let roleOut = require('role.out');
        let roleTrader = require('role.trader');
        let roleProtectron = require('role.protectron');
        let roleAmmunitioner = require('role.ammunitioner');
        let roleWarrior = require('role.warrior');
        let roleArcher = require('role.archer');
        
        
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];
            switch (creep.memory.role) {
                case 'harvester':
                    roleHarvester.run(creep);
                    break;
                case 'upgrader':
                    roleUpgrader.run(creep);
                    break;
                case 'builder':
                    roleBuilder.run(creep);
                    break;
                case 'fixer':
                    roleFixer.run(creep);
                    break;
                case 'rampster':
                    roleRampster.run(creep);
                    break;
                case 'scout':
                    roleScout.run(creep);
                    break;
                case 'claim':
                    roleClaim.run(creep);
                    break;
                case 'roadster':
                    roleRoadster.run(creep);
                    break;
                case 'out':
                    roleOut.run(creep);
                    break;
                case 'trader':
                    roleTrader.run(creep);
                    break;
                case 'protectron':
                    roleProtectron.run(creep);
                    break;
                case 'ammunitioner':
                    roleAmmunitioner.run(creep);
                    break;
                case 'warrior':
                    roleWarrior.run(creep);
                    break;
                case 'archer':
                    roleArcher.run(creep);
                    break;    
            }
        }
    },
    
    defendTowers: function(){
        let roleTower = require('role.tower');
        roleTower.defendLasika();
    }
};
module.exports = ai;