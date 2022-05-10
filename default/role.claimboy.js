'use strict';

let roleClaim = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if(creep.memory.onDestination === undefined){
            creep.memory.onDestination = false;
        }
        if(creep.room.name === 'E44S49'){
            let roleNext = require('role.upgrader');
            roleNext.run(creep);
            //creep.moveTo(Game.flags['claim'])
        }else{
        let target = Game.getObjectById('59830073b097071b4adc4511');
        let targetPos = new RoomPosition(43, 6, 'E44S49');
        
        console.log(creep.memory.onDestination);
        console.log(target);
        console.log(creep.pos);
        console.log(targetPos);
        console.log(creep.claimController(target));
        if (!creep.memory.onDestination && creep.pos !== targetPos) {
            creep.moveTo(targetPos);
        } else {
            creep.memory.onDestination = true;
            if (creep.claimController(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
                console.log(target);
            }
        }
        }
    }
};

module.exports = roleClaim;