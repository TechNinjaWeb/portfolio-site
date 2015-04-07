app.controllers
    .controller('SupportTicketDetailsCtrl', ['TicketService', '$scope', '$stateParams', '$timeout', '$q', function(Tickets, $scope, $stateParams, $timeout, $q) {
        $scope.stateParamsObjectId = $stateParams.objectId;
        $scope.message = "Product Detail Controller";

        var deferred = $q.defer();


        console.log("Deferred", deferred);
        var query = Tickets;

        $scope.data = query.get({
            objectId: $scope.stateParamsObjectId,
            postedBy: Parse.User.current().get('username')
        }, function(res) {
            window.console.log(res, "Got Ticket Details");


            // $scope.data = res;
            deferred.resolve(res);

            return deferred.promise;

        })

        $scope.replyToTicket = function(body) {
            var currentId = $(objectId).text();
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            var reply = {
                "createdAt": today,
                "replyFrom": Parse.User.current().get('username'),
                "ticketBody": body
            }

            console.log("Ticket To Send as Reply", reply, "ObjectID", currentId);

            console.log("Current Scope Data", $scope.data, "Index", "Null");
            $scope.data.results.forEach(function(e, i, a) {
                if (e.hasOwnProperty('objectId') && e.objectId == currentId) {
                    console.log("Update This Body", $scope.data);
                    // $scope.data.$update({objectId: currentId},function(res){console.log("res", res)}, function(err){console.log("Err", err)});

                    // $scope.data.$update();

                    // var innerQuery = Tickets;
                    // innerQuery.get({objectId: currentId}, function(res) {
                    //     console.log("Reply Get Response", res)
                    //     res.ticketBody.push(reply);
                    //     res.$update({}, function(res){console.log("Res", res)}, function(res){console.log("Err", err)})
                    //     $timeout(function(){
                    //         // $rootScope.reloadWindow()
                    //         $scope.data = res;
                    //     },200);
                    // })
                    console.log("E", e, "I", i, "A", a);
                    console.warn("obj in arr", $scope.data[e]);
                    console.warn("idx in arra", $scope.data[i]);
                    $scope.data.$update({objectId: currentId}, function(res){console.log("Res", res)}, function(res){console.log("Err", err)})

                }
            })

            // $scope.data.ticketBody.push(reply);


        }

        $scope.deleteReply = function(index) {
            console.log("Current Ticket", index);
            console.log("Current Scope Data", $scope.data);
            $scope.data.ticketBody.splice($scope.data.ticketBody[index+1], 1);
            $scope.data.$update();

        }


        console.log("Stateparams.objectId", $scope.stateParamsObjectId)


    }])