app.controllers.controller('AppCtrl', function($scope) {
    $scope.alias = 'Tech Ninja App';
    $scope.test = "I can't think of anything cool to put here";
    $scope.title = "The Greatest App I Ever Wrote";
    $scope.list = [{
        name: 'Bryan',
        gender: 'his',
        height: '170cm',
        weight: '174Lbs',
        goal: 'Become an expert coder',
        date: '1st of January, 2014'
    }, {
        name: 'Bernice',
        gender: 'her',
        height: '120cm',
        weight: '90Lbs',
        goal: 'Own an amazing sports car',
        date: '39th of Apruary, 2014'
    }];
    $scope.message = "Happy Thanks Giving!";
    $scope.alert = function() {
        alert("You've Hit the AppCtrl Alert Button");
    };

});