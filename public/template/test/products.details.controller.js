app.controller('ItemDetailsCtrl', ['GetProducts', '$scope', '$stateParams', function(Products, $scope, $stateParams) {
    $scope.getItem = $stateParams.objectId;
    $scope.message = "Product Detail Controller";
    console.log($stateParams, "State Params")

    var query = Products;

    query.get({
        id: $scope.getItem
    }, function(res) {
        window.console.log(res, "Response From Server");

        $scope.data = res;

        $scope.objectId = res.objectId;
        $scope.title = res.title;
        $scope.description = res.description;
        $scope.price = res.price;
        $scope.specs = res.specs;
        Array.prototype.forEach.call($scope.specs, function(spec, key) {
            for (var bit in spec) {
                if (spec.hasOwnProperty(bit)) {
                    // console.log(spec, "Each Spec");
                    // console.log(bit,"\n");
                    var obj = spec[bit];
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            // console.log(prop + " = " + obj[prop]+"\n\n\n");
                            $scope[prop] = obj[prop];
                            // console.log($scope['Battery Capacity (Mfg Rated)'], "Some Scope")
                        }
                    }
                }
            }
        });
    });
    
    $scope.parseConst = function(){
        console.log('Clicked Parse Constraint Button');
        var pre = encodeURIComponent(JSON.stringify("where="));

        var params = {
            price: {
                '$lte': 10,
                '$gte': 9
            }
        };


        // pre = encodeURIComponent(JSON.stringify(pre));
        // params = encodeURIComponent(JSON.stringify(params));

        params = encodeURIComponent(JSON.stringify(params));
        pre += params;
        console.log("Pre", pre);
        query.nab(pre, function(res){
            console.log(res,"response from server");
        });
    }
}])