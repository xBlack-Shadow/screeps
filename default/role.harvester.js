const roleHarvester = {
    creep: null,

    /** @param {Creep} creep * */
    run(creep) {
        this.creep = creep;
        const roleNext = require('role.upgrader');
        if (creep.memory.source === undefined) {
            const sources = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            creep.memory.source = sources.id;
        }
        this.setState();

        if (creep.memory.isHarvesting) {
            let source = Game.getObjectById(creep.memory.source);
            if (source.energy === 0) {
                source = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType === STRUCTURE_STORAGE && (structure.energy > 0),
                });
            }
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        } else {
            const target = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType === STRUCTURE_EXTENSION
                            || structure.structureType === STRUCTURE_SPAWN
                            || structure.structureType === STRUCTURE_TOWER
                            || structure.structureType === STRUCTURE_STORAGE)
                            && (structure.energy < structure.energyCapacity || structure.storage < structure.storeCapacity),
            });
            const nearest = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType === STRUCTURE_EXTENSION
                        || structure.structureType === STRUCTURE_SPAWN
                        || structure.structureType === STRUCTURE_TOWER
                        || structure.structureType === STRUCTURE_STORAGE)
                        && (structure.energy < structure.energyCapacity || structure.store[RESOURCE_ENERGY] < structure.storeCapacity / 2),
            });
            target.push();
            target.sort();
            if (creep.room.energyAvailable < 5000) {
                if (nearest !== null) {
                    if (creep.transfer(nearest, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(nearest);
                    }
                } else {
                    roleNext.run(creep);
                }
                if (target.length) {
                    if (creep.transfer(target[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(target[0]);
                    }
                } else {
                    roleNext.run(creep);
                }
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

module.exports = roleHarvester;
