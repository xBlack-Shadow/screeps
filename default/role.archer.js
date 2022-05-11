const roleArcher = {

    /** @param {Creep} creep * */
    run(creep) {
        if (creep.memory.onDestination === undefined) {
            creep.memory.onDestination = false;
            console.log('Archer goes to war');
        }
        const targetPos = new RoomPosition(13, 46, 'E44S49');
        if (creep.room.name === 'E44S49') {
            creep.memory.onDestination = true;
        }
        if (!creep.memory.onDestination && creep.pos !== targetPos) {
            creep.moveTo(targetPos);
        } else {
            creep.memory.onDestination = true;
            const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            console.log(`time for war! ${target.name}`);
            if (target) {
                if (creep.rangedAttack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
    },
};

module.exports = roleArcher;
