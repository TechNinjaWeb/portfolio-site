angular.module('tnApp.controllers')
    .controller('SupportTicketDetailsCtrl', ['TicketService', '$scope', '$stateParams', function(Tickets, $scope, $stateParams) {
        $scope.getItem = $stateParams.objectId;
        $scope.message = "Product Detail Controller";
        console.log($stateParams, "State Params")

        console.log("State Params, Object ID", $scope.getItem);

        var query = Tickets;

        query.get({
            id: $scope.getItem
        }, function(res) {
            window.console.log(res, "Response From Server");

            $scope.data = res;
            // UPDATE $SCOPE.THING WITH 
            // DATA FROM PARSE.COM TO MATCH
            // THE TABLE NAMES
            $scope.objectId = res.objectId;
            $scope.allTickets = res.supportTickets;
            
        });

        var newQuery = Tickets;

        // newQuery.get({
        //     id: $scope.getItem
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
                username: {
                    '$exists': Parse.User.current().get('userName')
                }
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