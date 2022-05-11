const omega = {

    live() {
        if (Game.spawns.omega !== undefined) {
            const spawnModule = require('module.spawn');
            const spawn = Game.spawns.omega;
            if (Memory.colony === undefined || Memory.colony.omega === undefined) {
                console.log('create Colony');
                const sources = [];
                spawn.room.find(FIND_SOURCES).forEach((element) => {
                    sources.push(element.id);
                });
                Object.assign(Memory.colony, { omega: { sources } });
                // Memory.colony = {'omega' : {'sources' : sources}};
            }

            const lasikaCreeps = _.filter(Game.creeps, (creep) => creep.room.name === spawn.room.name); // Alle Creeps + Creeps die gespawnt werden

            const harvesters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'harvester');
            const builders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'builder');
            const upgraders = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'upgrader');
            const fixers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'fixer');
            const roadsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'roadster');
            const rampsters = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'rampster');
            const scouts = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'scout');
            const outers = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'out');
            const claimboys = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'claim');
            const trader = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'trader');
            const protectron = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'protectron');
            const ammunitioner = _.filter(lasikaCreeps, (creep) => creep.memory.role === 'ammunitioner');

            if (harvesters.length < 2) {
                if (spawn.room.energyAvailable < 1000) {
                    spawnModule.spawnsCreep('harvester', '', spawn.room);
                }
                spawnModule.spawnsCreep('harvester', 'big', spawn.room);
            } else if (upgraders.length < 3) {
                if (spawn.room.energyAvailable < 550) {
                    spawnModule.spawnsCreep('upgrade', '', spawn.room);
                }
                spawnModule.spawnsCreep('upgrade', 'medium', spawn.room);
            } else {
                const hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
                if (hostiles.length !== 0) {
                    if (ammunitioner.length < 0) {
                        spawnModule.spawnsCreep('ammunitioner', 'big', spawn.room);
                    } else if (protectron.length < 0) {
                        spawnModule.spawnsCreep('protectron', 'scout', spawn.room);
                    }
                } else if (builders.length < 3) {
                    spawnModule.spawnsCreep('builder', '', spawn.room);
                } else if (fixers.length < 1) {
                    spawnModule.spawnsCreep('fixer', 'medium', spawn.room);
                } else if (roadsters.length < 0) {
                    spawnModule.spawnsCreep('roadster', 'big', spawn.room);
                } else if (rampsters.length < 0) {
                    spawnModule.spawnsCreep('rampster', 'medium', spawn.room);
                } else if (scouts.length < 0) {
                    spawnModule.spawnsCreep('scout', 'medium', spawn.room);
                } else {
                    const minerals = spawn.room.find(FIND_MINERALS);
                    if (outers.length < 0 && minerals[0].mineralAmount !== 0) {
                        spawnModule.spawnsCreep('out', 'out', spawn.room);
                    } else {
                        const terminal = spawn.room.find(FIND_STRUCTURES, {
                            filter: (structure) => (structure.structureType === STRUCTURE_TERMINAL),
                        })[0];
                        if (trader.length < 0 && terminal.store.energy <= 50000) {
                            spawnModule.spawnsCreep('trader', 'big', spawn.room);
                        }
                        if (claimboys.length < 0) {
                            spawnModule.spawnsCreep('claim', 'claim', spawn.room);
                        }
                    }
                }
            }
        }
    },
};

module.exports = omega;
