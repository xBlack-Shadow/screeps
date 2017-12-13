var roleProtectron = {

    /** @param {Creep} creep **/
    run: function(creep) {
        console.log('Protectron startet Systeme')
        var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target) {
            if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
	}
};

module.exports = roleProtectron;