angular.module('tnApp.controllers').controller('NavCtrl', ['$scope', '$rootScope', 'LoginService', 'Socket',  function($scope, $rootScope, Login, Socket) {
    $scope.alias = 'NavCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.urls = [{
        sref: 'home.about',
        url: '/about',
        name: 'About'
    }, {
        sref: 'home.portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }, {
        sref: 'home.services',
        url: '/services',
        name: 'Services'
    }, {
        sref: 'home.support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'home.contact',
        url: '/contact',
        name: 'Contact'
    }];

    if ($rootScope.sessionUser) {
        $scope.urls.push({
            sref: 'profile.main',
            url: '/profile',
            name: 'Profile'
        })
    }

    $scope.logOut = function() {
        console.log("Session User", $rootScope.sessionUser);
        Socket.disconnect();
        return Login.logOut($rootScope.sessionUser);
    };

    // LOGIN
    var loginBtn = $('#signin');
    var createAccount = $('.not-a-member');

}]);