app.controller('CopyrightCtrl', function($scope) {

    $scope.alias = 'CopyrightCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.getLocation = function() {
        var location = window.location.pathname;
        return location;
    };

});