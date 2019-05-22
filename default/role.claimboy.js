'use strict';

let roleClaim = {

    /** @param {Creep} creep **/
    run: function (creep) {
        let target = Game.getObjectById('5bbcab669099fc012e6336fd');
        let targetPos = new RoomPosition(25, 25, 'W28S27');
        let count = 0;
        console.log(count);
        console.log(target);
        console.log(creep.pos);
        console.log(targetPos);
        console.log(creep.claimController(target));
        if (count === 0 && creep.pos !== targetPos) {
            creep.moveTo(targetPos);
        } else {
            count = 1;
            if (creep.claimController(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
                console.log(target);
            }
        }
    }
};

module.exports = roleClaim;