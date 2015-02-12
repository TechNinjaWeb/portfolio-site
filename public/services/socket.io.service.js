// ---- Beta Test Code --- //
// This is test code to integrate Parse into Angular.
// Elements will be reusable in this mannor by allowing us
// to pass Socket IO as a dependency in any of our controllers
app.service("Socket", ['$state', '$rootScope', '$window', '$q', function($state, $rootScope, $window, $q) {
    
    return io.connect('http://localhost:3000')
    .on('response', function(message) {
            $('#chat').append($('<div id="USER">User: </div>').text(JSON.stringify(message)));
            console.log("Got Response", message);
        });


}]);


// function oldWork() {

//         IO.action = function(event, message) {
//             var deferred = $q.defer();
//             if (arguments.length > 0) {
//                 console.log(arguments, "Arguments");
//                 for (var i = 0; i < arguments.length; i++) {
//                     if (message) {
//                         console.log("Got Message. About to Emit");
//                         IO.emit({
//                             "message": message
//                         });
//                     } else if (event) {
//                         IO.on(message, function(data) {
//                             console.log("Got Message", data);

//                             deferred.resolve(data);
//                         });

//                     } else if (!message || !event) {
//                         if (!event)
//                             console.warn("You've failed to provide an event")
//                         if (!message)
//                             console.warn("You've failed to provide a message")
//                     }

//                     IO.on('connect', function() {
//                         console.warn("Connected");
//                         IO.emit('client', {
//                             client: "MacbookPro"
//                         });
//                     });
//                 }
//             }

//             return deferred.promise;
//         }

//         return IO;
//     }
    // console.log('Finished loading Socket IO Factory');

// app.service("Socket", ['$state', '$rootScope', '$window', '$q', function($state, $rootScope, $window, $q) {
//     var socket = io.connect('http://localhost:3000');
//     return {
//         on: function(eventName, callback) {
//             socket.on(eventName, function() {
//                 var args = arguments;
//                 $rootScope.$apply(function() {
//                     callback.apply(socket, args);
//                 });
//             });
//         },
//         emit: function(eventName, data, callback) {
//             socket.emit(eventName, data, function() {
//                 var args = arguments;
//                 $rootScope.$apply(function() {
//                     if (callback) {
//                         callback.apply(socket, args);
//                     }
//                 });
//             })
//         }
//     };
// }]);