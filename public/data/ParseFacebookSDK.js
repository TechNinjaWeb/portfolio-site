// Angular has a .run(function(){}); method 
// that can be called to 'do stuff' or 
// initialize script at the beginning of
// the application load

// We'll be initializing a Parse Test Object
angular.module('tnApp')
    .run(function($rootScope) {

        // console.log('Bootstrapping ParseFBSDK');

        // window.fbAsyncInit = function() {
        //     Parse.FacebookUtils.init({ // this line replaces FB.init({
        //         appId: '1540392906202308',
        //         xfbml: true,
        //         version: 'v2.2'
        //     });
        //     // adminCheck();
        //     // Run code after the Facebook SDK is loaded.
        // };

        // (function(d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = "//connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

        // //@   ADMIN CHECK  @////////////////////////////////
        // $rootScope.adminCheck = function() {
        //     var user = getCurrentUser();
        //     var isAdmin = user.get("isAdmin");
        //     if (isAdmin === true) {
        //         console.log("Admin Access Granted");
        //         updateProfile(user);
        //         return true;
        //     }
        //     else {
        //         console.log("Admin Access DENIED");
        //         updateProfile(user);
        //         return false;
        //     }
        // };
        // console.log('Finished Bootstrapping ParseFBSDK');
    });