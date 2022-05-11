const roleWarrior = {

    /** @param {Creep} creep * */
    run(creep) {
        if (creep.memory.onDestination === undefined) {
            creep.memory.onDestination = false;
            console.log('Warrior goes to war');
        }
        /* let targetPos = new RoomPosition(13, 46, 'E44S49');
        if (!creep.memory.onDestination && creep.pos !== targetPos) {
            creep.moveTo(targetPos);
        } else { */
        creep.memory.onDestination = true;
        const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        console.log(`time for war! ${target.name}`);
        if (target) {
            if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
            // }
        }
    },
};

module.exports = roleWarrior;
