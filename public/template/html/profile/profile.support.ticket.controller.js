// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers')
    .controller('SupportTicketCtrl', ['$scope', '$state', '$rootScope', 'ngTableParams', 'SupportTickets', 'TicketService', function($scope, $state, $rootScope, Table, Ticket, Messages) {

        $scope.alias = 'Support Ticket Controller';

        console.log('Getting products ...');
        // // PAGINATION PLUGIN TEST
        // $scope.tableParams = new Table({
        //     page: 1, // show first page
        //     count: 10 // count per page
        // }, {
        //     getData: function($defer, params) {
        //         var query = Messages;
        //         query.getAllTickets(
        //             function(res) {
        //                 console.log("GET DATA: res = ", res)
        //                 $scope.data = res.results.slice((params.page() - 1) * params.count(), params.page() * params.count());
        //                 window.console.log($scope.data, "Data Object");
        //             })
        //     }
        // });


        // WORKDING FAKE DATA
        // var params = {
        //     "objectId": 'K9ZRrggJkc',
        //     "ticketSubject": ticketSubject,
        //     "ticketBody": ticketBody
        // }

        var params = {
            "where": {
                "postedBy": Parse.User.current().get('username')
            }
        }

        var query = Messages;
        query.get(params, function(res) {
            console.log("Non Paginated Res = ", res)
            $scope.supportTickets = res.results;
            $scope.ticketThread = res.results[0].supportTickets;
            window.console.log($scope.supportTickets, "Support Ticket Data Object");
            window.console.log("Ticket Thread: ", $scope.ticketThread);
        });

        $scope.createTicket = function(subject, body) {
            console.log("Subject", subject, "Body", body);

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
            console.log("Sending This DATA: ", params)

            query.post(params, function(res) {
                console.log("Post Ticket ", res)
            });
        }

        $scope.updateTicket = function(subject, body) {
            
        }

    }]);
// console.log('Finished loading LoginCtrl');