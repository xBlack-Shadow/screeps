'use strict';

let logModule = require('module.log');
let aiModule = require('module.ai');
let memoryModule = require('module.memory');
let marketModule = require('module.market');
let colonyLasika = require('colony.lasika');
let colonyTherrial = require('colony.therrial');
let colonyOmega = require('colony.omega');

// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
let profiler = require('screeps.profiler');

// This line monkey patches the global prototypes.
profiler.enable();
module.exports.loop = function () {
    profiler.wrap(function () {
        // Main.js logic should go here.
        switch (Game.time % 100) {
            case 50:
                console.log('Generating a Pixel');
                Game.cpu.generatePixel();
                break;
            case 20:
                memoryModule.clearSpawns();
                break;
            case 10:
                memoryModule.clearCreeps();
                break;
            case 0:
                marketModule.sell();
                break;
            default:
        }
        
        memoryModule.writeSpawns();
        memoryModule.writeRoles();
        
        logModule.log();
        
        colonyLasika.live();
        colonyTherrial.live();
        colonyOmega.live();
        
        aiModule.defendTowers();
        aiModule.runCreeps();
    });
};