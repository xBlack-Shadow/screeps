'use strict';

var ai = {
    runCreeps: function(){
        var roleHarvester = require('role.harvester');
        var roleUpgrader = require('role.upgrader');
        var roleBuilder = require('role.builder');
        var roleFixer = require('role.fixer');
        var roleRoadster = require('role.roadster');
        var roleRampster = require('role.rampster');
        var roleScout = require('role.scout');
        var roleClaim = require('role.claimboy');
        var roleOut = require('role.out');
        var roleTrader = require('role.trader');
        var roleProtectron = require('role.protectron');
        
        
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
            }
        }
    },
    
    defendTowers: function(){
        var roleTower = require('role.tower');
        roleTower.defendLasika();
    }
};
module.exports = ai;