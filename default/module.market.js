'use strict';

var market = {
    
    sell: function(){
        var amountToSell = 1000, maxTransferEnergyCost = Game.rooms.W29S27.terminal.store.energy;
        var orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_HYDROGEN});
        	
        for(var i=0; i<orders.length; i++) {
            var transferEnergyCost = Game.market.calcTransactionCost(
                amountToSell, 'W29S27', orders[i].roomName);
        		
            if(transferEnergyCost < maxTransferEnergyCost) {
                if(Game.market.deal(orders[i].id, amountToSell, "W29S27") === 0)
                {
                    console.log('traded '+ amountToSell + ' Hydrogen with '+ orders[i].roomName + ' costs:' + transferEnergyCost);    
                }
                
                break;
            }
        }
    }
};


module.exports = market;