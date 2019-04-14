'use strict';

var roleScout = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var target = Game.getObjectById('579416d7a1a1e06c6a3fa36b'); //creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.attack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
            if(creep.rangedAttack(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }else{
	    creep.moveTo(Game.flags['Scout'])
        }
	}
};

module.exports = roleScout;