const roleUpgrader = {
    creep: null,

    /** @param {Creep} creep * */
    run(creep) {
        console.log(creep.name, creep.room.name);
        this.creep = creep;
        this.setState();
	    const controller1 = creep.room.controller;

	    if (!creep.memory.isHarvesting) {
            if (creep.upgradeController(controller1) === ERR_NOT_IN_RANGE) {
                creep.moveTo(controller1);
            }
        } else {
            const sources = creep.pos.findClosestByRange(FIND_SOURCES);
            if (creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }
    },

    setState(state = true) {
        if (!this.creep.memory.isHarvesting && this.creep.carry.energy > 0) {
            return;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            state = false;
        }
        this.creep.memory.isHarvesting = state;
    },
};

module.exports = roleUpgrader;
