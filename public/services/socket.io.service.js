// ---- Beta Test Code --- //
// This is test code to integrate Parse into Angular.
// Elements will be reusable in this mannor by allowing us
// to pass Socket IO as a dependency in any of our controllers
app.service("Socket", ['$state', '$rootScope', '$window', '$route', function($state, $rootScope, $window, $route) {
    return io.connect('http://localhost:3000');
}]);
// console.log('Finished loading Socket IO Factory');