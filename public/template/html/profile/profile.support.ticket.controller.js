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

        var query = Messages;
        query.nab({
            id: "uFodfPG42N"
        }, function(res) {
            console.log("Non Paginated Res = ", res)
                $scope.supportTickets = res.results;
                window.console.log($scope.supportTickets, "Support Ticket Data Object");
        });



        // var TicketData = new Ticket.get()
        //     .then(function(data) {
        //         console.log("Data", data);
        //         data.forEach(function(val) {
        //             $scope.supportTickets = val.attributes.supportTicket;
        //         })
        //     });

        console.log("Ticket Service", Ticket);

        console.log("Support Tickets", $scope.supportTickets)

    }]);
// console.log('Finished loading LoginCtrl');