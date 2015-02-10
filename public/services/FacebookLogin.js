// ---- Beta Test Code --- //
// This is test code to integrate Parse into Angular.
// Elements will be reusable in this mannor by allowing us
// to pass ParseServices as a dependency in any of our controllers
angular.module('FacebookLogin', [])
    .factory("FBLogin", ['$rootScope', function($rootScope) {
        
        var FBLogin = {};
        
        // Check For Existing Email
        FBLogin.checkExistingEmail = function(email) {
            var myEmail = email;
            var query = new Parse.Query(Parse.User);
            query.exists("email");
            query.find({
                success: function(response) {
                    for (i = 0; i < response.length; i++) {
                        var object = response[i];
                        if (object.get("email") == myEmail) {
                            console.log("Email Already Exists - Linking Accounts");
                            return true;
                        }
                        else {
                            console.log("Email DOES NOT Exist");
                            return false;
                        }
                    }
                },
                error: function(response, error) {
                    console.log("Error");
                }
            });
        };
        
        // Link Email to Facebook Account
        FBLogin.linkFacebook = function(user) {
            if (!Parse.FacebookUtils.isLinked(user)) {
                Parse.FacebookUtils.link(user, null, {
                    success: function(user) {
                        console.log("Woohoo, user logged in with Facebook!");
                    },
                    error: function(user, error) {
                        console.log("User cancelled the Facebook login or did not fully authorize.");
                    }
                });
            }
        };
        
        // Unlink Email from Facebook 
        FBLogin.unlinkFacebook = function(user) {
            Parse.FacebookUtils.unlink(user, {
                success: function(user) {
                    alert("The user is no longer associated with their Facebook account.");
                }
            });
        };
        
        return FBLogin;

    }]);
// console.log('Finished loading FacebookLogin Service');