'use strict';

let memory = {
    
    clearCreeps: function(){
        for(const name in Memory.creeps) {
            if(!Game.creeps[name]) {
                console.log('Clearing non-existing creep memory:', name);
                delete Memory.creeps[name];
            }
        }
    },
    
    writeSpawns: function() {
        if (Memory.spawns === undefined) {
            let spawns = [];
            for (let i in Game.spawns) {
                console.log('save' + Game.spawns[i] + ' ID to memory');
                spawns.push(Game.spawns[i].id);
            }
            Memory.spawns = spawns;
        }
    },
    
    clearSpawns: function(){
        Memory.spawns = undefined;
    },
    
    writeRoles: function() {
        Memory.roles = {
            'harvester' : this.filterRoles('harvester').length,
            'builder' : this.filterRoles('builder').length,
            'upgrader' : this.filterRoles('upgrader').length,
            'fixer' : this.filterRoles('fixer').length,
            'roadster' : this.filterRoles('roadster').length,
            'rampster' : this.filterRoles('rampster').length,
            'scouts' : this.filterRoles('scout').length,
            'outer' : this.filterRoles('out').length,
            'claimboys' : this.filterRoles('claim').length,
            'trader' : this.filterRoles('trader').length,
        };
    },
    
    filterRoles: function(role) {
        return _.filter(Game.creeps, (creep) => creep.memory.role === role);
    }
};

module.exports = memory;