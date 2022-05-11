const roleBuilder = {
    creep: null,

    /** @param {Creep} creep * */
    run(creep) {
        this.creep = creep;

        const roleNext = require('role.roadster');
        const targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

        if (creep.memory.source === undefined) {
            const daSources = creep.room.find(FIND_SOURCES);
            console.log(daSources);
            if (daSources === undefined) {
                console.log('Yo! No Sources Available!');
                return;
            }
            creep.memory.source = daSources[0].id;
            // creep.memory.source = Game.getObjectById('59830073b097071b4adc4513');
        }

        this.setState();

        /* let targets;
        _.forEach(Game.rooms, room => {
            console.log(room.find(FIND_CONSTRUCTION_SITES));
            targets = room.find(FIND_CONSTRUCTION_SITES);
        }); */

        if (!creep.memory.isHarvesting) {
            if (targets !== null) {
                if (creep.build(targets/* [0] */) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets/* [0] */);
                }
            } else {
                // creep.moveTo(new RoomPosition(25, 25, 'W28S27'));
                roleNext.run(creep);
            }
        } else {
            const sources = Game.getObjectById(creep.memory.source);
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

module.exports = roleBuilder;
