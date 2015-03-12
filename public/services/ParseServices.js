// ---- Beta Test Code --- //
// This is test code to integrate Parse into Angular.
// Elements will be reusable in this mannor by allowing us
// to pass ParseServices as a dependency in any of our controllers
angular.module('ParseServices', [])
    .factory("ParseSDK", ['$state', '$rootScope', '$window', function($state, $rootScope, $window) {
        var parseFactory = {};

        parseFactory.createUser = function(userDetails) {

            var user = new Parse.User();

            var userDetailsLength = userDetails.length;

            // console.log("Received Parse Test User Data", "Attempting to Create Parse User");

            // Using Parses user.set() method to set the Users
            // login data before querying the server
            user.set("username", userDetails.username);
            console.log("Setting Parse.User " + userDetails.username);
            user.set("password", userDetails.password);
            console.log("Setting Parse.User " + userDetails.password);
            user.set("firstName", userDetails.firstName);
            console.log("Setting Parse.User " + userDetails.firstName);
            user.set("lastName", userDetails.lastName);
            console.log("Setting Parse.User " + userDetails.lastName);
            user.set("email", userDetails.email);
            console.log("Setting Parse.User " + userDetails.email);

            user.signUp(null, {
                success: function(user) {
                    console.log("Redirecting You To Home State");
                    $state.go('home.login');
                    // $rootScope.reloadWindow();
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });

        };

        parseFactory.login = function(username, password) {
            // Capture the length of the array
            // The last item in userDetailsLength array is the
            // most recent data from the user
            // Grab the username & password and send it
            // into a Parse.User.logIn function
            Parse.User.logIn(username, password, {
                success: function(user) {
                    // Do stuff after successful login.
                    console.log("Success! Parse has logged in the user: " + username);
                    // Reload Window To Update Scope
                    $rootScope.reloadWindow();
                    // console.log("Redirecting You To Home State");
                    // $state.go('home');
                },
                error: function(user, error) {
                    // The login failed. Check error to see why.
                    console.log(user,error);
                }
            });
        };

        parseFactory.logOut = function(sessionUser) {
            console.log("I heard your request to logout")
            
            $rootScope.ParseUser.logOut();
            console.log("User Logged Out");
            $rootScope.reloadWindow();

            // if ($rootScope.sessionUser) {
            //     $rootScope.ParseUser.logOut();
            //     console.log("User Logged Out");
            //     $rootScope.reloadWindow();
            // }
            // else {
            //     console.log("Please Login");
            //     $state.go('login');
            // }
        };

        parseFactory.makeAdmin = function() {
            if ($rootScope.sessionUser && $rootScope.techNinjaAdmin) {
                console.log("Making: " + $rootScope.techNinjaAdminName + " admin");
                console.log("Tech Ninja Admin variable is: ", $rootScope.techNinjaAdmin);
            }
            else {
                console.log("User: " + $rootScope.techNinjaAdminName + " is not an admin");
                console.log("Tech Ninja Admin variable is: ", $rootScope.techNinjaAdmin);
            }
        };
        
        parseFactory.parseObject = function() {
            console.log("I'm a Parse Object");
            // A complex subclass of Parse.Object
            var Monster = Parse.Object.extend("Monster", {
                // Instance methods
                hasSuperHumanStrength: function() {
                    return this.get("strength") > 18;
                },
                // Instance properties go in an initialize method
                initialize: function(attrs, options) {
                    this.sound = "Rawr";
                }
            }, {
                // Class methods
                spawn: function(strength, age) {
                    var monster = new Monster();
                    monster.set("strength", strength);
                    monster.set("age", age);

                    monster.save(null, {
                            success: function(monster) {
                                // Execute any logic that should take place after the object is saved.
                                console.log('New object created with objectId: ' + monster.id);
                            },
                            error: function(monster, error) {
                                // Execute any logic that should take place if the save fails.
                                // error is a Parse.Error with an error code and message.
                                console.log('Failed to create new object, with error code: ' + error.message);
                            }
                        })
                        .then(function(monster) {
                            // the object was saved successfully.
                            console.log("This is a chained method on the monster object -", "Monster Sound: " + monster.sound, "Monster ID: " + monster.id, "Monster Strength: " + monster._previousAttributes.strength, "Monster Updated At: " + monster.updatedAt);
                        }, function(error) {
                            // the save failed.
                            console.log("Error! Could not process object: ", error, error.name);
                        });
                    return monster;
                }
            });

            var raysMonster = Monster.spawn(5000, 50);
            console.log(raysMonster.get('strength')); 
            console.log(raysMonster.sound); 
            alert(raysMonster._previousAttributes.strength);
        };
        
        parseFactory.createMonster = function() {
            console.log("Future Feature");
        };

        return parseFactory;

    }]);
// console.log('Finished loading ParseServices Factory');