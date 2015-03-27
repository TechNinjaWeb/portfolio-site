angular.module('tnApp.controllers')
    .controller('SupportTicketDetailsCtrl', ['TicketService', '$scope', '$stateParams', '$timeout', '$rootScope', function(Tickets, $scope, $stateParams, $timeout, $rootScope) {
        $scope.stateParamsObjectId = $stateParams.objectId;
        $scope.message = "Product Detail Controller";

        $scope.deleteReply = function(index) {
            console.log("Current Ticket", index);

            var innerQuery = Tickets;
            innerQuery.get({objectId: $(objectId).text()}, function(res) {
                console.log("Reply Get Response", res)
                res.ticketBody.splice(index, 1);
                res.$update()
                $timeout(function(){
                    $rootScope.reloadWindow()
                },200);
            })
        }
    
        console.log("Clicked!");
        var query = Tickets;

        query.get({
            objectId: $scope.stateParamsObjectId,
            postedBy: Parse.User.current().get('username')
        }, function(res) {
            window.console.log(res, "Got Ticket Details");

            $scope.data = res;

        });

        $scope.replyToTicket = function(body) {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            var reply = {
                "createdAt": today,
                "replyFrom": Parse.User.current().get('username'),
                "ticketBody": body
            }

            console.log("Ticket To Send as Reply", reply, "ObjectID", $(objectId).text());

            var innerQuery = Tickets;
            innerQuery.get({objectId: $(objectId).text()}, function(res) {
                console.log("Reply Get Response", res)
                res.ticketBody.push(reply);
                console.log("Updated Res", res)
                res.$update()
                $timeout(function(){
                    $rootScope.reloadWindow()
                },200);
                
                

            })
        }


        console.log("Stateparams.objectId", $scope.stateParamsObjectId)
    

    }])