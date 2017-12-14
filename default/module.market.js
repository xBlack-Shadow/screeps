var market = {
    
    sell: function(){
        var amountToSell = /*Game.rooms.W46N18.terminal.store.O*/1000, maxTransferEnergyCost = Game.rooms.E9N39.terminal.store.energy;
        var orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_KEANIUM});
        	
        for(var i=0; i<orders.length; i++) {
            var transferEnergyCost = Game.market.calcTransactionCost(
                amountToSell, 'E9N39', orders[i].roomName);
        		
            if(transferEnergyCost < maxTransferEnergyCost) {
                if(Game.market.deal(orders[i].id, amountToSell, "E9N39") == 0)
                {
                    console.log('traded '+ amountToSell + ' Keanium with '+ orders[i].roomName + ' costs:' + transferEnergyCost);    
                }
                
                break;
            }
        }
    }
}


module.exports = market;