'use strict';

let log = {

    log: function () {
        console.log(JSON.stringify(Memory.roles));
        
        let overview = ' Energy Lasika: ' + Game.spawns['Lasika'].room.energyAvailable + ' / ' +
            Game.spawns['Lasika'].room.energyCapacityAvailable + ' |';
        if(Object.keys(Game.spawns).includes('Therrial')){
            overview += ' Energy Therrial: ' + Game.spawns['Therrial'].room.energyAvailable + ' / ' +
            Game.spawns['Therrial'].room.energyCapacityAvailable + ' |';
        }
        if(Object.keys(Game.spawns).includes('omega')){
            overview += ' Energy Omega: ' + Game.spawns['omega'].room.energyAvailable + ' / ' +
            Game.spawns['omega'].room.energyCapacityAvailable
        }
        
        console.log(overview);

        Memory.spawns.forEach(function (spawnID) {
            let current = Game.getObjectById(spawnID);
            if (current.spawning !== null) {
                console.log(current.name + ' spawning ' + JSON.stringify(current.spawning));
            }
        });
    }
};

module.exports = log;