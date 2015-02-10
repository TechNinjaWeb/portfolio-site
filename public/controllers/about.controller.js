app.controller('AboutCtrl', function($scope) {
    $scope.alias = 'AboutCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";
    $scope.urls = [{
        sref: 'contact',
        url: '/contact',
        name: 'Contact Us'
    }, {
        sref: 'about',
        url: '/about',
        name: 'About Us'
    }, {
        sref: 'login',
        url: '/login',
        name: 'Login'
    }, {
        sref: 'support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }];
});