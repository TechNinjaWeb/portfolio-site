angular.module('tnApp.controllers').controller('ServiceCtrl', function($scope, $location, $anchorScroll) {
    $scope.alias = 'Services Controller';
    $scope.title = 'Service Page Controller';
    $scope.message = "Yo Yo Son, this is the service page!";

    $scope.scrollTo = function(id) {
        var location = '/service/';
        var old = $location.hash(location);
        var newLoc = location + id;
        $anchorScroll(id);
        //reset to old to keep any additional routing logic from kicking in
        // $location.hash('/service');
    };
});