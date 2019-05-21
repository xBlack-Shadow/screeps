'use strict';

let roleArcher = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.rangedAttack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
	}
};

module.exports = roleArcher;