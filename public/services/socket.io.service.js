angular.module('tnApp.services', []).service("Socket", ['$state', '$rootScope', '$window', '$q', function($state, $rootScope, $window, $q) {
    
    return io.connect('https://tech-ninja.herokuapp.com');
    // return io.connect('http://portfolio-site-techninja-1.c9.io/')


}]);

