'use strict';

let ai = {
    runCreeps: function(){
        let roleHarvester = require('default/role.harvester');
        let roleUpgrader = require('default/role.upgrader');
        let roleBuilder = require('default/role.builder');
        let roleFixer = require('default/role.fixer');
        let roleRoadster = require('default/role.roadster');
        let roleRampster = require('default/role.rampster');
        let roleScout = require('default/role.scout');
        let roleClaim = require('default/role.claimboy');
        let roleOut = require('default/role.out');
        let roleTrader = require('default/role.trader');
        let roleProtectron = require('default/role.protectron');
        let roleAmmunitioner = require('default/role.ammunitioner');
        
        
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
            }
        }
    },
    
    defendTowers: function(){
        let roleTower = require('default/role.tower');
        roleTower.defendLasika();
    }
};
module.exports = ai;