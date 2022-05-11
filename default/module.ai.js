const ai = {
    runCreeps() {
        const roleHarvester = require('role.harvester');
        const roleUpgrader = require('role.upgrader');
        const roleBuilder = require('role.builder');
        const roleFixer = require('role.fixer');
        const roleRoadster = require('role.roadster');
        const roleRampster = require('role.rampster');
        const roleScout = require('role.scout');
        const roleClaim = require('role.claimboy');
        const roleOut = require('role.out');
        const roleTrader = require('role.trader');
        const roleProtectron = require('role.protectron');
        const roleAmmunitioner = require('role.ammunitioner');
        const roleWarrior = require('role.warrior');
        const roleArcher = require('role.archer');

        for (const name in Game.creeps) {
            const creep = Game.creeps[name];
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

    defendTowers() {
        const roleTower = require('role.tower');
        roleTower.defendLasika();
    },
};
module.exports = ai;
