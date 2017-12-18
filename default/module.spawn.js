/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('module.spawn');
 * mod.thing == 'a thing'; // true
 */

//TODO: Namensgebung irgendwie randomisieren. spawncreep nimmt kein undefined mehr an.
//TODO: Fehlerkennung mit einem SwitchCase bauen.
var spawn = {


    bodyCost: function(body) {
        var cost = 0;
        for (var i = 0; i < body.length; i++) {
            cost += BODYPART_COST[body[i]];
        }
        return cost
    },
    
    // Cost: 300
    spawnCreep: function(spawn, objective) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep([WORK,WORK,CARRY,MOVE], 'scribbles' + random, {memory : {role: objective}});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    // Cost: 550
    spawnMedCreep: function(spawn, objective){
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE], 'Wedge' + random, {memory : {role: objective}});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    // Cost: 1000
    spawnBigCreep: function(spawn, objective) {
        var random = Math.floor((Math.random() * 100) + 1);
        var newName = spawn.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], 'Biggs'  + random, {memory : {role: objective}});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('Spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    // Cost: 260
    spawnProtectron: function(spawn, objective) {
        var newName = spawn.spawnCreep([ATTACK,ATTACK,MOVE,MOVE], undefined, {role: objective});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('Spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    
    
    spawnScoutCreep: function(spawn, objective) {
        var newName = spawn.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,TOUGH,TOUGH,MOVE,MOVE], undefined, {role: objective});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('Spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    spawnOutCreep: function(spawn, objective){
        var newName = spawn.spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY], undefined, {role: objective, target: '5793fc87bc81495b7d8c885e', sources:'577b92b60f9d51615fa46f87'});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                /*newName.memory = {target: '578fb3fd31c0b504726f357f'};
                newName.memory = {sources: '577b92bf0f9d51615fa47080'};*/
                console.log('Spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    spawnDefScout: function(spawn, objective){
        var newName = spawn.spawnCreep([MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK], undefined, {role: objective});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('Spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    },
    
    spawnClaimCreep: function(spawn, objective) {
        var newName = spawn.spawnCreep([CLAIM,MOVE], undefined, {role: objective});
        if(newName == -6){
            console.log('Not enought Energy');
        }else{
            if(newName == -4){
                console.log(spawn.name + ' running spawn');
            }else{
                console.log('spawning new' + ' ' + objective+ ' ' + newName);
            }
        }
    }
}

module.exports = spawn;