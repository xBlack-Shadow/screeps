'use strict';

let logModule = require('module.log');
let aiModule = require('module.ai');
let clearModule = require('module.clear');
let marketModule = require('module.market');
let colonyLasika = require('colony.lasika');

// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
let profiler = require('screeps.profiler');

// This line monkey patches the global prototypes.
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
    
        logModule.log();
        
        if(Memory.spawns === undefined){
            let spawns = [];
            for(let i in Game.spawns) {
                console.log('save' + Game.spawns[i] + ' ID to memory');
                spawns.push(Game.spawns[i].id);
            }
            Memory.spawns = spawns;
        }
    
    switch(Game.time % 10){
        case 9:
            clearModule.clearMemory();
            break;
        case 0:
            marketModule.sell();
            break;
        
        default:
              
            
    }
    //colonyGyenos.live();
        colonyLasika.live();  
        aiModule.defendTowers();
        aiModule.runCreeps();
  });
};