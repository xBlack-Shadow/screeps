'use strict';

let roleClaim = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let target = Game.getObjectById('577b92b60f9d51615fa46f8c');
        console.log(target);
        console.log(creep.claimController(target));
        creep.moveTo(target);
            if(creep.claimController(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
                console.log(target);
            }
    }
};

module.exports = roleClaim;