const roleClaim = {

    /** @param {Creep} creep * */
    run(creep) {
        if (creep.memory.onDestination === undefined) {
            creep.memory.onDestination = false;
        }
        if (creep.room.name === 'E46S48') {
            const roleNext = require('role.builder');
            roleNext.run(creep);
        } else {
            const target = Game.getObjectById('5983008eb097071b4adc48b6');
            const targetPos = new RoomPosition(43, 6, 'E46S48');

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
    },
};

module.exports = roleClaim;
