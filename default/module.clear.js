'use strict';

let clear = {
    clearMemory: function(){
        for(const name in Memory.creeps) {
            if(!Game.creeps[name]) {
                console.log('Clearing non-existing creep memory:', name);
                delete Memory.creeps[name];
            }
        }
    },
    clearSpawnMemory: function(){
        Memory.spawns = undefined;
    }
};

module.exports = clear;