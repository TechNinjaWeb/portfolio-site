// -- See AppCtrl Comment for usage description -- //
app.controllers
    .controller('SupportTicketCtrl', ['$scope', '$state', '$rootScope', '$timeout', 'ngTableParams', 'TicketService', function($scope, $state, $rootScope, $timeout, Table, Messages) {

        
        $scope.alias = 'Support Ticket Controller';

        $scope.ticketInView = function() {

            var location = window.location.pathname;

            if (location.contains('ticket'))
                return true;
            else
                return false;

        };

        var params = {
            "where": {
                "postedBy": Parse.User.current().get('username')
            }
        }

        var query = Messages;
        query.get(params, function(res) {
            // console.log("Non Paginated Res = ", res)    
            $scope.supportTickets = res.results;
            $scope.ticketThread = res.results[0].supportTickets;

        });

        $scope.createTicket = function(subject, body) {
            // console.log("Subject", subject, "Body", body);

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            var ticketSubject = subject,
                ticketBody = [],
                // The ticket itself
                body = {
                    createdAt: today,
                    ticketBody: body,
                    replyFrom: Parse.User.current().get('username')
                }
            ticketBody.push(body);

            var params = {
                "postedBy": Parse.User.current().get('username'),
                "ticketSubject": ticketSubject,
                "ticketBody": ticketBody,
                "ticketStatus": "open"
            }

            JSON.stringify(params);

            query.post(params, function(res) {
                console.log("Post Ticket ", res)
                if ($('.close').length > 0)
                    $('.close').click();


                console.warn("Hope that this updated with new message!", $scope.supportTickets)

            });
        }

        // $scope.replyToTicket = function(body) {
        //     var today = new Date();
        //     var dd = today.getDate();
        //     var mm = today.getMonth() + 1; //January is 0!
        //     var yyyy = today.getFullYear();

        //     var reply = {
        //         "createdAt": today,
        //         "replyFrom": Parse.User.current().get('username'),
        //         "ticketBody": "HEY THIS IS SOME NEW TICKET TO APPEND"
        //     }

        //     console.log("Ticket To Send as Reply", reply, "ObjectID", $(objectId).text());

        //     var params = {
        //         "where": {
        //             "objectId": $(objectId).text()
        //         }
        //     }

        //     console.warn("PARAMS OBJECT", params);

        //     var query = Messages;
        //     query.get(params, function(res) {
        //         console.log("Reply Get Response", res)
        //         res.results[0].ticketBody.push(reply);
        //         console.log("Updated Res", res)
                
        //         $timeout(function(){
        //             res.results[0].update()
        //             console.log('Updated');
        //         },200);
        //         // Refresh Tickets
        //         $timeout(function(){
        //             Messages.get({});
        //             console.log('Refreshing Posts');
        //         },600);
                

        //     })
        // }
    }]);
// console.log('Finished loading LoginCtrl');