var lasika = {
	
	live: function(){
	    var spawnModule = require('module.spawn');
        var spawn = Game.spawns['Lasika'];
        var myRoom = Game.spawns['Lasika'].room;
        var lasikaCreeps = spawn.room.find(FIND_MY_CREEPS);
        
        var harvesters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'harvester');
    	var builders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'builder');
    	var upgraders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'upgrader');
    	var fixers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'fixer');
    	var roadsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'roadster');
    	var rampsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'rampster');
    	var scouts = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'scout');
    	var outers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'out');
    	var claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
    	var trader = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'trader');
    	
    	if(harvesters.length < 2) {
            if(myRoom.energyAvailable < 550){
                executeSpawn(spawn, 'harvester');
            }else{
                if(myRoom.energyAvailable < 1000){
                    spawnModule.spawnMedCreep(spawn, 'harvester')
                }else{
                    spawnModule.spawnBigCreep(spawn, 'harvester')
                }
            }
        }else{
            if(upgraders.length < 3) {
                if(/*myRoom.energyAvailable < 550*/false){
                    spawnModule.spawnCreep(spawn, 'upgrader');
                }else{
                    if(/*myRoom.energyAvailable < 1000*/ true){
                        spawnModule.spawnMedCreep(spawn, 'upgrader');
                    }else{
                        spawnModule.spawnBigCreep(spawn, 'upgrader');
                    }   
                }
            }else{
                if(builders.length < 1) {
                    if(myRoom.energyAvailable < 550){
                        spawnModule.spawnCreep(spawn, 'builder');
                    }else{
                        if(myRoom.energyAvailable < 1000){
                            spawnModule.spawnMedCreep(spawn, 'builder');
                        }else{
                            spawnModule.spawnBigCreep(spawn, 'builder');
                        }   
                    }
                }else{
                    if(fixers.length < 2) {
                        spawnModule.spawnBigCreep(spawn, 'fixer');
                    }else{
                        if(roadsters.length < 0) {
                            spawnModule.spawnBigCreep(spawn, 'roadster');
                        }else{
                            if(rampsters.length < 0) {
                                spawnModule.spawnCreep(spawn, 'rampster');
                            }else{
                                if(scouts.length < 0) {
                                    if(myRoom.energyAvailable < 650){
                                        spawnModule.spawnScoutCreep(spawn, 'scout');
                                    }else{
                                        spawnModule.spawnDefScout(spawn, 'scout');
                                    }
                                }else{
                                    if(outers.length < 1) {
                                        spawnModule.spawnBigCreep(spawn, 'out');
                                    }else{
                                        if(trader.length < 1){
                                            spawnModule.spawnBigCreep(spawn, 'trader');
                                        }
                                        if(claimboys.lenght < 0){
                                            spawnModule.spawnClaimCreep(spawn, 'claim')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
	},
	
	executeSpawn: function(spawn, role){
	    spawnModule.spawnCreep(spawn, role);
	} 
}
 
module.exports = lasika