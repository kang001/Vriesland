var InventoryService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findByDate = function(expirationDate) {
        var deferred = $.Deferred();
        var inventory = null;
        var l = inventory.length;
        for (var i=0; i < l; i++) {
            if (item[i].id === id) {
                inventory = item[i];
                break;
            }
        }
        deferred.resolve(inventory);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = item.filter(function(element) {
            var itemRecord = element.itemName + " " + element.expirationDate;
            return itemRecord.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }
    this.displayAll = function(inventory){
        console.log(inventory);
    }

    var inventory = [
        {"itemName" : "Apple", "expirationDate": "11/2012"},
        {"itemName" : "Apple Juice", "expirationDate": "11/2013"},
        {"itemName" : "Apple Pie", "expirationDate": "11/2022"},
        {"itemName" : "Apple Milk", "expirationDate": "4/2016"}
        ];

}