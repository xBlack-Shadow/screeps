const spawnModule = require("./module.spawn");
const therrial = {
    spawn: null,
    room: null,
    population: {
        harvester: 2,
        upgrader: 1,
        builder: 0,
        fixer: 1,
        roadster: 1,
        rampster: 0,
        scout: 0,
        miner: 1,
        trader: 1,
        claimer: 0,
        protectron: 0,
        ammunitioner: 0,
        warrior: 0,
    },

    live() {
        this.spawn = Game.spawns.Therrial;
        this.room = this.spawn.room;
        this.setMemory();

        const spawnModule = require('module.spawn');
        // All Creeps incl currently spawning
        const colonyCreeps = _.filter(Game.creeps, (creep) => creep.room.name === spawn.room.name);

        Object.entries(this.population).forEach(([role, amount]) => {
            const pop = _.filter(colonyCreeps, (creep) => creep.memory.role === role);
            if (pop.length < amount) {
                spawnModule.spawnsCreep(role, this.getSize(), this.room);
            }
        });
    },

    setMemory() {
        if (Memory.colony === undefined || Memory.colony.therrial === undefined) {
            console.log('create Colony');
            const sources = [];
            this.room.find(FIND_SOURCES).forEach((element) => {
                sources.push(element.id);
            });
            Object.assign(Memory.colony, {therrial: {sources}});
        }
    },

    getSize() {
        let size = '';
        if (this.room.energyAvailable >= 3500) {
            size = 'heavy';
        }
        if (this.room.energyAvailable >= 1000) {
            size = 'big';
        }
        if (this.room.energyAvailable >= 550) {
            size = 'medium';
        }
        return size;
    },
};

module.exports = therrial;
