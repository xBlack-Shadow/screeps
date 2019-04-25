'use strict';

let market = {
    
    sell: function(){
        let amountToSell = 1000, maxTransferEnergyCost = Game.rooms.W29S27.terminal.store.energy;
        let orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_HYDROGEN});
        	
        for(let i=0; i<orders.length; i++) {
            let transferEnergyCost = Game.market.calcTransactionCost(
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