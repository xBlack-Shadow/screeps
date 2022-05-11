const clear = {
    clearMemory() {
        for (const name in Memory.creeps) {
            if (!Game.creeps[name]) {
                console.log('Clearing non-existing creep memory:', name);
                delete Memory.creeps[name];
            }
        }
    },
    clearSpawnMemory() {
        Memory.spawns = undefined;
    },
};

module.exports = clear;
