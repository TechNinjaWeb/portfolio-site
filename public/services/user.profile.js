angular.module('tnApp.services')
  .factory('UserProfile', [function() {
    var UserProfile = {};

    UserProfile.create = function(user) {

            var newUser = new Parse.User();

            newUser.set("username", (user.firstName + " " + user.lastName));
            newUser.set("password", user.pass);
            newUser.set("email", user.email);
            newUser.set("firstName", user.firstName);
            newUser.set("lastName", user.lastName);

            newUser.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    console.log("The user has successfully signed up. BASIC SIGNUP");
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        },

        UserProfile.login = function(user) {

            var username = user.username;
            // var email = user.email;
            var pass = user.pass;

            console.warn("user email and pass", username, pass);

            Parse.User.logIn(username, pass, {
                success: function(user) {
                    // Do stuff after successful login.
                    console.log("Successfully" + user.get('email') + " " + user.get('password'));

                },
                error: function(user, err) {
                    // The login failed. Check error to see why.
                    console.log("No Luck", user, err);
                    console.warn(user.get('email'));
                    console.warn(user.get('password'));
                }
            });
        },
        UserProfile.fbLogin = function() {
            Parse.FacebookUtils.logIn("user_likes,email,read_friendlists", {
                success: function(user) {
                    if (!user.existed()) {
                        setCurrentUser();
                        console.log("<------------------------------------>");
                        console.log("User signed up and logged in through Facebook!");
                    } else {
                        console.log("<------------------------------------>");
                        console.log("User logged in through Facebook!");
                    }
                },
                error: function(user, error) {
                    console.log("User cancelled the Facebook login or did not fully authorize.");
                }
            });
        },
        UserProfile.logout = function() {
            console.log("lougout function called");
            Parse.User.logOut();
        };
    return UserProfile;
}])