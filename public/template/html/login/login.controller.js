// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers')
    .controller('LoginCtrl', ['$scope', '$state', '$rootScope', 'ParseSDK', function($scope, $state, $rootScope, Login) {

        $scope.alias = 'Login Controller';

        $scope.currentUsername = $rootScope.currentUser;

        $scope.username = $rootScope.sessionUserName || "User Name";
        $scope.password = "password";
        $scope.firstName = "First Name";
        $scope.lastName = "Last Name";
        $scope.email = "email@mail.com";

        $scope.userDetails = [{
            username: $scope.username,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email
        }];

        // Create New User Function
        $scope.createUser = function() {
            // Creating User Details Object to encapsulate user data
            // We're using push to update the scope with new data from
            // the frontend and sending it to Parse.User()
            $scope.userDetails.push({
                username: $scope.username,
                password: $scope.password,
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email
            });

            console.log("Passing Parse Test User to Login.JS using data: ", $scope.userDetails);
            return Login.createUser($scope.userDetails);
        };

        // Login Function Using /login Screen Data
        $scope.login = function(username, password) {
            // Creating User Details Object to encapsulate user data
            // We're using push to update the scope with new data from
            // the frontend and sending it to Parse.User()

            return Login.login(username, password);
        };

        // $scope.login = function(username, pass) {
        //     var user = {};
        //     user.pass = pass;
        //     user.username = username;

        //     return request.login(user);
        // };

        $scope.createUser = function(username, firstName, lastName, email, password) {
            var user = {};

            user.username = username;
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.password = password;

            console.log("Running Create With Data", user)
            return Login.createUser(user);
        };

        // $scope.logOut = function() {
        //     return Login.logOut($rootScope.sessionUser);
        // };

        // Test Alert button
        $scope.alert = function() {
            console.log("You've hit the LoginCtrl alert button");
            console.log(ParseUser);
            console.log(Login);
        };

        $scope.makeAdmin = function() {
            console.log($rootScope.sessionUserName, "is requesting Admin Axx");
            console.log("Here's your Parse.User.current() object:", $rootScope.sessionUser);

            return Login.makeAdmin();
        };

    }]);
// console.log('Finished loading LoginCtrl');