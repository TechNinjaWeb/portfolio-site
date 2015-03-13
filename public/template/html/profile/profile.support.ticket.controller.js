// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers')
    .controller('SupportTicketCtrl', ['$scope', '$state', '$rootScope', 'SupportTickets', 'TicketService', function($scope, $state, $rootScope, Ticket, Message) {

        $scope.alias = 'Support Ticket Controller';

        // $scope.supportTickets = [{
        //     ticketId: "12345",
        //     ticketStatus: "Open",
        //     ticketSubject: "Broken Mixing Tape",
        //     ticketBody: "Hey Man Yada Yada Yah, Man!"
        // }, {
        //     ticketId: "54321",
        //     ticketStatus: "Open",
        //     ticketSubject: "Awesome Site",
        //     ticketBody: "Hey Dude Yada Yada Yah, Dude!"
        // }];

        var TicketData = new Ticket.get()
            .then(function(data){
                console.log("Data", data);
                data.forEach(function(val){
                    $scope.supportTickets = val.attributes.supportTicket;
                })
            });

        console.log("Ticket Service", Ticket);

        console.log("Support Tickets", $scope.supportTickets)

    }]);
// console.log('Finished loading LoginCtrl');
