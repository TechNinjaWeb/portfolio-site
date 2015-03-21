angular.module('tnApp.controllers').controller('AboutCtrl', function($scope, $location, $anchorScroll, $timeout) {
    $scope.alias = 'AboutCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.scrollTo = function(id) {
        $location.path('/service');
        $location.hash(id);
        $timeout(function(){
            $anchorScroll();
        }, 500)
    };
});