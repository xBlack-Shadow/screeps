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
        
        
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role === 'harvester') {
                roleHarvester.run(creep);
            }
            if(creep.memory.role === 'upgrader') {
                roleUpgrader.run(creep);
            }
    		if(creep.memory.role === 'builder') {
                roleBuilder.run(creep);
            }
            if(creep.memory.role === 'fixer') {
                roleFixer.run(creep);
            }
            if(creep.memory.role === 'rampster') {
                roleRampster.run(creep);
            }
            if(creep.memory.role === 'scout') {
                roleScout.run(creep);
            }
            if(creep.memory.role === 'claim') {
                roleClaim.run(creep);
            }
            if(creep.memory.role === 'roadster') {
                roleRoadster.run(creep);
            }
            if(creep.memory.role === 'out') {
                roleOut.run(creep);
            }
            if(creep.memory.role === 'trader'){
                roleTrader.run(creep);
            }
            if(creep.memory.role == 'protectron'){
                roleProtectron.run(creep);
            }
        }	
    },
    
    defendTowers: function(){
        var roleTower = require('role.tower');
        roleTower.defendLasika();
    }
}
module.exports = ai;