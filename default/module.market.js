'use strict';

let market = {
    
    sell: function(){
        let amountToSell = 1000, maxTransferEnergyCost = Game.rooms.E45S48.terminal.store.energy;
        let orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_CATALYST});
        	
        for(let i=0; i<orders.length; i++) {
            let transferEnergyCost = Game.market.calcTransactionCost(
                amountToSell, 'E45S48', orders[i].roomName);
        		
            if(transferEnergyCost < maxTransferEnergyCost) {
                if(Game.market.deal(orders[i].id, amountToSell, "E45S48") === 0)
                {
                    console.log('traded '+ amountToSell + ' Catalyst with '+ orders[i].roomName + ' costs:' + transferEnergyCost);    
                }
                
                break;
            }
        }
    }
};


module.exports = market;