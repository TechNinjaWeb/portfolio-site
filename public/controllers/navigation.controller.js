app.controller('NavCtrl', function($scope) {
    $scope.alias = 'NavCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";
    $scope.urls = [{
        sref: 'about',
        url: '/about',
        name: 'About'
    }, {
        sref: 'portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }, {
        sref: 'support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'contact',
        url: '/contact',
        name: 'Contact'
    }];
});