angular.module('tnApp.controllers')
    .controller('SupportTicketDetailsCtrl', ['TicketService', '$scope', '$stateParams', function(Tickets, $scope, $stateParams) {
        $scope.stateParamsObjectId = $stateParams.objectId;
        $scope.message = "Product Detail Controller";
        console.log($stateParams, "State Params")

        var query = Tickets;

        query.get({
            objectId: $scope.stateParamsObjectId
        }, function(res) {
            window.console.log(res, "Response From Server");

            $scope.data = res;
        });

        var newQuery = Tickets;

        // newQuery.get({
        //     id: $scope.stateParamsObjectId
        // }, function(res) {
        //     window.console.log(res, "Response From Server");

        //     $scope.data = res;
        //     // UPDATE $SCOPE.THING WITH 
        //     // DATA FROM PARSE.COM TO MATCH
        //     // THE TABLE NAMES
        //     $scope.objectId = res.objectId;
        //     $scope.allTickets = res.supportTickets;
            
        // });
        
        $scope.parseConst = function(){
            console.log('Clicked Parse Constraint Button');
            var pre = encodeURIComponent(JSON.stringify("where="));

            var params = {
                "userName": "User Name"      
            };

            console.log("Params Object", params);
            console.log("Current User", Parse.User.current().get('userName'));

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