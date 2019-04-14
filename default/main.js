'use strict';

var spawnModule = require('module.spawn');
var logModule = require('module.log');
var aiModule = require('module.ai');
var clearModule = require('module.clear');
var marketModule = require('module.market');
var colonyLasika = require('colony.lasika');

// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
const profiler = require('screeps.profiler');

// This line monkey patches the global prototypes.
profiler.enable();
module.exports.loop = function() {
  profiler.wrap(function() {
    // Main.js logic should go here.
    
        logModule.log();
        
        if(Memory.spawns === undefined){
            for(const i in Game.spawns) {
                Memory.spawns = Game.spawns[i];
            }

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
    
    //marketModule.sell();
    
  });
}
/*
module.exports.loop = function () {
    
    
    
    
    
    logModule.log();
    
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
    
    //marketModule.sell();
};
*/