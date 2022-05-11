const spawn = {
    spawnsCreep(objective, body, spawnRoom) {
        const random = Math.floor((Math.random() * 100) + 1);
        const spawn = this.spawnToUse(spawnRoom);
        if (spawn !== undefined) {
            console.log(spawnRoom.energyAvailable);
            switch (spawn.spawnCreep(this.getCreepBody(body), 'test', { dryRun: true })) {
            case ERR_NOT_ENOUGH_ENERGY:
                console.log(`[${spawn.name}]Not enought Energy to spawn ${objective}`);
                break;
            case ERR_BUSY:
                console.log(`${spawn.name} running spawn`);
                break;
            default:
                spawn.spawnCreep(this.getCreepBody(body), objective + random, { memory: { role: objective } });
                break;
            }
        }
    },

    spawnToUse(thisRoom) {
        let result;
        for (const i in Memory.spawns) {
            const current = Game.getObjectById(Memory.spawns[i]);
            if (current.spawning == null && current.room === thisRoom) {
                result = current;
            }
        }
        return result;
    },

    getCreepBody(body) {
        let bodyArray = [];

        if (Memory.creeps === undefined || _.isEmpty(Memory.creeps)) {
            body = '';
            Game.notify('there was no Creep');
        }

        switch (body) {
        case 'medium':
        // Cost: 550
            bodyArray = [WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'big':
        // Cost: 1000
            bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'bigger':
        // Cost: 1000+
            bodyArray = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'heavy':
        // Cost: 3500
            bodyArray = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY];
            break;
        case 'protectron':
            bodyArray = [ATTACK, ATTACK, MOVE, MOVE];
            break;
        case 'scout':
            bodyArray = [TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'archer':
            bodyArray = [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'healer':
            bodyArray = [HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE];
            break;
        case 'claim':
        // Cost: 9.75K
            bodyArray = [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM, CLAIM];
            break;
        default:
        // Cost: 300
            bodyArray = [WORK, WORK, CARRY, MOVE];
            break;
        }

        return bodyArray;
    },

};

module.exports = spawn;
