'use strict';

let roleClaim = {

    /** @param {Creep} creep **/
    run: function (creep) {
        let target = Game.getObjectById('577b92b60f9d51615fa46f8c');
        let targetPos = new RoomPosition(25, 25, 'W28S27');
        console.log(target);
        console.log(creep.pos);
        console.log(targetPos);
        console.log(creep.claimController(target));
        if (creep.pos !== targetPos) {
            creep.moveTo(targetPos);
        }
        if (creep.claimController(target) === ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
            console.log(target);
        }
    }
};

module.exports = roleClaim;