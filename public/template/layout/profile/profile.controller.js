// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers')
    .controller('ProfileCtrl', ['$scope', '$state', '$rootScope', 'LoginService', function($scope, $state, $rootScope, User) {

        $scope.alias = 'Profile Controller';

        if (Parse.User.current() != null || Parse.User.current()) {
            $scope.currentUser = {
                username: Parse.User.current().get('username'),
                firstName: Parse.User.current().get('firstName'),
                lastName: Parse.User.current().get('lastName'),
                email: Parse.User.current().get('email')
            }
        }

        console.log("CURRENT USER", $scope.currentUser);
    }]);
// console.log('Finished loading LoginCtrl');