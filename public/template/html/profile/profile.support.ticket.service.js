app.services
  .service('SupportTickets', ['$http', '$q', '$resource', function($http, $q, $resource) {
    var Ticket = {};

    Ticket.get = function() {
        var User = Parse.Object.extend('User');
        var query = new Parse.Query(User);

        query.exists('supportTicket');

        var deferred = $q.defer();

        query.find({
            success: function(res) {
                console.log(res, "Found Some Stuff In DB");
                deferred.resolve(res);
            },
            error: function(res, err) {
                console.warn(res, err);
            }
        });
        return deferred.promise;
    };

    return Ticket;
      
}])
