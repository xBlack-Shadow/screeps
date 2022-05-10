'use strict';

let global = {

    live: function () {
        let spawnModule = require('module.spawn');
        let spawn = Game.spawns['Lasika'];
        let globalCreeps = Game.creeps

        let claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
        
        if (claimboys.length < 0) {
            //spawnModule.spawnsCreep('claim', 'claim', spawn.room)
        }
    }
};

module.exports = global;