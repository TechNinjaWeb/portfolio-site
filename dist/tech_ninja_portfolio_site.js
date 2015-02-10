var app = angular.module('tnApp', ['ui.router', 'highcharts-ng']);;app.controller('AboutCtrl', function($scope) {
    $scope.alias = 'AboutCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";
    $scope.urls = [{
        sref: 'contact',
        url: '/contact',
        name: 'Contact Us'
    }, {
        sref: 'about',
        url: '/about',
        name: 'About Us'
    }, {
        sref: 'login',
        url: '/login',
        name: 'Login'
    }, {
        sref: 'support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }];
});;app.controller('AppCtrl', function($scope) {
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
});;app.controller('ContactCtrl', function($scope) {
    $scope.alias = 'ContactCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    if (document.getElementById('contact-page')) {
        var submitBtn = $('#submit');
        submitBtn.on('click', function(e) {
            console.log("Clicked");

            var formData = {
                companyName: $('#company-name').val(),
                currentWebsite: $('#curren-website').val(),
                designation: $('#designation').val(),
                firstName: $('#first-name').val(),
                lastName: $('#last-name').val(),
                phoneNumber: $('#phone').val(),
                mobileNumber: $('#mobile').val(),
                email: $('#email').val(),
                city: $('#city').val(),
                country: $('#country').val(),
                purpose: $('#purpose').val(),
                businessDescription: $('#business-description').val(),
                competitors: $('#competitors').val(),
                usp: $('#usp').val(),
                demographics: $('#target-demographics').val(),
                sitesEnjoyed: $('#sites-enjoyed').val(),
                sitesNotEnjoyed: $('#sites-not-enjoyed').val(),
                functionality: $('#functionality').val(),
                webManagement: $('#web-management').val(),
                keywordResearch: $('#keyword-research').val(),
                contentResearch: $('#content-research').val(),
                timeInvestment: $('#time-investment').val(),
                feedback: $('#feedback').val()
            }

            var DB = Parse.Object.extend('SiteContactForm');
            var saveForm = new DB();

            // SUBMIT FORM UPON VALIDATION
            if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.city || !formData.purpose) {
                console.warn("You've Missed Some info");
                return;
            } else {
                e.preventDefault();
                saveForm.save(formData).then(function(res) {
                    // console.log("Success!", res);
                    window.location.href = "../../index.html"
                })
            }
        })
    }
});;app.controller('CopyrightCtrl', function($scope) {

    $scope.alias = 'CopyrightCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.getLocation = function() {
        var location = window.location.pathname;
        return location;
    };

    // IMPLEMENT SUPPORT SECTION USER AUTHENTICATION
    // AT LATER TIME
    var userName = "Jeff Coleman";
    var user, icons;
    icons = "<i class='icon-ios'></i>",
        user = "<div id='support-admin'>Rahim: Admin" + icons + "</div>";

    // SUPPORT PAGE CHATBOX
    if (window.document.getElementById('support-page')) {
        var sendBtn = $('#send-btn');
        var message = $('#message');

        var chatWindow = window.document.getElementById('chat');
        var usersOnlineContainer = window.document.getElementById('users');
        var usersOnline = "<div class='user'>" + user + "</div>"

        var modalBtn = $("<a class='modal-btn' href='#' data-toggle='modal' data-target='#user-modal'></a>");

        modalBtn.on('click', function(e) {
            var userName = e.target.innerText;

            var modalTitle = $('.modal-title');
            var modalBody = $('.modal-body');
            var modalFooter = $('.modal-footer');

            modalTitle.html(userName);
            modalBody.html("<div>USER FEATURES COMMING SOON!</div>")

            // console.warn("Title", modalTitle, "\nBody", modalBody, "\nFooter", modalFooter);
        })

        $(modalBtn).append(usersOnline);
        $(usersOnlineContainer).append(modalBtn)

        message.keyup(function(e) {
            if (e.keyCode == 13) {
                console.log("Enter Key Detected");
                sendBtn.click();
                // window.document.getElementById('message').scrollTop = window.document.getElementById('message').scrollHeight;
            }
        });

        sendBtn.on('click', function() {
            var message = $('#message').val();
            var bit, supportUserName;

            if (message === null || message === undefined || message === "") {
                console.warn("Please Enter a Message");
                return;
            } else {
                supportUserName = userName; // FAKE USER NAME
                supportUserName = supportUserName.toLowerCase().capitalize();
                bit = "<div class='" + supportUserName + "bit'>" + supportUserName + ": " + message + "</div>";

                $('#chat').append(bit);
                $('#message').val('');
                $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
                $('#message').focus();
            }
        });
        // console.log("Chat Window Height", window.document.getElementById('chat').style)
    }
});;app.controller('FooterCtrl', function($scope) {
    $scope.alias = 'FooterCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    // FOOTER CONTACT FORM
    var footerContactFormBtn = $('#footer-contact-us-submit');
    footerContactFormBtn.on('click', function(e){

        var footerContactForm = $('#footer-contact-us-form');
        var footerContactName = $('#footer-contact-us-name');
        var footerContactEmail = $('#footer-contact-us-email');
        var footerContactMessage = $('#footer-contact-us-message');

        var DB = Parse.Object.extend('SiteContactForm');
        var saveForm = new DB();
        
        // SUBMIT FORM UPON VALIDATION
        if ( !footerContactName.val() || !footerContactEmail.val() || !footerContactMessage.val() ) {
            console.warn("You've Missed Some info");
            // e.preventDefault();
            return;
        } else {
            e.preventDefault();
            saveForm.save({
                leadName: footerContactName.val(),
                leadEmail: footerContactEmail.val(),
                message: footerContactMessage.val()
            }).then(function(res){
                console.log("Response", res);
                window.location.reload();
            })
        }
    })


});;app.controller('HomeCtrl', function($scope) {
    $scope.alias = 'HomeCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    /*
        Basic workflow example
    */

    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    
    wow.init();

    $('#reports-point-heading').on('click', function(e){
        console.log("Clicked");
    })






    $scope.articles = [{
        title: 'article1',
        body: 'body of article1'
    }, {
        title: 'article2',
        body: 'body of article2'
    }, {
        title: 'article3',
        body: 'body of article3'
    }];

    $scope.atNewArticle = function(article) {
        //i only execute when transitioning back and forth between articles
        console.log(article);
    };


    // HOMEPAGE CONTENT

    // TRUNCATE TESTIMONY QUOTES
    var testimonial = $('.testimony-slide');
    var elipsis = 150;
    testimonial.each(function(pos, item) {
        item.innerHTML = item.innerHTML.substr(0, elipsis) + "...";
    })

    // PORTFOLIO SECTION
    var portfolioLeft = $(document.getElementById('portfolio-left'));
    var portfolioRight = $(document.getElementById('portfolio-right'));
    // EVEN HEIGHT FOR BOTH SECTIONS
    portfolioLeft.css('height', portfolioRight.css('height'));

    $('#portfolio-slideshow').flexslider({
        animation: "fade",
        animationSpeed: 1000,
        slideshowSpeed: 4000,
        touch: true,
        itemWidth: 200,
        itemMargin: 1,
        minItems: 3,
        maxItems: 9,
        move: 0,
        useCSS: true
    });
    $('#testimony-slideshow').flexslider({
        animation: "slide",
        animationSpeed: 1000,
        slideshowSpeed: 5000,
        touch: true,
        itemWidth: 600,
        useCSS: true,
        controlNav: true,
        maxItems: 1
    });

    // REPORT SECTION CHARTS
    var barOptions = {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            },
            marginTop: 80,
            marginRight: 40
        },

        title: {
            text: "Reports For Days Son!"
        },

        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: "Hover Over The Graph!"
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },

        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    }

    $scope.barOptions = barOptions;


    $('#reports-chart').highcharts(barOptions);


});;app.controller('NavCtrl', function($scope) {
    $scope.alias = 'NavCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.urls = [{
        sref: 'about',
        url: '/about',
        name: 'About'
    }, {
        sref: 'portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }, {
        sref: 'support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'contact',
        url: '/contact',
        name: 'Contact'
    }];

    // LOGIN
    var loginBtn = $('#signin');
    var createAccount = $('.not-a-member');

    loginBtn.on('click', function() {
        alert('Login Comming Soon!')
    });
    createAccount.on('click', function(e) {
        alert("Creat Account Comming Soon!")
    })
});;// -- See AppCtrl Comment for usage description -- //
app.controller('PortfolioCtrl', function($scope) {
    $scope.alias = 'PortfolioCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    if (window.document.getElementById('portfolio-page')) {
        
        // PROFILE PAGE MODAL
        $('.modal-btn').on('click', function(e) {
            // console.log("Clicked", e);
            e.preventDefault();

            var modalTitle = $('.modal-title');
            var modalBody = $('.modal-body');
            var modalFooter = $('.modal-footer');

            var img = new Image();
            var imageTitle = e.target.attributes.alt.value;

            $(img).addClass('img-responsive');
            img.onload = function() { /*console.log("I'm Loaded");*/ };
            img.src = e.target.src;

            modalTitle.html(imageTitle);
            modalBody.html(img);
            modalFooter.html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");

            // console.log(modalBody)
        });
    }
});;app.controller('SupportCtrl', function($scope, $rootScope) {

    $scope.alias = 'SupportCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

});;// Angular has a .run(function(){}); method 
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
    });;angular.module('tnApp')
    .run(function($rootScope, $window, $timeout) {
        // DETECT USERS BROWSER
        var userAgent;
        if (window.navigator.userAgent.indexOf('Safari') != -1 && window.navigator.userAgent.indexOf('Chrome') == -1) {
            userAgent = "safari";
        } else if (window.navigator.userAgent.indexOf('Firefox') != -1 && window.navigator.userAgent.indexOf('Safari') == -1) {
            userAgent = "firefox";
        } else if (window.navigator.userAgent.indexOf('Chrome') != -1 && window.navigator.userAgent.indexOf('Firefox') == -1) {
            userAgent = "chrome";
        } else {
            userAgent = "unknown";
        }

        var browser = userAgent;
        $rootScope.browser = browser;

        console.log("User Agent Is:" + userAgent);
        $rootScope.userAgent = userAgent;

        // var page = window.document.getElementsByClassName('content page')[0];
        // console.log("Page Div",page);
        // page.setAttribute('browser', userAgent);
        // var browser = page.attributes.browser;

        // console.log('Bootstrapping ParseSDK Script');
        // Initialize Parse
        Parse.initialize("XFukCIc6giByefQZjvKjvRQdyaID0OqseAdLYGE4", "TfVbMHnjFPVGfUIFCVCeVr3SWgrgEr5uoxrBSSvz");


        // console.log('Parse bootstrap complete');

        // console.log('Initializing FBLogin ...');

        // window.fbAsyncInit = function() {
        //     console.log('FB Init has been called');
        //     Parse.FacebookUtils.init({ // this line replaces FB.init({
        //         appId: '710919952311309',
        //         xfbml: true,
        //         version: 'v2.2'
        //     });

        //     // Run code after the Facebook SDK is loaded.
        //     // Run check to see if current user is Admin
        //     $rootScope.checkAdmin();

        //     $rootScope.facebookLogin = function() {

        //         Parse.FacebookUtils.logIn("public_profile,user_likes,email,read_friendlists,user_location", {
        //             success: function(user) {
        //                 if (!user.existed()) {
        //                     console.log("User signed up and logged in through Facebook!");
        //                     $rootScope.collectFacebookData(user);
        //                     console.log(user, "also running FB User Details Save");

        //                     console.log($rootScope.sessionUser); // Parse User Current Object

        //                     console.log("User Details Saved");

        //                     $rootScope.reloadWindow();
        //                 }
        //                 else {
        //                     console.log("User logged in through Facebook!");
        //                     // Recapture User Data If User Is Already in Parse DB
        //                     $rootScope.collectFacebookData(user);

        //                     console.log("THIS IS USER OBJECT", user);

        //                     $rootScope.reloadWindow();
        //                 }
        //             },
        //             error: function(user, error) {
        //                 alert("User cancelled the Facebook login or did not fully authorize.");
        //             }
        //         });
        //     };
        // };

        // (function(d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = "//connect.facebook.net/en_US/sdk.js" || "./vendors/facebook/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

        $rootScope.createRoles = function() {
            // Instantiate Parse Role Authentication Object
            var accountRole = new Parse.ACL();
            // Set this role to have Public Read Axx
            accountRole.setPublicReadAccess(true);
            // Set specific axx rules for individual roles
            accountRole.setRoleWriteAccess("Admin", true);
            // console.log("admin role write access has been set");

            // console.log("Heres what the accountRole object looks like:", accountRole);
            // Define and Instantiate the Roles, and
            // pass the ACL Instance into each Parse.Role(RoleName, ACL);
            var userRole = new Parse.Role("User", accountRole);
            var adminRole = new Parse.Role("Admin", accountRole);
            // Set Up Role Objects and Parameters
            var RoleObject = Parse.Object.extend('_Role');
            // Set Query for User Role
            var userRoleQuery = new Parse.Query(RoleObject);
            // Set Query for Admin Role
            var adminRoleQuery = new Parse.Query(RoleObject);
            // Set Main Query Object
            var queryRoleObject = new Parse.Query.or(userRoleQuery, adminRoleQuery);
            // Define the User Role Query
            userRoleQuery.equalTo("name", "User");
            // Define the Admin Role Query
            adminRoleQuery.equalTo("name", "Admin");

            // Create Object for individual Role Save Functions
            var saveUsers = {
                user: function() {
                    console.log(saveUsers);
                    // Save User Role
                    userRole.save(null, {
                        success: function(userRole) {
                            // var userRoleString = JSON.stringify(userRole, null, 4);
                            // console.log('userRoleString Object output a string: ', userRoleString);
                            console.log('Successfully saved ', userRole);
                        },
                        error: function(userRole, err) {
                            var userRoleString = JSON.stringify(userRole, null, 4);
                            console.log('userRoleString Object output a string: ', userRoleString);
                            console.log("This Object created an Error ", userRole);
                            console.log("It's Error is ", err);
                            console.log("The Errors name is ", err.name);
                        }
                    }).then(function(userRole, err) {
                        console.log("Testing Chained Functions", "Nothing to See Here ...");
                    });
                    console.log("User Role Saved");
                },
                admin: function() {
                    // Save Admin Role
                    adminRole.save(null, {
                        success: function(adminRole) {
                            // var adminRoleString = JSON.stringify(adminRole, null, 4);
                            // console.log('adminRoleString Object output a string: ', adminRoleString);
                            console.log('Successfully saved ', adminRole);
                        },
                        error: function(adminRole, err) {
                            var adminRoleString = JSON.stringify(adminRole, null, 4);
                            console.log('adminRoleString Object output a string: ', adminRoleString);
                            console.log("This Object created an Error ", adminRole);
                            console.log("It's Error is ", err);
                            console.log("The Errors name is ", err.name);
                        }
                    });
                    console.log("Admin Role Saved");
                }
            };

            // Run the Query and return the results
            queryRoleObject.find({
                success: function(results) {
                    var user = false;
                    var admin = false;
                    console.log("Successfully retrieved " + results.length + " Roles In Database.");
                    // Do something with the returned Parse.Object values
                    for (var i = 0; i < results.length; i++) {
                        var object = results[i];

                        var name = object.get('name');
                        var id = object.id;
                        var date = object.updatedAt;

                        console.log("Found Row in Database: ", {
                            'name': name
                        }, {
                            'id': id
                        }, {
                            'date': date
                        });

                        // Set the value true if an expected Role exists
                        if (name === "Admin") {
                            admin = true;
                        } else if (name === "User") {
                            user = true;
                        }
                    }
                    if (results.length == 0) {
                        // Save the Role Data Here
                        // This will only have to be called once ever
                        saveUsers.user();
                        saveUsers.admin();
                        console.log("Role Data Has Been Created and Saved");
                    } else if (results.length != 0 && results.length <= 1) {
                        console.log("Results are here, but are not greater than 1");
                        console.log("Admin Role present, ", admin);
                        console.log("User Role present, ", user);
                        if (!admin) {
                            saveUsers.admin();
                        } else if (!user) {
                            saveUsers.user();
                        }
                    } else {
                        console.log("No Role Data To Be Saved as a Result of this Find in the Database");
                        console.log("Moving along as planned ...");
                    }
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        };

        $rootScope.checkAdmin = function() {
            console.log("Checking Admin Credentials");
            // FB ID of Administrator
            var techNinjaAdminID = "587154828096319";
            // Extend the _User Class Object
            // var UserClass = Parse.Object.extend("User");
            // Create a Query using the User Class Variable
            var query = new Parse.Query($rootScope.Users);
            query.equalTo("email", "phreelyfe@gmail.com");

            if ($rootScope.sessionUserName === "Phree Lyfe") {
                query.find({
                    success: function(results) {
                        console.log("Successfully retrieved " + results.length + " Admin Username.");
                        // Do something with the returned Parse.Object values
                        for (var i = 0; i < results.length; i++) {
                            var object = results[i];
                            // console.log("Testing AuthData Raw Object Info", object.get('authData'));

                            // Get The authData object and convert it into a JSON String
                            var fbAuthDataString = JSON.stringify(object.get('authData'));
                            // Convert the Stringified Object into a JSON object
                            var fbAuthDataObject = JSON.parse(fbAuthDataString);

                            // Console Log the Two Strings to Compare
                            // console.log("This is the parsed fbAuthDataObject:", fbAuthDataObject.facebook.id, "This is the techNinjaAdminID:", techNinjaAdminID);

                            if (fbAuthDataObject.facebook.id === techNinjaAdminID) {
                                console.log($rootScope.techNinjaAdminName + " is the True Admin, We matched your facebook authId with our Records");
                            } else if (fbAuthDataObject.facebook.id === null || fbAuthDataObject.facebook.id === "") {
                                console.log("Facebook AuthData Empty or Null");
                            } else {
                                console.log("This is not an admin user");
                            }
                        }
                    },
                    error: function(error) {
                        alert("Error: " + error.code + " " + error.message);
                    }
                });
            } else {
                console.log("Hey! You're Not Phree Lyfe.", "... Treating You like the filth you are");
            }
        };

        $rootScope.reloadWindow = function() {
            $timeout(function() {
                console.log('Window Reloaded');
                $window.location.reload();
            }, 200);
            console.log('Invoking Timeout Instead');
        };

        //@ FACEBOOK DATA SAVE  @////////////////////////////////
        $rootScope.collectFacebookData = function(user) {
            console.log("Capturing User Data from Facebook");

            // Set Facebook User Data and Save It To Parse
            FB.api('/me', function(response) {
                var object = response;
                console.log('Your name is ' + object.name);
                user.set("username", object.name);
                user.set("firstName", object.first_name);
                user.set("lastName", object.last_name);
                user.set("email", object.email);
                user.save();
            });

            FB.api('/me/picture', {
                "type": "normal"
            }, function(response) {
                var object = response;
                console.log("profile Pic Located at: " + object.data.url);
                user.set("profilePic", object.data.url);
                user.save();
            });

        };

        // Define and Extend the Basic Parse User
        var User = Parse.User.extend({});
        // Create a $rootScope shortcut
        $rootScope.ParseUser = User;
        // Loading Parse.User.current() into rootScope
        $rootScope.sessionUser = /* Parse.User.current() */ "587154828096319";

        if ($rootScope.sessionUser || true) {
            $rootScope.sessionUserName = /* Parse.User.current().get('username') || */ "Phree Lyfe";

            console.log("sessionUser Logged In has triggered attempted to Create Roles");
            $rootScope.createRoles();

        }

        // Get Username and load it into a variable
        if ($rootScope.sessionUser || true) {
            $rootScope.currentUsername = /* Parse.User.current().get('username') || */ "Phree Lyfe";
            $rootScope.sessionUserId = $rootScope.sessionUser.id;
            console.log("Current Username Is: " + $rootScope.currentUsername + " and your ID is: " + $rootScope.sessionUserId);
        }

        // Check For Administrator Account
        // and set it to Admin
        if ($rootScope.currentUsername == "Phree Lyfe") {
            $rootScope.techNinjaAdminName = $rootScope.currentUsername;
            console.log("This will make " + $rootScope.techNinjaAdminName + " an Admin. Function coming soon!");

            $rootScope.techNinjaAdmin = true;
            console.log("techNinjaAdmin variable set to True");
        } else {
            $rootScope.techNinjaAdmin = false;
            console.log("techNinjaAdmin variable set to False");
        }

        // Declare Database Model Variables
        var ParseUserClass = Parse.Object.extend("User");
        var ParsePostClass = Parse.Object.extend("Post");
        var ParseCommentClass = Parse.Object.extend("Comment");
        var ParseRoleObject = Parse.Object.extend('_Role');

        // $rootScope.Users = ParseUserClass;
        // $rootScope.Posts = ParsePostClass;
        // $rootScope.Comment = ParseCommentClass;
        // $rootScope.RoleObject = ParseRoleObject;

        // // All Users List Query
        // var UserListQuery = new Parse.Query($rootScope.Users)

        // //Create the User Post Query and restraints
        // var postQuery = new Parse.Query($rootScope.Posts);

        // $rootScope.postQuery = postQuery;        
        // $rootScope.postQuery.exists('content');


        // // Create the User Post Collection
        // var currentUserCollection = Parse.Collection.extend({
        //     model: $rootScope.Posts,
        //     query: postQuery
        // });

        // // Create $rootScope shortcuts
        // $rootScope.userPostCollection;


    });
// console.log('Finished loading ParseSDK Script');;// Angular has a .run(function(){}); method 
// that can be called to 'do stuff' or 
// initialize script at the beginning of
// the application load

// We'll be initializing a Parse Test Object
angular.module('tnApp.parseModel', [])
    .factory('UserList', ['$rootScope', function($rootScope) {
        var userList = {};

        // Create empty variables for each new Post and Comment
        var newPost, newComment;

        userList.createPost = function(postTitle, postContent) {
            newPost = new $rootScope.Posts;
            console.log(newPost);
            // Set Attributes of new Post
            newPost.set("title", postTitle);
            newPost.set("content", postContent);
            newPost.set("parent", $rootScope.sessionUser);
            // This will save both newPost and myComment
            newPost.save(null, {
                success: function(newPost) {
                    console.log("here's the newPost Object: ", newPost);
                },
                error: function(newPost, err) {
                    console.log("newPost caused an error", newPost, err);
                }
            });
            // console.log(newPost.id);
        };

        userList.createComment = function(commentContent) {
            newComment = new $rootScope.Comment();
            // Set Attributes of new Post
            if (newPost) {
                newComment.set("content", commentContent);
                // Add the post as a value in the comment
                newComment.set("parent", newPost);
                // This will save both newPost and newComment
                newComment.save(null, {
                    success: function(newComment) {
                        console.log('Made it into the success function!', newComment);
                        for (var i = 0; i < newComment.length; i++) {}
                    },
                    error: function(newComment, err) {
                        console.log("newComment caused an error", newComment, err);
                    }
                });
            }
            else {
                console.log("You Must First Create a Post and then add a Comment");
            }
            console.log("here's the newComment Object: ", newComment);
        };

        userList.usersInGoalClass = function() {
            console.log($rootScope.sessionUser.get('email'));


        };


        return userList;
    }]);;app.directive('scrollableContainer', function($window, $document) {
    return {
        link: function(scope, element, attrs) {
            angular.element($document).on('scroll', function() {
                var children = element.children();
                var $leftChild;
                for (var i = 0; i < children.length; i++) {
                    var $child = $(children[i]);
                    var childTop = $child.offset().top;
                    var docScrollTop = $document.scrollTop();
                    var scope = $child.scope();
                    if (childTop - docScrollTop < 0) {
                        if (!scope._left) {
                            scope._left = true;
                            $leftChild = $child;
                        }
                    } else {
                        delete scope._left;
                    }
                }
                if ($leftChild) {
                    $leftChild.scope().$eval( $leftChild.attr('scrollable-item') );
                }
            });
        }
    };
});;;// STRING PROTOTYPE
String.prototype.capitalize = function() {
    return this.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
};;app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/html/home.html",
                    controller: "HomeCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/html/about.html",
                    controller: "AboutCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/html/contact.html",
                    controller: "ContactCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('portfolio', {
            url: '/portfolio',
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/html/portfolio.html",
                    controller: "PortfolioCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('support', {
            url: '/support',
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/html/support.html",
                    controller: "SupportCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});;// ---- Beta Test Code --- //
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
// console.log('Finished loading FacebookLogin Service');;// Angular has a .run(function(){}); method 
// that can be called to 'do stuff' or 
// initialize script at the beginning of
// the application load

// We'll be initializing a Parse Test Object
angular.module('ParseServices')
    .factory('UsersPosts', ['$rootScope', function($rootScope) {
        var userPosts = {};
        
        var rObject;
        var postID;
        var parentID;
        var postTitle;
        var postContent;
        
        var userPostCollection = [];
        // Create empty variables for each new Post and Comment
        var newPost, newComment;
        
        userPosts.getMyPosts = function(userPosts) {
            
            console.log("Pressed Get Posts Button");
            
            $rootScope.postQuery.find({
                success: function(res) {
        
                    for (i = 0; res.length - 1 >= i; i++) {
                        rObject = res[i];
                        postID = res[i].id;
                        parentID = res[i]["_serverData"]["parent"].id;
                        postTitle = res[i]["_serverData"]["title"];
                        postContent = res[i]["_serverData"]["content"];
        
                        console.log("------------- Here is the $rootScope.postQuery Response  -------------");
                        console.log("Post ID", postID);
                        console.log("Post Title: " + postTitle);
                        console.log("Post Content: " + postContent);
                        console.log("Parent ID:", parentID);
                        // console.log("Post ID", rObject);
                        console.log("------------- End of Resonse  -------------");
        
                        if (parentID === $rootScope.sessionUserId) {
                            var fetchArray = [rObject, postID, parentID];
        
                            userPostCollection.push(fetchArray[0]);
                            console.log("Post saved to userPostCollection");
                        }
                        else {
                            console.log("rejected object");
                        }
        
                        var objectData = JSON.stringify(userPostCollection);
                        var postData = JSON.parse(objectData);
                        $rootScope.userPostCollection = postData;
                        
                        return userPostCollection;
                    }
        
                },
                error: function(err, obj) {
                    console.log(err, obj);
                }
            });
        };

        
        console.warn("Here's the User Posts Collection  ------------->", $rootScope.userPostCollection);
        
        
        return userPosts;
    }]);;// ---- Beta Test Code --- //
// This is test code to integrate Parse into Angular.
// Elements will be reusable in this mannor by allowing us
// to pass ParseServices as a dependency in any of our controllers
angular.module('ParseServices', [])
    .factory("ParseSDK", ['$state', '$rootScope', '$window', '$route', function($state, $rootScope, $window, $route) {
        var parseFactory = {};

        parseFactory.createUser = function(userDetails) {

            var user = new Parse.User();

            var userDetailsLength = userDetails.length;

            // console.log("Received Parse Test User Data", "Attempting to Create Parse User");

            // Using Parses user.set() method to set the Users
            // login data before querying the server
            user.set("username", userDetails[userDetailsLength - 1].username);
            console.log("Setting Parse.User " + userDetails[userDetailsLength - 1].username);
            user.set("password", userDetails[userDetailsLength - 1].password);
            console.log("Setting Parse.User " + userDetails[userDetailsLength - 1].password);
            user.set("firstName", userDetails[userDetailsLength - 1].firstName);
            console.log("Setting Parse.User " + userDetails[userDetailsLength - 1].firstName);
            user.set("lastName", userDetails[userDetailsLength - 1].lastName);
            console.log("Setting Parse.User " + userDetails[userDetailsLength - 1].lastName);
            user.set("email", userDetails[userDetailsLength - 1].email);
            console.log("Setting Parse.User " + userDetails[userDetailsLength - 1].email);

            user.signUp(null, {
                success: function(user) {
                    console.log("Redirecting You To Home State");
                    $state.go('home');
                    // $rootScope.reloadWindow();
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });

        };

        parseFactory.login = function(userDetails) {
            // Capture the length of the array
            var userDetailsLength = userDetails.length;
            // The last item in userDetailsLength array is the
            // most recent data from the user
            // Grab the username & password and send it
            // into a Parse.User.logIn function
            Parse.User.logIn(userDetails[userDetailsLength - 1].username, userDetails[userDetailsLength - 1].password, {
                success: function(user) {
                    // Do stuff after successful login.
                    console.log("Success! Parse has logged in the user: " + userDetails[userDetailsLength - 1].username);
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
            if ($rootScope.sessionUser) {
                $rootScope.ParseUser.logOut();
                console.log("User Logged Out");
                $rootScope.reloadWindow();
            }
            else {
                console.log("Please Login");
                $state.go('login');
            }
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
// console.log('Finished loading ParseServices Factory');;/*1423527311,,JIT Construction: v1594576,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {window.FB || (function(window) {
var self = window, document = window.document;
var undefined = void 0;
var setTimeout = window.setTimeout, setInterval = window.setInterval,clearTimeout = window.clearTimeout,clearInterval = window.clearInterval;var __DEV__ = 0;
function emptyFunction() {};
var __w, __t;
__t=function(a){return a[0];};__w=function(a){return a;};
var require,__d;(function(a){var b={},c={},d=['global','require','requireDynamic','requireLazy','module','exports'];require=function(e,f){if(c.hasOwnProperty(e))return c[e];if(!b.hasOwnProperty(e)){if(f)return null;throw new Error('Module '+e+' has not been defined');}var g=b[e],h=g.deps,i=g.factory.length,j,k=[];for(var l=0;l<i;l++){switch(h[l]){case 'module':j=g;break;case 'exports':j=g.exports;break;case 'global':j=a;break;case 'require':j=require;break;case 'requireDynamic':j=require;break;case 'requireLazy':j=null;break;default:j=require.call(null,h[l]);}k.push(j);}g.factory.apply(a,k);c[e]=g.exports;return g.exports;};__d=function(e,f,g,h){if(typeof g=='function'){b[e]={factory:g,deps:d.concat(f),exports:{}};if(h===3)require.call(null,e);}else c[e]=g;};})(this);
__d("ES5ArrayPrototype",[],function(a,b,c,d,e,f){var g={};g.map=function(h,i){if(typeof h!='function')throw new TypeError();var j,k=this.length,l=new Array(k);for(j=0;j<k;++j)if(j in this)l[j]=h.call(i,this[j],j,this);return l;};g.forEach=function(h,i){g.map.call(this,h,i);};g.filter=function(h,i){if(typeof h!='function')throw new TypeError();var j,k,l=this.length,m=[];for(j=0;j<l;++j)if(j in this){k=this[j];if(h.call(i,k,j,this))m.push(k);}return m;};g.every=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(!h.call(i,j[l],l,j))return false;return true;};g.some=function(h,i){if(typeof h!='function')throw new TypeError();var j=new Object(this),k=j.length;for(var l=0;l<k;l++)if(l in j)if(h.call(i,j[l],l,j))return true;return false;};g.indexOf=function(h,i){var j=this.length;i|=0;if(i<0)i+=j;for(;i<j;i++)if(i in this&&this[i]===h)return i;return -1;};e.exports=g;},null);
__d("ES5FunctionPrototype",[],function(a,b,c,d,e,f){var g={};g.bind=function(h){if(typeof this!='function')throw new TypeError('Bind must be called on a function');var i=this,j=Array.prototype.slice.call(arguments,1);function k(){return i.apply(h,j.concat(Array.prototype.slice.call(arguments)));}k.displayName='bound:'+(i.displayName||i.name||'(?)');k.toString=function l(){return 'bound: '+i;};return k;};e.exports=g;},null);
__d("ES5StringPrototype",[],function(a,b,c,d,e,f){var g={};g.trim=function(){if(this==null)throw new TypeError('String.prototype.trim called on null or undefined');return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};g.startsWith=function(h){var i=String(this);if(this==null)throw new TypeError('String.prototype.startsWith called on null or undefined');var j=arguments.length>1?Number(arguments[1]):0;if(isNaN(j))j=0;var k=Math.min(Math.max(j,0),i.length);return i.indexOf(String(h),j)==k;};g.endsWith=function(h){var i=String(this);if(this==null)throw new TypeError('String.prototype.endsWith called on null or undefined');var j=i.length,k=String(h),l=arguments.length>1?Number(arguments[1]):j;if(isNaN(l))l=0;var m=Math.min(Math.max(l,0),j),n=m-k.length;if(n<0)return false;return i.lastIndexOf(k,n)==n;};g.contains=function(h){if(this==null)throw new TypeError('String.prototype.contains called on null or undefined');var i=String(this),j=arguments.length>1?Number(arguments[1]):0;if(isNaN(j))j=0;return i.indexOf(String(h),j)!=-1;};g.repeat=function(h){if(this==null)throw new TypeError('String.prototype.repeat called on null or undefined');var i=String(this),j=h?Number(h):0;if(isNaN(j))j=0;if(j<0||j===Infinity)throw RangeError();if(j===1)return i;if(j===0)return '';var k='';while(j){if(j&1)k+=i;if((j>>=1))i+=i;}return k;};e.exports=g;},null);
__d("ES5Array",[],function(a,b,c,d,e,f){var g={};g.isArray=function(h){return Object.prototype.toString.call(h)=='[object Array]';};e.exports=g;},null);
__d("ie8DontEnum",[],function(a,b,c,d,e,f){var g=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','prototypeIsEnumerable','constructor'],h=({}).hasOwnProperty,i=function(){};if(({toString:true}).propertyIsEnumerable('toString'))i=function(j,k){for(var l=0;l<g.length;l++){var m=g[l];if(h.call(j,m))k(m);}};e.exports=i;},null);
__d("ES5Object",["ie8DontEnum"],function(a,b,c,d,e,f,g){var h=({}).hasOwnProperty,i={};function j(){}i.create=function(k){var l=typeof k;if(l!='object'&&l!='function')throw new TypeError('Object prototype may only be a Object or null');j.prototype=k;return new j();};i.keys=function(k){var l=typeof k;if(l!='object'&&l!='function'||k===null)throw new TypeError('Object.keys called on non-object');var m=[];for(var n in k)if(h.call(k,n))m.push(n);g(k,function(o){return m.push(o);});return m;};e.exports=i;},null);
__d("ES5Date",[],function(a,b,c,d,e,f){var g={};g.now=function(){return new Date().getTime();};e.exports=g;},null);
/**
 * @providesModule JSON3
 * @preserve-header
 *
 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
 */__d("JSON3",[],function(a,b,c,d,e,f){(function(){var g={}.toString,h,i,j,k=e.exports={},l='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba=new Date(-3509827334573292),ca,da,ea;try{ba=ba.getUTCFullYear()==-109252&&ba.getUTCMonth()===0&&ba.getUTCDate()==1&&ba.getUTCHours()==10&&ba.getUTCMinutes()==37&&ba.getUTCSeconds()==6&&ba.getUTCMilliseconds()==708;}catch(fa){}if(!ba){ca=Math.floor;da=[0,31,59,90,120,151,181,212,243,273,304,334];ea=function(ga,ha){return da[ha]+365*(ga-1970)+ca((ga-1969+(ha=+(ha>1)))/4)-ca((ga-1901+ha)/100)+ca((ga-1601+ha)/400);};}if(typeof JSON=="object"&&JSON){k.stringify=JSON.stringify;k.parse=JSON.parse;}if((m=typeof k.stringify=="function"&&!ea)){(ba=function(){return 1;}).toJSON=ba;try{m=k.stringify(0)==="0"&&k.stringify(new Number())==="0"&&k.stringify(new String())=='""'&&k.stringify(g)===j&&k.stringify(j)===j&&k.stringify()===j&&k.stringify(ba)==="1"&&k.stringify([ba])=="[1]"&&k.stringify([j])=="[null]"&&k.stringify(null)=="null"&&k.stringify([j,g,null])=="[null,null,null]"&&k.stringify({result:[ba,true,false,null,"\0\b\n\f\r\t"]})==l&&k.stringify(null,ba)==="1"&&k.stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&k.stringify(new Date(-8.64e+15))=='"-271821-04-20T00:00:00.000Z"'&&k.stringify(new Date(8.64e+15))=='"+275760-09-13T00:00:00.000Z"'&&k.stringify(new Date(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&k.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(fa){m=false;}}if(typeof k.parse=="function")try{if(k.parse("0")===0&&!k.parse(false)){ba=k.parse(l);if((r=ba.A.length==5&&ba.A[0]==1)){try{r=!k.parse('"\t"');}catch(fa){}if(r)try{r=k.parse("01")!=1;}catch(fa){}}}}catch(fa){r=false;}ba=l=null;if(!m||!r){if(!(h={}.hasOwnProperty))h=function(ga){var ha={},ia;if((ha.__proto__=null,ha.__proto__={toString:1},ha).toString!=g){h=function(ja){var ka=this.__proto__,la=ja in (this.__proto__=null,this);this.__proto__=ka;return la;};}else{ia=ha.constructor;h=function(ja){var ka=(this.constructor||ia).prototype;return ja in this&&!(ja in ka&&this[ja]===ka[ja]);};}ha=null;return h.call(this,ga);};i=function(ga,ha){var ia=0,ja,ka,la,ma;(ja=function(){this.valueOf=0;}).prototype.valueOf=0;ka=new ja();for(la in ka)if(h.call(ka,la))ia++;ja=ka=null;if(!ia){ka=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa))oa(qa);for(ra=ka.length;qa=ka[--ra];h.call(na,qa)&&oa(qa));};}else if(ia==2){ma=function(na,oa){var pa={},qa=g.call(na)=="[object Function]",ra;for(ra in na)if(!(qa&&ra=="prototype")&&!h.call(pa,ra)&&(pa[ra]=1)&&h.call(na,ra))oa(ra);};}else ma=function(na,oa){var pa=g.call(na)=="[object Function]",qa,ra;for(qa in na)if(!(pa&&qa=="prototype")&&h.call(na,qa)&&!(ra=qa==="constructor"))oa(qa);if(ra||h.call(na,(qa="constructor")))oa(qa);};return ma(ga,ha);};if(!m){n={"\\":"\\\\",'"':'\\"',"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};o=function(ga,ha){return ("000000"+(ha||0)).slice(-ga);};p=function(ga){var ha='"',ia=0,ja;for(;ja=ga.charAt(ia);ia++)ha+='\\"\b\f\n\r\t'.indexOf(ja)>-1?n[ja]:ja<" "?"\\u00"+o(2,ja.charCodeAt(0).toString(16)):ja;return ha+'"';};q=function(ga,ha,ia,ja,ka,la,ma){var na=ha[ga],oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb;if(typeof na=="object"&&na){oa=g.call(na);if(oa=="[object Date]"&&!h.call(na,"toJSON")){if(na>-1/0&&na<1/0){if(ea){ra=ca(na/86400000);for(pa=ca(ra/365.2425)+1970-1;ea(pa+1,0)<=ra;pa++);for(qa=ca((ra-ea(pa,0))/30.42);ea(pa,qa+1)<=ra;qa++);ra=1+ra-ea(pa,qa);sa=(na%86400000+86400000)%86400000;ta=ca(sa/3600000)%24;ua=ca(sa/60000)%60;va=ca(sa/1000)%60;wa=sa%1000;}else{pa=na.getUTCFullYear();qa=na.getUTCMonth();ra=na.getUTCDate();ta=na.getUTCHours();ua=na.getUTCMinutes();va=na.getUTCSeconds();wa=na.getUTCMilliseconds();}na=(pa<=0||pa>=10000?(pa<0?"-":"+")+o(6,pa<0?-pa:pa):o(4,pa))+"-"+o(2,qa+1)+"-"+o(2,ra)+"T"+o(2,ta)+":"+o(2,ua)+":"+o(2,va)+"."+o(3,wa)+"Z";}else na=null;}else if(typeof na.toJSON=="function"&&((oa!="[object Number]"&&oa!="[object String]"&&oa!="[object Array]")||h.call(na,"toJSON")))na=na.toJSON(ga);}if(ia)na=ia.call(ha,ga,na);if(na===null)return "null";oa=g.call(na);if(oa=="[object Boolean]"){return ""+na;}else if(oa=="[object Number]"){return na>-1/0&&na<1/0?""+na:"null";}else if(oa=="[object String]")return p(na);if(typeof na=="object"){for(ab=ma.length;ab--;)if(ma[ab]===na)throw TypeError();ma.push(na);xa=[];bb=la;la+=ka;if(oa=="[object Array]"){for(za=0,ab=na.length;za<ab;cb||(cb=true),za++){ya=q(za,na,ia,ja,ka,la,ma);xa.push(ya===j?"null":ya);}return cb?(ka?"[\n"+la+xa.join(",\n"+la)+"\n"+bb+"]":("["+xa.join(",")+"]")):"[]";}else{i(ja||na,function(db){var eb=q(db,na,ia,ja,ka,la,ma);if(eb!==j)xa.push(p(db)+":"+(ka?" ":"")+eb);cb||(cb=true);});return cb?(ka?"{\n"+la+xa.join(",\n"+la)+"\n"+bb+"}":("{"+xa.join(",")+"}")):"{}";}ma.pop();}};k.stringify=function(ga,ha,ia){var ja,ka,la,ma,na,oa;if(typeof ha=="function"||typeof ha=="object"&&ha)if(g.call(ha)=="[object Function]"){ka=ha;}else if(g.call(ha)=="[object Array]"){la={};for(ma=0,na=ha.length;ma<na;oa=ha[ma++],((g.call(oa)=="[object String]"||g.call(oa)=="[object Number]")&&(la[oa]=1)));}if(ia)if(g.call(ia)=="[object Number]"){if((ia-=ia%1)>0)for(ja="",ia>10&&(ia=10);ja.length<ia;ja+=" ");}else if(g.call(ia)=="[object String]")ja=ia.length<=10?ia:ia.slice(0,10);return q("",(oa={},oa[""]=ga,oa),ka,la,ja,"",[]);};}if(!r){s=String.fromCharCode;t={"\\":"\\",'"':'"',"/":"/",b:"\b",t:"\t",n:"\n",f:"\f",r:"\r"};u=function(){z=aa=null;throw SyntaxError();};v=function(){var ga=aa,ha=ga.length,ia,ja,ka,la,ma;while(z<ha){ia=ga.charAt(z);if("\t\r\n ".indexOf(ia)>-1){z++;}else if("{}[]:,".indexOf(ia)>-1){z++;return ia;}else if(ia=='"'){for(ja="@",z++;z<ha;){ia=ga.charAt(z);if(ia<" "){u();}else if(ia=="\\"){ia=ga.charAt(++z);if('\\"/btnfr'.indexOf(ia)>-1){ja+=t[ia];z++;}else if(ia=="u"){ka=++z;for(la=z+4;z<la;z++){ia=ga.charAt(z);if(!(ia>="0"&&ia<="9"||ia>="a"&&ia<="f"||ia>="A"&&ia<="F"))u();}ja+=s("0x"+ga.slice(ka,z));}else u();}else{if(ia=='"')break;ja+=ia;z++;}}if(ga.charAt(z)=='"'){z++;return ja;}u();}else{ka=z;if(ia=="-"){ma=true;ia=ga.charAt(++z);}if(ia>="0"&&ia<="9"){if(ia=="0"&&(ia=ga.charAt(z+1),ia>="0"&&ia<="9"))u();ma=false;for(;z<ha&&(ia=ga.charAt(z),ia>="0"&&ia<="9");z++);if(ga.charAt(z)=="."){la=++z;for(;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}ia=ga.charAt(z);if(ia=="e"||ia=="E"){ia=ga.charAt(++z);if(ia=="+"||ia=="-")z++;for(la=z;la<ha&&(ia=ga.charAt(la),ia>="0"&&ia<="9");la++);if(la==z)u();z=la;}return +ga.slice(ka,z);}if(ma)u();if(ga.slice(z,z+4)=="true"){z+=4;return true;}else if(ga.slice(z,z+5)=="false"){z+=5;return false;}else if(ga.slice(z,z+4)=="null"){z+=4;return null;}u();}}return "$";};w=function(ga){var ha,ia,ja;if(ga=="$")u();if(typeof ga=="string"){if(ga.charAt(0)=="@")return ga.slice(1);if(ga=="["){ha=[];for(;;ia||(ia=true)){ga=v();if(ga=="]")break;if(ia)if(ga==","){ga=v();if(ga=="]")u();}else u();if(ga==",")u();ha.push(w(ga));}return ha;}else if(ga=="{"){ha={};for(;;ia||(ia=true)){ga=v();if(ga=="}")break;if(ia)if(ga==","){ga=v();if(ga=="}")u();}else u();if(ga==","||typeof ga!="string"||ga.charAt(0)!="@"||v()!=":")u();ha[ga.slice(1)]=w(v());}return ha;}u();}return ga;};y=function(ga,ha,ia){var ja=x(ga,ha,ia);if(ja===j){delete ga[ha];}else ga[ha]=ja;};x=function(ga,ha,ia){var ja=ga[ha],ka;if(typeof ja=="object"&&ja)if(g.call(ja)=="[object Array]"){for(ka=ja.length;ka--;)y(ja,ka,ia);}else i(ja,function(la){y(ja,la,ia);});return ia.call(ga,ha,ja);};k.parse=function(ga,ha){z=0;aa=ga;var ia=w(v());if(v()!="$")u();z=aa=null;return ha&&g.call(ha)=="[object Function]"?x((ba={},ba[""]=ia,ba),"",ha):ia;};}}}).call(this);},null);
__d("ES6Object",["ie8DontEnum"],function(a,b,c,d,e,f,g){var h=({}).hasOwnProperty,i={assign:function(j){for(var k=[],l=1,m=arguments.length;l<m;l++)k.push(arguments[l]);if(j==null)throw new TypeError('Object.assign target cannot be null or undefined');j=Object(j);for(var n=0;n<k.length;n++){var o=k[n];if(o==null)continue;o=Object(o);for(var p in o)if(h.call(o,p))j[p]=o[p];g(o,function(q){return j[q]=o[q];});}return j;}};e.exports=i;},null);
__d("ES6ArrayPrototype",[],function(a,b,c,d,e,f){var g={find:function(h,i){if(this==null)throw new TypeError('Array.prototype.find called on null or undefined');if(typeof h!=='function')throw new TypeError('predicate must be a function');var j=g.findIndex.call(this,h,i);return j===-1?void 0:this[j];},findIndex:function(h,i){if(this==null)throw new TypeError('Array.prototype.findIndex called on null or undefined');if(typeof h!=='function')throw new TypeError('predicate must be a function');var j=Object(this),k=j.length>>>0;for(var l=0;l<k;l++)if(h.call(i,j[l],l,j))return l;return -1;}};e.exports=g;},null);
__d("ES6DatePrototype",[],function(a,b,c,d,e,f){function g(i){return (i<10?'0':'')+i;}var h={toISOString:function(){if(!isFinite(this))throw new Error('Invalid time value');var i=this.getUTCFullYear();i=(i<0?'-':(i>9999?'+':''))+('00000'+Math.abs(i)).slice(0<=i&&i<=9999?-4:-6);return i+'-'+g(this.getUTCMonth()+1)+'-'+g(this.getUTCDate())+'T'+g(this.getUTCHours())+':'+g(this.getUTCMinutes())+':'+g(this.getUTCSeconds())+'.'+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+'Z';}};e.exports=h;},null);
__d("ES6Number",[],function(a,b,c,d,e,f){var g={isFinite:function(h){return (typeof h=='number')&&isFinite(h);},isNaN:function(h){return (typeof h=='number')&&isNaN(h);}};e.exports=g;},null);
__d("ES",["ES5ArrayPrototype","ES5FunctionPrototype","ES5StringPrototype","ES5Array","ES5Object","ES5Date","JSON3","ES6Object","ES6ArrayPrototype","ES6DatePrototype","ES6Number"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=({}).toString,s={'JSON.stringify':m.stringify,'JSON.parse':m.parse},t={'Array.prototype':g,'Function.prototype':h,'String.prototype':i,Object:k,Array:j,Date:l},u={Object:n,'Array.prototype':o,'Date.prototype':p,Number:q};function v(x){for(var y in x){if(!x.hasOwnProperty(y))continue;var z=x[y],aa=y.split('.'),ba=aa.length==2?window[aa[0]][aa[1]]:window[y];for(var ca in z){if(!z.hasOwnProperty(ca))continue;var da=ba[ca];s[y+'.'+ca]=da&&/\{\s+\[native code\]\s\}/.test(da)?da:z[ca];}}}v(t);v(u);function w(x,y,z){for(var aa=[],ba=3,ca=arguments.length;ba<ca;ba++)aa.push(arguments[ba]);var da=z?r.call(x).slice(8,-1)+'.prototype':x,ea=s[da+'.'+y]||x[y];if(typeof ea==='function')return ea.apply(x,aa);}e.exports=w;},null);
var ES = require('ES');
__d("JSSDKRuntimeConfig",[],{"locale":"en_US","rtl":false,"revision":"1594576"});__d("JSSDKConfig",[],{"bustCache":true,"tagCountLogRate":0.01,"errorHandling":{"rate":4},"usePluginPipe":true,"features":{"allow_non_canvas_app_events":false,"event_subscriptions_log":{"rate":0.01,"value":10000},"should_force_single_dialog_instance":true,"kill_fragment":true,"xfbml_profile_pic_server":true,"error_handling":{"rate":4},"e2e_ping_tracking":{"rate":1.0e-6},"xd_timeout":{"rate":4,"value":30000},"use_bundle":true,"launch_payment_dialog_via_pac":{"rate":100},"plugin_tags_blacklist":["recommendations_bar"],"should_log_response_error":true},"api":{"mode":"warn","whitelist":["AppEvents","AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.logEvent","AppEvents.logPurchase","Canvas","Canvas.Prefetcher","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.hideFlashElement","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.showFlashElement","Canvas.startTimer","Canvas.stopTimer","Event","Event.subscribe","Event.unsubscribe","Music.flashCallback","Music.init","Music.send","Payment","Payment.cancelFlow","Payment.continueFlow","Payment.init","Payment.lockForProcessing","Payment.parse","Payment.setSize","Payment.unlockForProcessing","ThirdPartyProvider","ThirdPartyProvider.init","ThirdPartyProvider.sendData","UA","UA.nativeApp","XFBML","XFBML.RecommendationsBar","XFBML.RecommendationsBar.markRead","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"]},"initSitevars":{"enableMobileComments":1,"iframePermissions":{"read_stream":false,"manage_mailbox":false,"manage_friendlists":false,"read_mailbox":false,"publish_checkins":true,"status_update":true,"photo_upload":true,"video_upload":true,"sms":false,"create_event":true,"rsvp_event":true,"offline_access":true,"email":true,"xmpp_login":false,"create_note":true,"share_item":true,"export_stream":false,"publish_stream":true,"publish_likes":true,"ads_management":false,"contact_email":true,"access_private_data":false,"read_insights":false,"read_requests":false,"read_friendlists":true,"manage_pages":false,"physical_login":false,"manage_groups":false,"read_deals":false}}});__d("UrlMapConfig",[],{"www":"www.facebook.com","m":"m.facebook.com","connect":"connect.facebook.net","business":"business.facebook.com","api_https":"api.facebook.com","api_read_https":"api-read.facebook.com","graph_https":"graph.facebook.com","fbcdn_http":"fbstatic-a.akamaihd.net","fbcdn_https":"fbstatic-a.akamaihd.net","cdn_http":"static.ak.facebook.com","cdn_https":"s-static.ak.facebook.com"});__d("JSSDKXDConfig",[],{"XdUrl":"\/connect\/xd_arbiter.php?version=41","XdBundleUrl":"\/connect\/xd_arbiter\/DU1Ia251o0y.js?version=41","Flash":{"path":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/yOZN1vHw3Z_.swf"},"useCdn":true});__d("JSSDKCssConfig",[],{"rules":".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f6f7f8;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #3a5795;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{max-height:590px;min-height:590px;max-width:500px;min-width:500px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;left:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #2f477a;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f8;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}","components":["css:fb.css.base","css:fb.css.dialog","css:fb.css.iframewidget"]});__d("ApiClientConfig",[],{"FlashRequest":{"swfUrl":"https:\/\/connect.facebook.net\/rsrc.php\/v1\/yd\/r\/mxzow1Sdmxr.swf"}});__d("JSSDKCanvasPrefetcherConfig",[],{"blacklist":[144959615576466],"sampleRate":500});__d("JSSDKPluginPipeConfig",[],{"threshold":0,"enabledApps":{"209753825810663":1,"187288694643718":1}});
__d("QueryString",[],function(a,b,c,d,e,f){function g(k){var l=[];ES(ES('Object','keys',false,k).sort(),'forEach',true,function(m){var n=k[m];if(typeof n==='undefined')return;if(n===null){l.push(m);return;}l.push(encodeURIComponent(m)+'='+encodeURIComponent(n));});return l.join('&');}function h(k,l){var m={};if(k==='')return m;var n=k.split('&');for(var o=0;o<n.length;o++){var p=n[o].split('=',2),q=decodeURIComponent(p[0]);if(l&&m.hasOwnProperty(q))throw new URIError('Duplicate key: '+q);m[q]=p.length===2?decodeURIComponent(p[1]):null;}return m;}function i(k,l){return k+(~ES(k,'indexOf',true,'?')?'&':'?')+(typeof l==='string'?l:j.encode(l));}var j={encode:g,decode:h,appendToUrl:i};e.exports=j;},null);
__d("ManagedError",[],function(a,b,c,d,e,f){function g(h,i){Error.prototype.constructor.call(this,h);this.message=h;this.innerError=i;}g.prototype=new Error();g.prototype.constructor=g;e.exports=g;},null);
__d("AssertionError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("sprintf",[],function(a,b,c,d,e,f){function g(h){for(var i=[],j=1,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=0;return h.replace(/%s/g,function(m){return i[l++];});}e.exports=g;},null);
__d("Assert",["AssertionError","sprintf"],function(a,b,c,d,e,f,g,h){function i(n,o){if(typeof n!=='boolean'||!n)throw new g(o);return n;}function j(n,o,p){var q;if(o===(void 0)){q='undefined';}else if(o===null){q='null';}else{var r=Object.prototype.toString.call(o);q=/\s(\w*)/.exec(r)[1].toLowerCase();}i(ES(n,'indexOf',true,q)!==-1,p||h('Expression is of type %s, not %s',q,n));return o;}function k(n,o,p){i(o instanceof n,p||'Expression not instance of type');return o;}function l(n,o){m['is'+n]=o;m['maybe'+n]=function(p,q){if(p!=null)o(p,q);};}var m={isInstanceOf:k,isTrue:i,isTruthy:function(n,o){return i(!!n,o);},type:j,define:function(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();l(n,function(p,q){i(o(p),q);});}};ES(['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'],'forEach',true,function(n){l(n,ES(j,'bind',true,null,n.toLowerCase()));});e.exports=m;},null);
__d("Type",["Assert"],function(a,b,c,d,e,f,g){function h(){var l=this.__mixins;if(l)for(var m=0;m<l.length;m++)l[m].apply(this,arguments);}function i(l,m){if(m instanceof l)return true;if(m instanceof h)for(var n=0;n<m.__mixins.length;n++)if(m.__mixins[n]==l)return true;return false;}function j(l,m){var n=l.prototype;if(!ES('Array','isArray',false,m))m=[m];for(var o=0;o<m.length;o++){var p=m[o];if(typeof p=='function'){n.__mixins.push(p);p=p.prototype;}ES(ES('Object','keys',false,p),'forEach',true,function(q){n[q]=p[q];});}}function k(l,m,n){var o=m&&m.hasOwnProperty('constructor')?m.constructor:function(){this.parent.apply(this,arguments);};g.isFunction(o);if(l&&l.prototype instanceof h===false)throw new Error('parent type does not inherit from Type');l=l||h;function p(){}p.prototype=l.prototype;o.prototype=new p();if(m)ES('Object','assign',false,o.prototype,m);o.prototype.constructor=o;o.parent=l;o.prototype.__mixins=l.prototype.__mixins?Array.prototype.slice.call(l.prototype.__mixins):[];if(n)j(o,n);o.prototype.parent=function(){this.parent=l.prototype.parent;l.apply(this,arguments);};o.prototype.parentCall=function(q){return l.prototype[q].apply(this,Array.prototype.slice.call(arguments,1));};o.extend=function(q,r){return k(this,q,r);};return o;}ES('Object','assign',false,h.prototype,{instanceOf:function(l){return i(l,this);}});ES('Object','assign',false,h,{extend:function(l,m){return typeof l==='function'?k.apply(null,arguments):k(null,l,m);},instanceOf:i});e.exports=h;},null);
__d("ObservableMixin",[],function(a,b,c,d,e,f){function g(){this.__observableEvents={};}g.prototype={inform:function(h){var i=Array.prototype.slice.call(arguments,1),j=Array.prototype.slice.call(this.getSubscribers(h));for(var k=0;k<j.length;k++){if(j[k]===null)continue;try{j[k].apply(this,i);}catch(l){setTimeout(function(){throw l;},0);}}return this;},getSubscribers:function(h){return this.__observableEvents[h]||(this.__observableEvents[h]=[]);},clearSubscribers:function(h){if(h)this.__observableEvents[h]=[];return this;},clearAllSubscribers:function(){this.__observableEvents={};return this;},subscribe:function(h,i){var j=this.getSubscribers(h);j.push(i);return this;},unsubscribe:function(h,i){var j=this.getSubscribers(h);for(var k=0;k<j.length;k++)if(j[k]===i){j.splice(k,1);break;}return this;},monitor:function(h,i){if(!i()){var j=ES(function(k){if(i.apply(i,arguments))this.unsubscribe(h,j);},'bind',true,this);this.subscribe(h,j);}return this;}};e.exports=g;},null);
__d("sdk.Model",["Type","ObservableMixin"],function(a,b,c,d,e,f,g,h){var i=g.extend({constructor:function(j){this.parent();var k={},l=this;ES(ES('Object','keys',false,j),'forEach',true,function(m){k[m]=j[m];l['set'+m]=function(n){if(n===k[m])return this;k[m]=n;l.inform(m+'.change',n);return l;};l['get'+m]=function(){return k[m];};});}},h);e.exports=i;},null);
__d("sdk.Runtime",["sdk.Model","JSSDKRuntimeConfig"],function(a,b,c,d,e,f,g,h){var i={UNKNOWN:0,PAGETAB:1,CANVAS:2,PLATFORM:4},j=new g({AccessToken:'',ClientID:'',CookieUserID:'',Environment:i.UNKNOWN,Initialized:false,IsVersioned:false,KidDirectedSite:(void 0),Locale:h.locale,LoginStatus:(void 0),Revision:h.revision,Rtl:h.rtl,Scope:(void 0),Secure:(void 0),UseCookie:false,UserID:'',Version:(void 0)});ES('Object','assign',false,j,{ENVIRONMENTS:i,isEnvironment:function(k){var l=this.getEnvironment();return (k|l)===l;},isCanvasEnvironment:function(){return this.isEnvironment(i.CANVAS)||this.isEnvironment(i.PAGETAB);}});(function(){var k=/app_runner/.test(window.name)?i.PAGETAB:/iframe_canvas/.test(window.name)?i.CANVAS:i.UNKNOWN;if((k|i.PAGETAB)===k)k=k|i.CANVAS;j.setEnvironment(k);})();e.exports=j;},null);
__d("sdk.Cookie",["QueryString","sdk.Runtime"],function(a,b,c,d,e,f,g,h){var i=null;function j(m,n,o){m=m+h.getClientID();var p=i&&i!=='.';if(p){document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';document.cookie=m+'=; expires=Wed, 04 Feb 2004 08:00:00 GMT;'+'domain='+location.hostname+';';}var q=new Date(o).toGMTString();document.cookie=m+'='+n+(n&&o===0?'':'; expires='+q)+'; path=/'+(p?'; domain='+i:'');}function k(m){m=m+h.getClientID();var n=new RegExp('\\b'+m+'=([^;]*)\\b');return n.test(document.cookie)?RegExp.$1:null;}var l={setDomain:function(m){i=m;var n=g.encode({base_domain:i&&i!=='.'?i:''}),o=new Date();o.setFullYear(o.getFullYear()+1);j('fbm_',n,o.getTime());},getDomain:function(){return i;},loadMeta:function(){var m=k('fbm_');if(m){var n=g.decode(m);if(!i)i=n.base_domain;return n;}},loadSignedRequest:function(){return k('fbsr_');},setSignedRequestCookie:function(m,n){if(!m)throw new Error('Value passed to Cookie.setSignedRequestCookie '+'was empty.');j('fbsr_',m,n);},clearSignedRequestCookie:function(){j('fbsr_','',0);},setRaw:j};e.exports=l;},null);
__d("wrapFunction",[],function(a,b,c,d,e,f){var g={};function h(i,j,k){j=j||'default';return function(){var l=j in g?g[j](i,k):i;return l.apply(this,arguments);};}h.setWrapper=function(i,j){j=j||'default';g[j]=i;};e.exports=h;},null);
__d("DOMEventListener",["wrapFunction"],function(a,b,c,d,e,f,g){var h,i;if(window.addEventListener){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.addEventListener(l,m.wrapper,false);};i=function(k,l,m){k.removeEventListener(l,m.wrapper,false);};}else if(window.attachEvent){h=function(k,l,m){m.wrapper=g(m,'entry','DOMEventListener.add '+l);k.attachEvent('on'+l,m.wrapper);};i=function(k,l,m){k.detachEvent('on'+l,m.wrapper);};}else i=h=function(){};var j={add:function(k,l,m){h(k,l,m);return {remove:function(){i(k,l,m);k=null;}};},remove:i};e.exports=j;},null);
__d("sdk.UA",[],function(a,b,c,d,e,f){var g=navigator.userAgent,h={iphone:/\b(iPhone|iP[ao]d)/.test(g),ipad:/\b(iP[ao]d)/.test(g),android:/Android/i.test(g),nativeApp:/FBAN\/\w+;/i.test(g)},i=/Mobile/i.test(g),j={ie:'',firefox:'',chrome:'',webkit:'',osx:''},k=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(g);if(k){j.ie=k[1]?parseFloat(k[1]):k[4]?parseFloat(k[4]):'';j.firefox=k[2]||'';j.webkit=k[3]||'';if(k[3]){var l=/(?:Chrome\/(\d+\.\d+))/.exec(g);j.chrome=l?l[1]:'';}}var m=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(g);if(m)j.osx=m[1];function n(p){return ES(p.split('.'),'map',true,function(q){return parseFloat(q);});}var o={};ES(ES('Object','keys',false,j),'map',true,function(p){o[p]=function(){return parseFloat(j[p]);};o[p].getVersionParts=function(){return n(j[p]);};});ES(ES('Object','keys',false,h),'map',true,function(p){o[p]=function(){return h[p];};});o.mobile=function(){return h.iphone||h.ipad||h.android||i;};e.exports=o;},null);
__d("getBlankIframeSrc",["sdk.UA"],function(a,b,c,d,e,f,g){function h(){return g.ie()<10?'javascript:false':'about:blank';}e.exports=h;},null);
__d("guid",[],function(a,b,c,d,e,f){function g(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');}e.exports=g;},null);
__d("UserAgent_DEPRECATED",[],function(a,b,c,d,e,f){var g=false,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;function w(){if(g)return;g=true;var y=navigator.userAgent,z=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y),aa=/(Mac OS X)|(Windows)|(Linux)/.exec(y);s=/\b(iPhone|iP[ao]d)/.exec(y);t=/\b(iP[ao]d)/.exec(y);q=/Android/i.exec(y);u=/FBAN\/\w+;/i.exec(y);v=/Mobile/i.exec(y);r=!!(/Win64/.exec(y));if(z){h=z[1]?parseFloat(z[1]):(z[5]?parseFloat(z[5]):NaN);if(h&&document&&document.documentMode)h=document.documentMode;var ba=/(?:Trident\/(\d+.\d+))/.exec(y);m=ba?parseFloat(ba[1])+4:h;i=z[2]?parseFloat(z[2]):NaN;j=z[3]?parseFloat(z[3]):NaN;k=z[4]?parseFloat(z[4]):NaN;if(k){z=/(?:Chrome\/(\d+\.\d+))/.exec(y);l=z&&z[1]?parseFloat(z[1]):NaN;}else l=NaN;}else h=i=j=l=k=NaN;if(aa){if(aa[1]){var ca=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);n=ca?parseFloat(ca[1].replace('_','.')):true;}else n=false;o=!!aa[2];p=!!aa[3];}else n=o=p=false;}var x={ie:function(){return w()||h;},ieCompatibilityMode:function(){return w()||(m>h);},ie64:function(){return x.ie()&&r;},firefox:function(){return w()||i;},opera:function(){return w()||j;},webkit:function(){return w()||k;},safari:function(){return x.webkit();},chrome:function(){return w()||l;},windows:function(){return w()||o;},osx:function(){return w()||n;},linux:function(){return w()||p;},iphone:function(){return w()||s;},mobile:function(){return w()||(s||t||q||v);},nativeApp:function(){return w()||u;},android:function(){return w()||q;},ipad:function(){return w()||t;}};e.exports=x;},null);
__d("hasNamePropertyBug",["guid","UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g,h){var i=h.ie()?(void 0):false;function j(){var l=document.createElement("form"),m=l.appendChild(document.createElement("input"));m.name=g();i=m!==l.elements[m.name];l=m=null;return i;}function k(){return typeof i==='undefined'?j():i;}e.exports=k;},null);
__d("sdk.createIframe",["DOMEventListener","getBlankIframeSrc","guid","hasNamePropertyBug"],function(a,b,c,d,e,f,g,h,i,j){function k(l){l=ES('Object','assign',false,{},l);var m,n=l.name||i(),o=l.root,p=l.style||{border:'none'},q=l.url,r=l.onload,s=l.onerror;if(j()){m=document.createElement('<iframe name="'+n+'"/>');}else{m=document.createElement("iframe");m.name=n;}delete l.style;delete l.name;delete l.url;delete l.root;delete l.onload;delete l.onerror;var t=ES('Object','assign',false,{frameBorder:0,allowTransparency:true,scrolling:'no'},l);if(t.width)m.width=t.width+'px';if(t.height)m.height=t.height+'px';delete t.height;delete t.width;for(var u in t)if(t.hasOwnProperty(u))m.setAttribute(u,t[u]);ES('Object','assign',false,m.style,p);m.src=h();o.appendChild(m);if(r)var v=g.add(m,'load',function(){v.remove();r();});if(s)var w=g.add(m,'error',function(){w.remove();s();});m.src=q;return m;}e.exports=k;},null);
__d("DOMWrapper",[],function(a,b,c,d,e,f){var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;},null);
__d("eprintf",[],function(a,b,c,d,e,f){var g=function(h){var i=ES(Array.prototype.slice.call(arguments),'map',true,function(l){return String(l);}),j=h.split('%s').length-1;if(j!==i.length-1)return g('eprintf args number mismatch: %s',ES('JSON','stringify',false,i));var k=1;return h.replace(/%s/g,function(l){return String(i[k++]);});};e.exports=g;},null);
__d("ex",["eprintf"],function(a,b,c,d,e,f,g){var h=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);i=ES(i,'map',true,function(l){return String(l);});if(i[0].split('%s').length!==i.length)return h('ex args number mismatch: %s',ES('JSON','stringify',false,i));return h._prefix+ES('JSON','stringify',false,i)+h._suffix;};h._prefix='<![EX[';h._suffix=']]>';e.exports=h;},null);
__d("invariant",["ex","sprintf"],function(a,b,c,d,e,f,g,h){"use strict";var i=g,j=function(k,l){if(!k){var m;if(l===(void 0)){m=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var n=['Invariant Violation: '+l];for(var o=2,p=arguments.length;o<p;o++)n.push(arguments[o]);m=new Error(i.apply(null,n));m.messageWithParams=n;}m.framesToPop=1;throw m;}};e.exports=j;},null);
__d("sdk.feature",["JSSDKConfig","invariant"],function(a,b,c,d,e,f,g,h){function i(j,k){h(arguments.length>=2);if(g.features&&j in g.features){var l=g.features[j];if(typeof l==='object'&&typeof l.rate==='number'){if(l.rate&&Math.random()*100<=l.rate){return l.value||true;}else return l.value?null:false;}else return l;}return k;}e.exports=i;},null);
__d("sdk.getContextType",["sdk.Runtime","sdk.UA"],function(a,b,c,d,e,f,g,h){function i(){if(h.nativeApp())return 3;if(h.mobile())return 2;if(g.isEnvironment(g.ENVIRONMENTS.CANVAS))return 5;return 1;}e.exports=i;},null);
__d("Log",["sprintf"],function(a,b,c,d,e,f,g){var h={DEBUG:3,INFO:2,WARNING:1,ERROR:0};function i(k,l){var m=Array.prototype.slice.call(arguments,2),n=g.apply(null,m),o=window.console;if(o&&j.level>=l)o[k in o?k:'log'](n);}var j={level:-1,Level:h,debug:ES(i,'bind',true,null,'debug',h.DEBUG),info:ES(i,'bind',true,null,'info',h.INFO),warn:ES(i,'bind',true,null,'warn',h.WARNING),error:ES(i,'bind',true,null,'error',h.ERROR)};e.exports=j;},null);
__d("sdk.domReady",[],function(a,b,c,d,e,f){var g,h="readyState" in document?/loaded|complete/.test(document.readyState):!!document.body;function i(){if(!g)return;var l;while(l=g.shift())l();g=null;}function j(l){if(g){g.push(l);return;}else l();}if(!h){g=[];if(document.addEventListener){document.addEventListener('DOMContentLoaded',i,false);window.addEventListener('load',i,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',i);window.attachEvent('onload',i);}if(document.documentElement.doScroll&&window==window.top){var k=function(){try{document.documentElement.doScroll('left');}catch(l){setTimeout(k,0);return;}i();};k();}}e.exports=j;},3);
__d("sdk.Content",["Log","sdk.UA","sdk.domReady"],function(a,b,c,d,e,f,g,h,i){var j,k,l={append:function(m,n){if(!n)if(!j){j=n=document.getElementById('fb-root');if(!n){g.warn('The "fb-root" div has not been created, auto-creating');j=n=document.createElement('div');n.id='fb-root';if(h.ie()||!document.body){i(function(){document.body.appendChild(n);});}else document.body.appendChild(n);}n.className+=' fb_reset';}else n=j;if(typeof m=='string'){var o=document.createElement('div');n.appendChild(o).innerHTML=m;return o;}else return n.appendChild(m);},appendHidden:function(m){if(!n){var n=document.createElement('div'),o=n.style;o.position='absolute';o.top='-10000px';o.width=o.height=0;n=l.append(n);}return l.append(m,n);},submitToTarget:function(m,n){var o=document.createElement('form');o.action=m.url;o.target=m.target;o.method=(n)?'GET':'POST';l.appendHidden(o);for(var p in m.params)if(m.params.hasOwnProperty(p)){var q=m.params[p];if(q!==null&&q!==(void 0)){var r=document.createElement('input');r.name=p;r.value=q;o.appendChild(r);}}o.submit();o.parentNode.removeChild(o);}};e.exports=l;},null);
__d("Miny",[],function(a,b,c,d,e,f){var g='Miny1',h={encode:[],decode:{}},i='wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');function j(n){for(var o=h.encode.length;o<n;o++){var p=o.toString(32).split('');p[p.length-1]=i[parseInt(p[p.length-1],32)];p=p.join('');h.encode[o]=p;h.decode[p]=o;}return h;}function k(n){if(/^$|[~\\]|__proto__/.test(n))return n;var o=n.match(/\w+|\W+/g),p={};for(var q=0;q<o.length;q++)p[o[q]]=(p[o[q]]||0)+1;var r=ES('Object','keys',false,p);r.sort(function(u,v){return p[u]<p[v]?1:(p[v]<p[u]?-1:0);});var s=j(r.length).encode;for(q=0;q<r.length;q++)p[r[q]]=s[q];var t=[];for(q=0;q<o.length;q++)t[q]=p[o[q]];return [g,r.length].concat(r).concat(t.join('')).join('~');}function l(n){var o=n.split('~');if(o.shift()!=g)return n;var p=parseInt(o.shift(),10),q=o.pop();q=q.match(/[0-9a-v]*[\-w-zA-Z_]/g);var r=o,s=j(p).decode,t=[];for(var u=0;u<q.length;u++)t[u]=r[s[q[u]]];return t.join('');}var m={encode:k,decode:l};e.exports=m;},null);
__d("UrlMap",["UrlMapConfig"],function(a,b,c,d,e,f,g){var h={resolve:function(i,j){var k=typeof j=='undefined'?location.protocol.replace(':',''):j?'https':'http';if(i in g)return k+'://'+g[i];if(typeof j=='undefined'&&i+'_'+k in g)return k+'://'+g[i+'_'+k];if(j!==true&&i+'_http' in g)return 'http://'+g[i+'_http'];if(j!==false&&i+'_https' in g)return 'https://'+g[i+'_https'];}};e.exports=h;},null);
__d("dotAccess",[],function(a,b,c,d,e,f){function g(h,i,j){var k=i.split('.');do{var l=k.shift();h=h[l]||j&&(h[l]={});}while(k.length&&h);return h;}e.exports=g;},null);
__d("GlobalCallback",["DOMWrapper","dotAccess","guid","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j){var k,l,m={setPrefix:function(n){k=h(g.getWindow(),n,true);l=n;},create:function(n,o){if(!k)this.setPrefix('__globalCallbacks');var p=i();k[p]=j(n,'entry',o||'GlobalCallback');return l+'.'+p;},remove:function(n){var o=n.substring(l.length+1);delete k[o];}};e.exports=m;},null);
__d("insertIframe",["GlobalCallback","getBlankIframeSrc","guid"],function(a,b,c,d,e,f,g,h,i){function j(k){k.id=k.id||i();k.name=k.name||i();var l=false,m=false,n=function(){if(l&&!m){m=true;k.onload&&k.onload(k.root.firstChild);}},o=g.create(n);if(document.attachEvent){var p=('<iframe'+' id="'+k.id+'"'+' name="'+k.name+'"'+(k.title?' title="'+k.title+'"':'')+(k.className?' class="'+k.className+'"':'')+' style="border:none;'+(k.width?'width:'+k.width+'px;':'')+(k.height?'height:'+k.height+'px;':'')+'"'+' src="'+h()+'"'+' frameborder="0"'+' scrolling="no"'+' allowtransparency="true"'+' onload="'+o+'()"'+'></iframe>');k.root.innerHTML=('<iframe src="'+h()+'"'+' frameborder="0"'+' scrolling="no"'+' style="height:1px"></iframe>');l=true;setTimeout(function(){k.root.innerHTML=p;k.root.firstChild.src=k.url;k.onInsert&&k.onInsert(k.root.firstChild);},0);}else{var q=document.createElement('iframe');q.id=k.id;q.name=k.name;q.onload=n;q.scrolling='no';q.style.border='none';q.style.overflow='hidden';if(k.title)q.title=k.title;if(k.className)q.className=k.className;if(k.height!==(void 0))q.style.height=k.height+'px';if(k.width!==(void 0))if(k.width=='100%'){q.style.width=k.width;}else q.style.width=k.width+'px';k.root.appendChild(q);l=true;q.src=k.url;k.onInsert&&k.onInsert(q);}}e.exports=j;},null);
__d("sdk.Impressions",["sdk.Content","Miny","QueryString","sdk.Runtime","UrlMap","getBlankIframeSrc","guid","insertIframe"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(q){var r=j.getClientID();if(!q.api_key&&r)q.api_key=r;q.kid_directed_site=j.getKidDirectedSite();var s=k.resolve('www',true)+'/impression.php/'+m()+'/',t=i.appendToUrl(s,q);if(t.length>2000)if(q.payload&&typeof q.payload==='string'){var u=h.encode(q.payload);if(u&&u.length<q.payload.length){q.payload=u;t=i.appendToUrl(s,q);}}if(t.length<=2000){var v=new Image();v.src=t;}else{var w=m(),x=g.appendHidden('');n({url:l(),root:x,name:w,className:'fb_hidden fb_invisible',onload:function(){x.parentNode.removeChild(x);}});g.submitToTarget({url:s,target:w,params:q});}}var p={log:function(q,r){if(!r.source)r.source='jssdk';o({lid:q,payload:ES('JSON','stringify',false,r)});},impression:o};e.exports=p;},null);
__d("Base64",[],function(a,b,c,d,e,f){var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';function h(l){l=(l.charCodeAt(0)<<16)|(l.charCodeAt(1)<<8)|l.charCodeAt(2);return String.fromCharCode(g.charCodeAt(l>>>18),g.charCodeAt((l>>>12)&63),g.charCodeAt((l>>>6)&63),g.charCodeAt(l&63));}var i='>___?456789:;<=_______'+'\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31'+'______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';function j(l){l=(i.charCodeAt(l.charCodeAt(0)-43)<<18)|(i.charCodeAt(l.charCodeAt(1)-43)<<12)|(i.charCodeAt(l.charCodeAt(2)-43)<<6)|i.charCodeAt(l.charCodeAt(3)-43);return String.fromCharCode(l>>>16,(l>>>8)&255,l&255);}var k={encode:function(l){l=unescape(encodeURI(l));var m=(l.length+2)%3;l=(l+'\0\0'.slice(m)).replace(/[\s\S]{3}/g,h);return l.slice(0,l.length+m-2)+'=='.slice(m);},decode:function(l){l=l.replace(/[^A-Za-z0-9+\/]/g,'');var m=(l.length+3)&3;l=(l+'AAA'.slice(m)).replace(/..../g,j);l=l.slice(0,l.length+m-3);try{return decodeURIComponent(escape(l));}catch(n){throw new Error('Not valid UTF-8');}},encodeObject:function(l){return k.encode(ES('JSON','stringify',false,l));},decodeObject:function(l){return ES('JSON','parse',false,k.decode(l));},encodeNums:function(l){return String.fromCharCode.apply(String,ES(l,'map',true,function(m){return g.charCodeAt((m|-(m>63))&-(m>0)&63);}));}};e.exports=k;},null);
__d("sdk.SignedRequest",["Base64"],function(a,b,c,d,e,f,g){function h(j){if(!j)return null;var k=j.split('.',2)[1].replace(/\-/g,'+').replace(/\_/g,'/');return g.decodeObject(k);}var i={parse:h};e.exports=i;},null);
__d("URIRFC3986",[],function(a,b,c,d,e,f){var g=new RegExp('^'+'([^:/?#]+:)?'+'(//'+'([^\\\\/?#@]*@)?'+'('+'\\[[A-Fa-f0-9:.]+\\]|'+'[^\\/?#:]*'+')'+'(:[0-9]*)?'+')?'+'([^?#]*)'+'(\\?[^#]*)?'+'(#.*)?'),h={parse:function(i){if(ES(i,'trim',true)==='')return null;var j=i.match(g),k={};k.uri=j[0]?j[0]:null;k.scheme=j[1]?j[1].substr(0,j[1].length-1):null;k.authority=j[2]?j[2].substr(2):null;k.userinfo=j[3]?j[3].substr(0,j[3].length-1):null;k.host=j[2]?j[4]:null;k.port=j[5]?(j[5].substr(1)?parseInt(j[5].substr(1),10):null):null;k.path=j[6]?j[6]:null;k.query=j[7]?j[7].substr(1):null;k.fragment=j[8]?j[8].substr(1):null;k.isGenericURI=k.authority===null&&!!k.scheme;return k;}};e.exports=h;},null);
__d("createObjectFrom",[],function(a,b,c,d,e,f){function g(h,i){var j={},k=ES('Array','isArray',false,i);if(typeof i=='undefined')i=true;for(var l=h.length;l--;)j[h[l]]=k?i[l]:i;return j;}e.exports=g;},null);
__d("URISchemes",["createObjectFrom"],function(a,b,c,d,e,f,g){var h=g(['fb','fb-ama','fb-messenger','fbcf','fbconnect','fbrpc','file','ftp','http','https','mailto','ms-app','itms','itms-apps','itms-services','market','svn+ssh','fbstaging','tel','sms','pebblejs']),i={isAllowed:function(j){if(!j)return true;return h.hasOwnProperty(j.toLowerCase());}};e.exports=i;},null);
__d("copyProperties",[],function(a,b,c,d,e,f){function g(h,i,j,k,l,m,n){h=h||{};var o=[i,j,k,l,m],p=0,q;while(o[p]){q=o[p++];for(var r in q)h[r]=q[r];if(q.hasOwnProperty&&q.hasOwnProperty('toString')&&(typeof q.toString!='undefined')&&(h.toString!==q.toString))h.toString=q.toString;}return h;}e.exports=g;},null);
__d("URIBase",["URIRFC3986","URISchemes","copyProperties","ex","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){var l=new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f'+'\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF'+'\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),m=new RegExp('^(?:[^/]*:|'+'[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');function n(q,r,s,t){if(!r)return true;if(r instanceof p){q.setProtocol(r.getProtocol());q.setDomain(r.getDomain());q.setPort(r.getPort());q.setPath(r.getPath());q.setQueryData(t.deserialize(t.serialize(r.getQueryData())));q.setFragment(r.getFragment());q.setForceFragmentSeparator(r.getForceFragmentSeparator());return true;}r=ES(r.toString(),'trim',true);var u=g.parse(r)||{};if(!s&&!h.isAllowed(u.scheme))return false;q.setProtocol(u.scheme||'');if(!s&&l.test(u.host))return false;q.setDomain(u.host||'');q.setPort(u.port||'');q.setPath(u.path||'');if(s){q.setQueryData(t.deserialize(u.query)||{});}else try{q.setQueryData(t.deserialize(u.query)||{});}catch(v){return false;}q.setFragment(u.fragment||'');if(u.fragment==='')q.setForceFragmentSeparator(true);if(u.userinfo!==null)if(s){throw new Error(j('URI.parse: invalid URI (userinfo is not allowed in a URI): %s',q.toString()));}else return false;if(!q.getDomain()&&ES(q.getPath(),'indexOf',true,'\\')!==-1)if(s){throw new Error(j('URI.parse: invalid URI (no domain but multiple back-slashes): %s',q.toString()));}else return false;if(!q.getProtocol()&&m.test(r))if(s){throw new Error(j('URI.parse: invalid URI (unsafe protocol-relative URLs): %s',q.toString()));}else return false;return true;}var o=[];function p(q,r){"use strict";k(r);this.$URIBase0=r;this.$URIBase1='';this.$URIBase2='';this.$URIBase3='';this.$URIBase4='';this.$URIBase5='';this.$URIBase6={};this.$URIBase7=false;n(this,q,true,r);}p.prototype.setProtocol=function(q){"use strict";k(h.isAllowed(q));this.$URIBase1=q;return this;};p.prototype.getProtocol=function(q){"use strict";return this.$URIBase1;};p.prototype.setSecure=function(q){"use strict";return this.setProtocol(q?'https':'http');};p.prototype.isSecure=function(){"use strict";return this.getProtocol()==='https';};p.prototype.setDomain=function(q){"use strict";if(l.test(q))throw new Error(j('URI.setDomain: unsafe domain specified: %s for url %s',q,this.toString()));this.$URIBase2=q;return this;};p.prototype.getDomain=function(){"use strict";return this.$URIBase2;};p.prototype.setPort=function(q){"use strict";this.$URIBase3=q;return this;};p.prototype.getPort=function(){"use strict";return this.$URIBase3;};p.prototype.setPath=function(q){"use strict";this.$URIBase4=q;return this;};p.prototype.getPath=function(){"use strict";return this.$URIBase4;};p.prototype.addQueryData=function(q,r){"use strict";if(Object.prototype.toString.call(q)==='[object Object]'){i(this.$URIBase6,q);}else this.$URIBase6[q]=r;return this;};p.prototype.setQueryData=function(q){"use strict";this.$URIBase6=q;return this;};p.prototype.getQueryData=function(){"use strict";return this.$URIBase6;};p.prototype.removeQueryData=function(q){"use strict";if(!ES('Array','isArray',false,q))q=[q];for(var r=0,s=q.length;r<s;++r)delete this.$URIBase6[q[r]];return this;};p.prototype.setFragment=function(q){"use strict";this.$URIBase5=q;this.setForceFragmentSeparator(false);return this;};p.prototype.getFragment=function(){"use strict";return this.$URIBase5;};p.prototype.setForceFragmentSeparator=function(q){"use strict";this.$URIBase7=q;return this;};p.prototype.getForceFragmentSeparator=function(){"use strict";return this.$URIBase7;};p.prototype.isEmpty=function(){"use strict";return !(this.getPath()||this.getProtocol()||this.getDomain()||this.getPort()||ES('Object','keys',false,this.getQueryData()).length>0||this.getFragment());};p.prototype.toString=function(){"use strict";var q=this;for(var r=0;r<o.length;r++)q=o[r](q);return q.$URIBase8();};p.prototype.$URIBase8=function(){"use strict";var q='',r=this.getProtocol();if(r)q+=r+'://';var s=this.getDomain();if(s)q+=s;var t=this.getPort();if(t)q+=':'+t;var u=this.getPath();if(u){q+=u;}else if(q)q+='/';var v=this.$URIBase0.serialize(this.getQueryData());if(v)q+='?'+v;var w=this.getFragment();if(w){q+='#'+w;}else if(this.getForceFragmentSeparator())q+='#';return q;};p.registerFilter=function(q){"use strict";o.push(q);};p.prototype.getOrigin=function(){"use strict";var q=this.getPort();return this.getProtocol()+'://'+this.getDomain()+(q?':'+q:'');};p.isValidURI=function(q,r){return n(new p(null,r),q,false,r);};e.exports=p;},null);
__d("sdk.URI",["Assert","QueryString","URIBase"],function(a,b,c,d,e,f,g,h,i){var j=/\.facebook\.com$/,k={serialize:function(o){return o?h.encode(o):'';},deserialize:function(o){return o?h.decode(o):{};}};for(var l in i)if(i.hasOwnProperty(l))n[l]=i[l];var m=i===null?null:i.prototype;n.prototype=ES('Object','create',false,m);n.prototype.constructor=n;n.__superConstructor__=i;function n(o){"use strict";g.isString(o,'The passed argument was of invalid type.');if(!(this instanceof n))return new n(o);i.call(this,o,k);}n.prototype.isFacebookURI=function(){"use strict";return j.test(this.getDomain());};n.prototype.valueOf=function(){"use strict";return this.toString();};e.exports=n;},null);
__d("sdk.Event",[],function(a,b,c,d,e,f){var g={SUBSCRIBE:'event.subscribe',UNSUBSCRIBE:'event.unsubscribe',subscribers:function(){if(!this._subscribersMap)this._subscribersMap={};return this._subscribersMap;},subscribe:function(h,i){var j=this.subscribers();if(!j[h]){j[h]=[i];}else if(ES(j[h],'indexOf',true,i)==-1)j[h].push(i);if(h!=this.SUBSCRIBE&&h!=this.UNSUBSCRIBE)this.fire(this.SUBSCRIBE,h,j[h]);},unsubscribe:function(h,i){var j=this.subscribers()[h];if(j)ES(j,'forEach',true,function(k,l){if(k==i)j.splice(l,1);});if(h!=this.SUBSCRIBE&&h!=this.UNSUBSCRIBE)this.fire(this.UNSUBSCRIBE,h,j);},monitor:function(h,i){if(!i()){var j=this,k=function(){if(i.apply(i,arguments))j.unsubscribe(h,k);};this.subscribe(h,k);}},clear:function(h){delete this.subscribers()[h];},fire:function(h){var i=Array.prototype.slice.call(arguments,1),j=this.subscribers()[h];if(j)ES(j,'forEach',true,function(k){if(k)k.apply(this,i);});}};e.exports=g;},null);
__d("Queue",["copyProperties"],function(a,b,c,d,e,f,g){var h={};function i(j){"use strict";this._opts=g({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){"use strict";if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(ES(this._dispatch,'bind',true,this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){"use strict";if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){"use strict";if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){"use strict";return !this._stopped;};i.prototype.dispatch=function(){"use strict";this._dispatch(true);};i.prototype.stop=function(j){"use strict";this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){"use strict";this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){"use strict";return this._queue.length;};i.get=function(j,k){"use strict";var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){"use strict";return j in h;};i.remove=function(j){"use strict";return delete h[j];};e.exports=i;},null);
__d("JSONRPC",["Log"],function(a,b,c,d,e,f,g){function h(i){"use strict";this.$JSONRPC0=0;this.$JSONRPC1={};this.remote=ES(function(j){this.$JSONRPC2=j;return this.remote;},'bind',true,this);this.local={};this.$JSONRPC3=i;}h.prototype.stub=function(i){"use strict";this.remote[i]=ES(function(){for(var j=[],k=0,l=arguments.length;k<l;k++)j.push(arguments[k]);var m={jsonrpc:'2.0',method:i};if(typeof j[j.length-1]=='function'){m.id=++this.$JSONRPC0;this.$JSONRPC1[m.id]=j.pop();}m.params=j;this.$JSONRPC3(ES('JSON','stringify',false,m),this.$JSONRPC2||{method:i});},'bind',true,this);};h.prototype.read=function(i,j){"use strict";var k=ES('JSON','parse',false,i),l=k.id;if(!k.method){if(!this.$JSONRPC1[l]){g.warn('Could not find callback %s',l);return;}var m=this.$JSONRPC1[l];delete this.$JSONRPC1[l];delete k.id;delete k.jsonrpc;m(k);return;}var n=this,o=this.local[k.method],p;if(l){p=function(s,t){var u={jsonrpc:'2.0',id:l};u[s]=t;setTimeout(function(){n.$JSONRPC3(ES('JSON','stringify',false,u),j);},0);};}else p=function(){};if(!o){g.error('Method "%s" has not been defined',k.method);p('error',{code:-32601,message:'Method not found',data:k.method});return;}k.params.push(ES(p,'bind',true,null,'result'));k.params.push(ES(p,'bind',true,null,'error'));try{var r=o.apply(j||null,k.params);if(typeof r!=='undefined')p('result',r);}catch(q){g.error('Invokation of RPC method %s resulted in the error: %s',k.method,q.message);p('error',{code:-32603,message:'Internal error',data:q.message});}};e.exports=h;},null);
__d("sdk.RPC",["Assert","JSONRPC","Queue"],function(a,b,c,d,e,f,g,h,i){var j=new i(),k=new h(function(m){j.enqueue(m);}),l={local:k.local,remote:k.remote,stub:ES(k.stub,'bind',true,k),setInQueue:function(m){g.isInstanceOf(i,m);m.start(function(n){k.read(n);});},getOutQueue:function(){return j;}};e.exports=l;},null);
__d("sdk.Scribe",["QueryString","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f,g,h,i){function j(l,m){if(typeof m.extra=='object')m.extra.revision=h.getRevision();(new Image()).src=g.appendToUrl(i.resolve('www',true)+'/common/scribe_endpoint.php',{c:l,m:ES('JSON','stringify',false,m)});}var k={log:j};e.exports=k;},null);
__d("emptyFunction",[],function(a,b,c,d,e,f){function g(i){return function(){return i;};}function h(){}h.thatReturns=g;h.thatReturnsFalse=g(false);h.thatReturnsTrue=g(true);h.thatReturnsNull=g(null);h.thatReturnsThis=function(){return this;};h.thatReturnsArgument=function(i){return i;};e.exports=h;},null);
__d("htmlSpecialChars",[],function(a,b,c,d,e,f){var g=/&/g,h=/</g,i=/>/g,j=/"/g,k=/'/g;function l(m){if(typeof m=='undefined'||m===null||!m.toString)return '';if(m===false){return '0';}else if(m===true)return '1';return m.toString().replace(g,'&amp;').replace(j,'&quot;').replace(k,'&#039;').replace(h,'&lt;').replace(i,'&gt;');}e.exports=l;},null);
__d("Flash",["DOMEventListener","DOMWrapper","QueryString","UserAgent_DEPRECATED","copyProperties","guid","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o,p=h.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(j.ie()>=9)g.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=k({allowscriptaccess:'always',flashvars:y,movie:v},x||{});if(typeof x.flashvars=='object')x.flashvars=i.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(j.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=(new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};e.exports=u;},null);
__d("XDM",["DOMEventListener","DOMWrapper","emptyFunction","Flash","GlobalCallback","guid","Log","UserAgent_DEPRECATED","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={},q={transports:[]},r=h.getWindow();function s(u){var v={},w=u.length,x=q.transports;while(w--)v[u[w]]=1;w=x.length;while(w--){var y=x[w],z=p[y];if(!v[y]&&z.isAvailable())return y;}}var t={register:function(u,v){m.debug('Registering %s as XDM provider',u);q.transports.push(u);p[u]=v;},create:function(u){if(!u.whenReady&&!u.onMessage){m.error('An instance without whenReady or onMessage makes no sense');throw new Error('An instance without whenReady or '+'onMessage makes no sense');}if(!u.channel){m.warn('Missing channel name, selecting at random');u.channel=l();}if(!u.whenReady)u.whenReady=i;if(!u.onMessage)u.onMessage=i;var v=u.transport||s(u.blacklist||[]),w=p[v];if(w&&w.isAvailable()){m.debug('%s is available',v);w.init(u);return v;}}};t.register('flash',(function(){var u=false,v,w=false,x=15000,y;return {isAvailable:function(){return j.checkMinVersion('8.0.24');},init:function(z){m.debug('init flash: '+z.channel);var aa={send:function(da,ea,fa,ga){m.debug('sending to: %s (%s)',ea,ga);v.postMessage(da,ea,ga);}};if(u){z.whenReady(aa);return;}var ba=z.root.appendChild(r.document.createElement('div')),ca=k.create(function(){k.remove(ca);clearTimeout(y);m.info('xdm.swf called the callback');var da=k.create(function(ea,fa){ea=decodeURIComponent(ea);fa=decodeURIComponent(fa);m.debug('received message %s from %s',ea,fa);z.onMessage(ea,fa);},'xdm.swf:onMessage');v.init(z.channel,da);z.whenReady(aa);},'xdm.swf:load');v=j.embed(z.flashUrl,ba,null,{protocol:location.protocol.replace(':',''),host:location.host,callback:ca,log:w});y=setTimeout(function(){m.warn('The Flash component did not load within %s ms - '+'verify that the container is not set to hidden or invisible '+'using CSS as this will cause some browsers to not load '+'the components',x);},x);u=true;}};})());t.register('postmessage',(function(){var u=false;return {isAvailable:function(){return !!r.postMessage;},init:function(v){m.debug('init postMessage: '+v.channel);var w='_FB_'+v.channel,x={send:function(y,z,aa,ba){if(r===aa){m.error('Invalid windowref, equal to window (self)');throw new Error();}m.debug('sending to: %s (%s)',z,ba);var ca=function(){aa.postMessage('_FB_'+ba+y,z);};if(n.ie()==8||n.ieCompatibilityMode()){setTimeout(ca,0);}else ca();}};if(u){v.whenReady(x);return;}g.add(r,'message',o(function(event){var y=event.data,z=event.origin||'native';if(!/^(https?:\/\/|native$)/.test(z)){m.debug('Received message from invalid origin type: %s',z);return;}if(typeof y!='string'){m.warn('Received message of type %s from %s, expected a string',typeof y,z);return;}m.debug('received message %s from %s',y,z);if(y.substring(0,w.length)==w)y=y.substring(w.length);v.onMessage(y,z);},'entry','onMessage'));v.whenReady(x);u=true;}};})());e.exports=t;},null);
__d("isFacebookURI",[],function(a,b,c,d,e,f){var g=null,h=['http','https'];function i(j){if(!g)g=new RegExp('(^|\\.)facebook\\.com$','i');if(j.isEmpty()&&j.toString()!=='#')return false;if(!j.getDomain()&&!j.getProtocol())return true;return (ES(h,'indexOf',true,j.getProtocol())!==-1&&g.test(j.getDomain()));}i.setRegex=function(j){g=j;};e.exports=i;},null);
__d("sdk.XD",["sdk.Content","sdk.Event","Log","QueryString","Queue","sdk.RPC","sdk.Runtime","sdk.Scribe","sdk.URI","UrlMap","JSSDKXDConfig","XDM","isFacebookURI","sdk.createIframe","sdk.feature","guid"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=new k(),x=new k(),y=new k(),z,aa,ba=v(),ca=q.useCdn?'cdn':'www',da=u('use_bundle',false)?q.XdBundleUrl:q.XdUrl,ea=p.resolve(ca,false)+da,fa=p.resolve(ca,true)+da,ga=v(),ha=location.protocol+'//'+location.host,ia,ja=false,ka='Facebook Cross Domain Communication Frame',la={},ma=new k();l.setInQueue(ma);function na(ta){i.info('Remote XD can talk to facebook.com (%s)',ta);m.setEnvironment(ta==='canvas'?m.ENVIRONMENTS.CANVAS:m.ENVIRONMENTS.PAGETAB);}function oa(ta,ua){if(!ua){i.error('No senderOrigin');throw new Error();}var va=/^https?/.exec(ua)[0];switch(ta.xd_action){case 'proxy_ready':var wa,xa;if(va=='https'){wa=y;xa=aa;}else{wa=x;xa=z;}if(ta.registered){na(ta.registered);w=wa.merge(w);}i.info('Proxy ready, starting queue %s containing %s messages',va+'ProxyQueue',wa.getLength());wa.start(function(za){ia.send(typeof za==='string'?za:j.encode(za),ua,xa.contentWindow,ga+'_'+va);});break;case 'plugin_ready':i.info('Plugin %s ready, protocol: %s',ta.name,va);la[ta.name]={protocol:va};if(k.exists(ta.name)){var ya=k.get(ta.name);i.debug('Enqueuing %s messages for %s in %s',ya.getLength(),ta.name,va+'ProxyQueue');(va=='https'?y:x).merge(ya);}break;}if(ta.data)pa(ta.data,ua);}function pa(ta,ua){if(ua&&ua!=='native'&&!s(o(ua)))return;if(typeof ta=='string'){if(/^FB_RPC:/.test(ta)){ma.enqueue(ta.substring(7));return;}if(ta.substring(0,1)=='{'){try{ta=ES('JSON','parse',false,ta);}catch(va){i.warn('Failed to decode %s as JSON',ta);return;}}else ta=j.decode(ta);}if(!ua)if(ta.xd_sig==ba)ua=ta.xd_origin;if(ta.xd_action){oa(ta,ua);return;}if(ta.access_token)m.setSecure(/^https/.test(ha));if(ta.cb){var wa=sa._callbacks[ta.cb];if(!sa._forever[ta.cb])delete sa._callbacks[ta.cb];if(wa)wa(ta);}}function qa(ta,ua){if(ta=='facebook'){ua.relation='parent.parent';w.enqueue(ua);}else{ua.relation='parent.frames["'+ta+'"]';var va=la[ta];if(va){i.debug('Enqueuing message for plugin %s in %s',ta,va.protocol+'ProxyQueue');(va.protocol=='https'?y:x).enqueue(ua);}else{i.debug('Buffering message for plugin %s',ta);k.get(ta).enqueue(ua);}}}l.getOutQueue().start(function(ta){qa('facebook','FB_RPC:'+ta);});function ra(ta){if(ja)return;var ua=g.appendHidden(document.createElement('div')),va=r.create({blacklist:null,root:ua,channel:ga,flashUrl:q.Flash.path,whenReady:function(wa){ia=wa;var xa={channel:ga,origin:location.protocol+'//'+location.host,transport:va,xd_name:ta},ya='#'+j.encode(xa);if(m.getSecure()!==true)z=t({url:ea+ya,name:'fb_xdm_frame_http',id:'fb_xdm_frame_http',root:ua,'aria-hidden':true,title:ka,tabindex:-1});aa=t({url:fa+ya,name:'fb_xdm_frame_https',id:'fb_xdm_frame_https',root:ua,'aria-hidden':true,title:ka,tabindex:-1});},onMessage:pa});if(!va)n.log('jssdk_error',{appId:m.getClientID(),error:'XD_TRANSPORT',extra:{message:'Failed to create a valid transport'}});ja=true;}var sa={rpc:l,_callbacks:{},_forever:{},_channel:ga,_origin:ha,onMessage:pa,recv:pa,init:ra,sendToFacebook:qa,inform:function(ta,ua,va,wa){qa('facebook',{method:ta,params:ES('JSON','stringify',false,ua||{}),behavior:wa||'p',relation:va});},handler:function(ta,ua,va,wa){var xa='#'+j.encode({cb:this.registerCallback(ta,va,wa),origin:ha+'/'+ga,domain:location.hostname,relation:ua||'opener'});return (location.protocol=='https:'?fa:ea)+xa;},registerCallback:function(ta,ua,va){va=va||v();if(ua)sa._forever[va]=true;sa._callbacks[va]=ta;return va;}};h.subscribe('init:post',function(ta){ra(ta.xdProxyName);var ua=u('xd_timeout',false);if(ua)setTimeout(function(){var va=aa&&(!!z==x.isStarted()&&!!aa==y.isStarted());if(!va)n.log('jssdk_error',{appId:m.getClientID(),error:'XD_INITIALIZATION',extra:{message:'Failed to initialize in '+ua+'ms'}});},ua);});e.exports=sa;},null);
__d("sdk.Auth",["sdk.Cookie","sdk.createIframe","DOMWrapper","sdk.feature","sdk.getContextType","guid","sdk.Impressions","Log","ObservableMixin","sdk.Runtime","sdk.SignedRequest","UrlMap","sdk.URI","sdk.XD"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u,v,w=new o();function x(da,ea){var fa=p.getUserID(),ga='';if(da)if(da.userID){ga=da.userID;}else if(da.signedRequest){var ha=q.parse(da.signedRequest);if(ha&&ha.user_id)ga=ha.user_id;}var ia=p.getLoginStatus(),ja=(ia==='unknown'&&da)||(p.getUseCookie()&&p.getCookieUserID()!==ga),ka=fa&&!da,la=da&&fa&&fa!=ga,ma=da!=u,na=ea!=(ia||'unknown');p.setLoginStatus(ea);p.setAccessToken(da&&da.accessToken||null);p.setUserID(ga);u=da;var oa={authResponse:da,status:ea};if(ka||la)w.inform('logout',oa);if(ja||la)w.inform('login',oa);if(ma)w.inform('authresponse.change',oa);if(na)w.inform('status.change',oa);return oa;}function y(){return u;}function z(da,ea,fa){return function(ga){var ha;if(ga&&ga.access_token){var ia=q.parse(ga.signed_request);ea={accessToken:ga.access_token,userID:ia.user_id,expiresIn:parseInt(ga.expires_in,10),signedRequest:ga.signed_request};if(ga.granted_scopes)ea.grantedScopes=ga.granted_scopes;if(p.getUseCookie()){var ja=ea.expiresIn===0?0:ES('Date','now',false)+ea.expiresIn*1000,ka=g.getDomain();if(!ka&&ga.base_domain)g.setDomain('.'+ga.base_domain);g.setSignedRequestCookie(ga.signed_request,ja);}ha='connected';x(ea,ha);}else if(fa==='logout'||fa==='login_status'){if(ga.error&&ga.error==='not_authorized'){ha='not_authorized';}else ha='unknown';x(null,ha);if(p.getUseCookie())g.clearSignedRequestCookie();}if(ga&&ga.https==1)p.setSecure(true);if(da)da({authResponse:ea,status:p.getLoginStatus()});return ea;};}function aa(da){var ea,fa=ES('Date','now',false);if(v){clearTimeout(v);v=null;}var ga=z(da,u,'login_status'),ha=s(r.resolve('www',true)+'/connect/ping').setQueryData({client_id:p.getClientID(),response_type:'token,signed_request,code',domain:location.hostname,origin:k(),redirect_uri:t.handler(function(ia){if(j('e2e_ping_tracking',true)){var ja={init:fa,close:ES('Date','now',false),method:'ping'};n.debug('e2e: %s',ES('JSON','stringify',false,ja));m.log(114,{payload:ja});}ea.parentNode.removeChild(ea);if(ga(ia))v=setTimeout(function(){aa(function(){});},1200000);},'parent'),sdk:'joey',kid_directed_site:p.getKidDirectedSite()});ea=h({root:i.getRoot(),name:l(),url:ha.toString(),style:{display:'none'}});}var ba;function ca(da,ea){if(!p.getClientID()){n.warn('FB.getLoginStatus() called before calling FB.init().');return;}if(da)if(!ea&&ba=='loaded'){da({status:p.getLoginStatus(),authResponse:y()});return;}else w.subscribe('FB.loginStatus',da);if(!ea&&ba=='loading')return;ba='loading';var fa=function(ga){ba='loaded';w.inform('FB.loginStatus',ga);w.clearSubscribers('FB.loginStatus');};aa(fa);}ES('Object','assign',false,w,{getLoginStatus:ca,fetchLoginStatus:aa,setAuthResponse:x,getAuthResponse:y,parseSignedRequest:q.parse,xdResponseWrapper:z});e.exports=w;},null);
__d("toArray",["invariant"],function(a,b,c,d,e,f,g){function h(i){var j=i.length;g(!ES('Array','isArray',false,i)&&(typeof i==='object'||typeof i==='function'));g(typeof j==='number');g(j===0||(j-1) in i);if(i.hasOwnProperty)try{return Array.prototype.slice.call(i);}catch(k){}var l=Array(j);for(var m=0;m<j;m++)l[m]=i[m];return l;}e.exports=h;},null);
__d("createArrayFromMixed",["toArray"],function(a,b,c,d,e,f,g){function h(j){return (!!j&&(typeof j=='object'||typeof j=='function')&&('length' in j)&&!('setInterval' in j)&&(typeof j.nodeType!='number')&&(ES('Array','isArray',false,j)||('callee' in j)||('item' in j)));}function i(j){if(!h(j)){return [j];}else if(ES('Array','isArray',false,j)){return j.slice();}else return g(j);}e.exports=i;},null);
__d("sdk.DOM",["Assert","sdk.UA","createArrayFromMixed","sdk.domReady"],function(a,b,c,d,e,f,g,h,i,j){var k={};function l(z,aa){var ba=(z.getAttribute(aa)||z.getAttribute(aa.replace(/_/g,'-'))||z.getAttribute(aa.replace(/-/g,'_'))||z.getAttribute(aa.replace(/-/g,''))||z.getAttribute(aa.replace(/_/g,''))||z.getAttribute('data-'+aa)||z.getAttribute('data-'+aa.replace(/_/g,'-'))||z.getAttribute('data-'+aa.replace(/-/g,'_'))||z.getAttribute('data-'+aa.replace(/-/g,''))||z.getAttribute('data-'+aa.replace(/_/g,'')));return ba?String(ba):null;}function m(z,aa){var ba=l(z,aa);return ba?/^(true|1|yes|on)$/.test(ba):null;}function n(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{return String(z[aa]);}catch(ba){throw new Error('Could not read property '+aa+' : '+ba.message);}}function o(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);try{z.innerHTML=aa;}catch(ba){throw new Error('Could not set innerHTML : '+ba.message);}}function p(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=' '+n(z,'className')+' ';return ES(ba,'indexOf',true,' '+aa+' ')>=0;}function q(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);if(!p(z,aa))z.className=n(z,'className')+' '+aa;}function r(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);var ba=new RegExp('\\s*'+aa,'g');z.className=ES(n(z,'className').replace(ba,''),'trim',true);}function s(z,aa,ba){g.isString(z);aa=aa||document.body;ba=ba||'*';if(aa.querySelectorAll)return i(aa.querySelectorAll(ba+'.'+z));var ca=aa.getElementsByTagName(ba),da=[];for(var ea=0,fa=ca.length;ea<fa;ea++)if(p(ca[ea],z))da[da.length]=ca[ea];return da;}function t(z,aa){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(da,ea){return ea.toUpperCase();});var ba=z.currentStyle||document.defaultView.getComputedStyle(z,null),ca=ba[aa];if(/backgroundPosition?/.test(aa)&&/top|left/.test(ca))ca='0%';return ca;}function u(z,aa,ba){g.isTruthy(z,'element not specified');g.isString(aa);aa=aa.replace(/-(\w)/g,function(ca,da){return da.toUpperCase();});z.style[aa]=ba;}function v(z,aa){var ba=true;for(var ca=0,da;da=aa[ca++];)if(!(da in k)){ba=false;k[da]=true;}if(ba)return;if(h.ie()<11){try{document.createStyleSheet().cssText=z;}catch(ea){if(document.styleSheets[0])document.styleSheets[0].cssText+=z;}}else{var fa=document.createElement('style');fa.type='text/css';fa.textContent=z;document.getElementsByTagName('head')[0].appendChild(fa);}}function w(){var z=(document.documentElement&&document.compatMode=='CSS1Compat')?document.documentElement:document.body;return {scrollTop:z.scrollTop||document.body.scrollTop,scrollLeft:z.scrollLeft||document.body.scrollLeft,width:window.innerWidth?window.innerWidth:z.clientWidth,height:window.innerHeight?window.innerHeight:z.clientHeight};}function x(z){g.isTruthy(z,'element not specified');var aa=0,ba=0;do{aa+=z.offsetLeft;ba+=z.offsetTop;}while(z=z.offsetParent);return {x:aa,y:ba};}var y={containsCss:p,addCss:q,removeCss:r,getByClass:s,getStyle:t,setStyle:u,getAttr:l,getBoolAttr:m,getProp:n,html:o,addCssRules:v,getViewportInfo:w,getPosition:x,ready:j};e.exports=y;},null);
__d("sdk.ErrorHandling",["ManagedError","sdk.Runtime","sdk.Scribe","sdk.UA","sdk.feature","wrapFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=k('error_handling',false),n='';function o(u){var v=u._originalError;delete u._originalError;i.log('jssdk_error',{appId:h.getClientID(),error:u.name||u.message,extra:u});throw v;}function p(u){var v={line:u.lineNumber||u.line,message:u.message,name:u.name,script:u.fileName||u.sourceURL||u.script,stack:u.stackTrace||u.stack};v._originalError=u;if(j.chrome()&&/([\w:\.\/]+\.js):(\d+)/.test(u.stack)){v.script=RegExp.$1;v.line=parseInt(RegExp.$2,10);}for(var w in v)(v[w]==null&&delete v[w]);return v;}function q(u,v){return function(){if(!m)return u.apply(this,arguments);try{n=v;return u.apply(this,arguments);}catch(w){if(w instanceof g)throw w;var x=p(w);x.entry=v;var y=ES(Array.prototype.slice.call(arguments),'map',true,function(z){var aa=Object.prototype.toString.call(z);return (/^\[object (String|Number|Boolean|Object|Date)\]$/).test(aa)?z:z.toString();});x.args=ES('JSON','stringify',false,y).substring(0,200);o(x);}finally{n='';}};}function r(u){if(!u.__wrapper)u.__wrapper=function(){try{return u.apply(this,arguments);}catch(v){window.setTimeout(function(){throw v;},0);return false;}};return u.__wrapper;}function s(u,v){return function(w,x){var y=v+':'+(n||'[global]')+':'+(w.name||'[anonymous]'+(arguments.callee.caller.name?'('+arguments.callee.caller.name+')':''));return u(l(w,'entry',y),x);};}if(m){setTimeout=s(setTimeout,'setTimeout');setInterval=s(setInterval,'setInterval');l.setWrapper(q,'entry');}var t={guard:q,unguard:r};e.exports=t;},null);
__d("sdk.Insights",["sdk.Impressions"],function(a,b,c,d,e,f,g){var h={TYPE:{NOTICE:'notice',WARNING:'warn',ERROR:'error'},CATEGORY:{DEPRECATED:'deprecated',APIERROR:'apierror'},log:function(i,j,k){var l={source:'jssdk',type:i,category:j,payload:k};g.log(113,l);},impression:g.impression};e.exports=h;},null);
__d("FB",["sdk.Auth","JSSDKCssConfig","dotAccess","sdk.domReady","sdk.DOM","sdk.ErrorHandling","sdk.Content","DOMWrapper","GlobalCallback","sdk.Insights","Log","sdk.Runtime","sdk.Scribe","JSSDKConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u,v,w=i(t,'api.mode'),x={};u=window.FB={};var y={};q.level=1;o.setPrefix('FB.__globalCallbacks');var z=document.createElement('div');n.setRoot(z);j(function(){q.info('domReady');m.appendHidden(z);if(h.rules)k.addCssRules(h.rules,h.components);});r.subscribe('AccessToken.change',function(ca){if(!ca&&r.getLoginStatus()==='connected')g.getLoginStatus(null,true);});if(i(t,'api.whitelist.length')){v={};ES(t.api.whitelist,'forEach',true,function(ca){v[ca]=1;});}function aa(ca,da,ea,fa){var ga;if(/^_/.test(ea)){ga='hide';}else if(v&&!v[da])ga=w;switch(ga){case 'hide':return;case 'stub':return function(){q.warn('The method FB.%s has been removed from the JS SDK.',da);};break;default:return l.guard(function(){if(ga==='warn'){q.warn('The method FB.%s is not officially supported by '+'Facebook and access to it will soon be removed.',da);if(!x.hasOwnProperty(da)){p.log(p.TYPE.WARNING,p.CATEGORY.DEPRECATED,'FB.'+da);s.log('jssdk_error',{appId:r.getClientID(),error:'Private method used',extra:{args:da}});x[da]=true;}}function ha(oa){if(ES('Array','isArray',false,oa))return ES(oa,'map',true,ha);if(oa&&typeof oa==='object'&&oa.__wrapped)return oa.__wrapped;return typeof oa==='function'&&/^function/.test(oa.toString())?l.unguard(oa):oa;}var ia=ES(Array.prototype.slice.call(arguments),'map',true,ha),ja=ca.apply(fa,ia),ka,la=true;if(ja&&typeof ja==='object'){ka=ES('Object','create',false,ja);ka.__wrapped=ja;for(var ma in ja){var na=ja[ma];if(typeof na!=='function'||ma==='constructor')continue;la=false;ka[ma]=aa(na,da+':'+ma,ma,ja);}}if(!la)return ka;return la?ja:ka;},da);}}function ba(ca,da){var ea=ca?i(u,ca,true):u;ES(ES('Object','keys',false,da),'forEach',true,function(fa){var ga=da[fa];if(typeof ga==='function'){var ha=(ca?ca+'.':'')+fa,ia=aa(ga,ha,fa,da);if(ia)ea[fa]=ia;}else if(typeof ga==='object'){ha=(ca?ca+'.':'')+fa;if(v&&v[ha])ea[fa]=ga;}});}r.setSecure((function(){var ca=/iframe_canvas|app_runner/.test(window.name),da=/dialog/.test(window.name);if(location.protocol=='https:'&&(window==top||!(ca||da)))return true;if(/_fb_https?/.test(window.name))return ES(window.name,'indexOf',true,'_fb_https')!=-1;})());ES('Object','assign',false,y,{provide:ba});e.exports=y;},null);
__d("ArgumentError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i,j){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("CORSRequest",["wrapFunction","QueryString"],function(a,b,c,d,e,f,g,h){function i(l,m){if(!self.XMLHttpRequest)return null;var n=new XMLHttpRequest(),o=function(){};if('withCredentials' in n){n.open(l,m,true);n.setRequestHeader('Content-type','application/x-www-form-urlencoded');}else if(self.XDomainRequest){n=new XDomainRequest();try{n.open(l,m);n.onprogress=n.ontimeout=o;}catch(p){return null;}}else return null;var q={send:function(t){n.send(t);}},r=g(function(){r=o;if('onload' in q)q.onload(n);},'entry','XMLHttpRequest:load'),s=g(function(){s=o;if('onerror' in q)q.onerror(n);},'entry','XMLHttpRequest:error');n.onload=function(){r();};n.onerror=function(){s();};n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200){r();}else s();};return q;}function j(l,m,n,o){n.suppress_http_code=1;var p=h.encode(n);if(m!='post'){l=h.appendToUrl(l,p);p='';}var q=i(m,l);if(!q)return false;q.onload=function(r){o(ES('JSON','parse',false,r.responseText));};q.onerror=function(r){if(r.responseText){o(ES('JSON','parse',false,r.responseText));}else o({error:{type:'http',message:'unknown error',status:r.status}});};q.send(p);return true;}var k={execute:j};e.exports=k;},null);
__d("FlashRequest",["DOMWrapper","Flash","GlobalCallback","QueryString","Queue"],function(a,b,c,d,e,f,g,h,i,j,k){var l,m={},n,o;function p(){if(!n)throw new Error('swfUrl has not been set');var s=i.create(function(){l.start(function(u){var v=o.execute(u.method,u.url,u.body);if(!v)throw new Error('Could create request');m[v]=u.callback;});}),t=i.create(function(u,v,w){var x;try{x=ES('JSON','parse',false,decodeURIComponent(w));}catch(y){x={error:{type:'SyntaxError',message:y.message,status:v,raw:w}};}m[u](x);delete m[u];});o=h.embed(n,g.getRoot(),null,{log:false,initCallback:s,requestCallback:t});}function q(s,t,u,v){u.suppress_http_code=1;if(!u.method)u.method=t;var w=j.encode(u);if(t==='get'&&s.length+w.length<2000){s=j.appendToUrl(s,w);w='';}else t='post';if(!l){if(!h.isAvailable())return false;l=new k();p();}l.enqueue({method:t,url:s,body:w,callback:v});return true;}var r={setSwfUrl:function(s){n=s;},execute:q};e.exports=r;},null);
__d("flattenObject",[],function(a,b,c,d,e,f){function g(h){var i={};for(var j in h)if(h.hasOwnProperty(j)){var k=h[j];if(null===k||(void 0)===k){continue;}else if(typeof k=='string'){i[j]=k;}else i[j]=ES('JSON','stringify',false,k);}return i;}e.exports=g;},null);
__d("JSONPRequest",["DOMWrapper","GlobalCallback","QueryString"],function(a,b,c,d,e,f,g,h,i){function j(l,m,n,o){var p=document.createElement('script'),q=function(s){q=function(){};h.remove(n.callback);o(s);p.parentNode.removeChild(p);};n.callback=h.create(q);if(!n.method)n.method=m;l=i.appendToUrl(l,n);if(l.length>2000){h.remove(n.callback);return false;}p.onerror=function(){q({error:{type:'http',message:'unknown error'}});};var r=function(){setTimeout(function(){q({error:{type:'http',message:'unknown error'}});},0);};if(p.addEventListener){p.addEventListener('load',r,false);}else p.onreadystatechange=function(){if(/loaded|complete/.test(this.readyState))r();};p.src=l;g.getRoot().appendChild(p);return true;}var k={execute:j};e.exports=k;},null);
__d("ApiClient",["ArgumentError","Assert","CORSRequest","FlashRequest","flattenObject","JSONPRequest","Log","ObservableMixin","QueryString","sprintf","sdk.URI","UrlMap","ApiClientConfig","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u,v,w,x={get:true,post:true,'delete':true,put:true},y={fql_query:true,fql_multiquery:true,friends_get:true,notifications_get:true,stream_get:true,users_getinfo:true},z=[],aa=[],ba=null,ca=50,da=105440539523;function ea(ma,na,oa,pa){if(w)oa=ES('Object','assign',false,{},w,oa);oa.access_token=oa.access_token||u;oa.pretty=oa.pretty||0;oa=k(oa);var qa={jsonp:l,cors:i,flash:j},ra;if(oa.transport){ra=[oa.transport];delete oa.transport;}else ra=['jsonp','cors','flash'];for(var sa=0;sa<ra.length;sa++){var ta=qa[ra[sa]],ua=ES('Object','assign',false,{},oa);if(ta.execute(ma,na,ua,pa))return;}pa({error:{type:'no-transport',message:'Could not find a usable transport for request'}});}function fa(ma,na,oa,pa,qa,ra){if(ra&&ra.error)la.inform('request.error',na,oa,pa,ra,ES('Date','now',false)-qa);la.inform('request.complete',na,oa,pa,ra,ES('Date','now',false)-qa);if(ma)ma(ra);}function ga(ma){var na=ma.shift();h.isString(na,'Invalid path');if(!/^https?/.test(na)&&na.charAt(0)!=='/')na='/'+na;var oa,pa={};try{oa=new q(na);}catch(qa){throw new g(qa.message,qa);}ES(ma,'forEach',true,function(ua){return pa[typeof ua]=ua;});var ra=(pa.string||'get').toLowerCase();h.isTrue(x.hasOwnProperty(ra),p('Invalid method passed to ApiClient: %s',ra));var sa=pa['function'];if(!sa)m.warn('No callback passed to the ApiClient');if(pa.object)oa.addQueryData(k(pa.object));var ta=oa.getQueryData();ta.method=ra;return {uri:oa,callback:sa,params:ta};}function ha(){for(var ma=[],na=0,oa=arguments.length;na<oa;na++)ma.push(arguments[na]);var pa=ga(ma),qa=pa.uri,ra=pa.callback,sa=pa.params,ta=sa.method,ua=qa.getProtocol()&&qa.getDomain()?qa.setQueryData({}).toString():r.resolve('graph')+qa.getPath();la.inform('request.prepare',ua,sa);ea(ua,ta=='get'?'get':'post',sa,ES(fa,'bind',true,null,ra,qa.getPath(),ta,sa,ES('Date','now',false)));}function ia(){for(var ma=[],na=0,oa=arguments.length;na<oa;na++)ma.push(arguments[na]);var pa=ga(ma),qa=pa.uri,ra=pa.callback,sa=pa.params,ta=sa.method,ua={method:ta,relative_url:qa.removeQueryData('method').toString()};if(ta.toLowerCase()=='post'){ua.body=o.encode(qa.getQueryData());ua.relative_url=qa.setQueryData({}).toString();}z.push(ua);aa.push(ra);if(z.length==ca){if(ba)clearTimeout(ba);ja();}else if(!ba)ba=setTimeout(ja,0);}function ja(){t(z.length>0);t(z.length===aa.length);var ma=z,na=aa;z=[];aa=[];ba=null;if(ma.length===1){var oa=ma[0],pa=na[0],qa=oa.body?o.decode(oa.body):null;ha(oa.relative_url,oa.method,qa,pa);return;}ha('/','POST',{batch:ma,include_headers:false,batch_app_id:v||da},function(ra){if(ES('Array','isArray',false,ra)){ES(ra,'forEach',true,function(sa,ta){na[ta](ES('JSON','parse',false,sa.body));});}else ES(na,'forEach',true,function(sa){return sa({error:{message:'Fatal: batch call failed.'}});});});}function ka(ma,na){h.isObject(ma);h.isString(ma.method,'method missing');if(!na)m.warn('No callback passed to the ApiClient');var oa=ma.method.toLowerCase().replace('.','_');ma.format='json-strings';ma.api_key=v;var pa=oa in y?'api_read':'api',qa=r.resolve(pa)+'/restserver.php',ra=ES(fa,'bind',true,null,na,'/restserver.php','get',ma,ES('Date','now',false));ea(qa,'get',ma,ra);}var la=ES('Object','assign',false,new n(),{setAccessToken:function(ma){u=ma;},setClientID:function(ma){v=ma;},setDefaultParams:function(ma){w=ma;},rest:ka,graph:ha,scheduleBatchCall:ia});j.setSwfUrl(s.FlashRequest.swfUrl);e.exports=la;},null);
__d("sdk.PlatformVersioning",["sdk.Runtime","ManagedError"],function(a,b,c,d,e,f,g,h){var i=/^v\d+\.\d\d?$/,j={REGEX:i,assertVersionIsSet:function(){if(!g.getVersion())throw new h('init not called with valid version');},assertValidVersion:function(k){if(!i.test(k))throw new h('invalid version specified');}};e.exports=j;},null);
__d("sdk.api",["ApiClient","sdk.PlatformVersioning","sdk.Runtime","sdk.Scribe","sdk.URI","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=l('should_log_response_error',false),n;i.subscribe('ClientID.change',function(p){return g.setClientID(p);});i.subscribe('AccessToken.change',function(p){n=p;g.setAccessToken(p);});g.setDefaultParams({sdk:'joey'});g.subscribe('request.complete',function(p,q,r,s){var t=false;if(s&&typeof s=='object')if(s.error){if(s.error=='invalid_token'||(s.error.type=='OAuthException'&&s.error.code==190))t=true;}else if(s.error_code)if(s.error_code=='190')t=true;if(t&&n===i.getAccessToken())i.setAccessToken(null);});g.subscribe('request.complete',function(p,q,r,s){if(((p=='/me/permissions'&&q==='delete')||(p=='/restserver.php'&&r.method=='Auth.revokeAuthorization'))&&s===true)i.setAccessToken(null);});g.subscribe('request.error',function(p,q,r,s){if(m&&s.error.type==='http')j.log('jssdk_error',{appId:i.getClientID(),error:'transport',extra:{name:'transport',message:ES('JSON','stringify',false,s.error)}});});function o(p){if(typeof p==='string'){if(i.getIsVersioned()){h.assertVersionIsSet();if(!/https?/.test(p)&&p.charAt(0)!=='/')p='/'+p;p=k(p).setDomain(null).setProtocol(null).toString();if(!h.REGEX.test(p.substring(1,ES(p,'indexOf',true,'/',1))))p='/'+i.getVersion()+p;var q=[p].concat(Array.prototype.slice.call(arguments,1));g.graph.apply(g,q);}else g.graph.apply(g,arguments);}else g.rest.apply(g,arguments);}e.exports=o;},null);
__d("legacy:fb.api",["FB","sdk.api"],function(a,b,c,d,e,f,g,h){g.provide('',{api:h});},3);
__d("merge",[],function(a,b,c,d,e,f){"use strict";var g=function(h,i){return ES('Object','assign',false,{},h,i);};e.exports=g;},null);
__d("sdk.AppEvents",["Assert","sdk.Impressions","merge","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j){var k={COMPLETED_REGISTRATION:'fb_mobile_complete_registration',VIEWED_CONTENT:'fb_mobile_content_view',SEARCHED:'fb_mobile_search',RATED:'fb_mobile_rate',COMPLETED_TUTORIAL:'fb_mobile_tutorial_completion',ADDED_TO_CART:'fb_mobile_add_to_cart',ADDED_TO_WISHLIST:'fb_mobile_add_to_wishlist',INITIATED_CHECKOUT:'fb_mobile_initiated_checkout',ADDED_PAYMENT_INFO:'fb_mobile_add_payment_info',ACHIEVED_LEVEL:'fb_mobile_level_achieved',UNLOCKED_ACHIEVEMENT:'fb_mobile_achievement_unlocked',SPENT_CREDITS:'fb_mobile_spent_credits'},l={ACTIVATED_APP:'fb_mobile_activate_app',PURCHASED:'fb_mobile_purchase'},m={CURRENCY:'fb_currency',REGISTRATION_METHOD:'fb_registration_method',CONTENT_TYPE:'fb_content_type',CONTENT_ID:'fb_content_id',SEARCH_STRING:'fb_search_string',SUCCESS:'fb_success',MAX_RATING_VALUE:'fb_max_rating_value',PAYMENT_INFO_AVAILABLE:'fb_payment_info_available',NUM_ITEMS:'fb_num_items',LEVEL:'fb_level',DESCRIPTION:'fb_description'},n=40,o='^[0-9a-zA-Z_]+[0-9a-zA-Z _-]*$';function p(t,u,v,w){g.isTrue(q(u),'Invalid event name: '+u+'. '+'It must be between 1 and '+n+' characters, '+'and must be contain only alphanumerics, _, - or spaces, '+'starting with alphanumeric or _.');var x={ae:1,ev:u,vts:v,canvas:j.isCanvasEnvironment()?1:0};if(w)x.cd=w;h.impression({api_key:t,payload:ES('JSON','stringify',false,x)});}function q(t){if(t===null||t.length===0||t.length>n||!(new RegExp(o)).test(t))return false;return true;}function r(t,u,v,w){var x={};x[m.CURRENCY]=v;p(t,l.PURCHASED,u,i(w,x));}function s(t){p(t,l.ACTIVATED_APP);}e.exports={activateApp:s,logEvent:p,logPurchase:r,isValidEventName:q,EventNames:k,ParameterNames:m};},null);
__d("legacy:fb.appevents",["Assert","sdk.AppEvents","FB","sdk.feature","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j,k){i.provide('AppEvents',{logEvent:function(l,m,n){g.isTrue(j('allow_non_canvas_app_events',false)||k.isCanvasEnvironment(),'You can only use this function in Facebook Canvas environment');g.isString(l,'Invalid eventName');g.maybeNumber(m,'Invalid valueToSum');g.maybeObject(n,'Invalid params');var o=k.getClientID();g.isTrue(o!==null&&o.length>0,'You need to call FB.init() with App ID first.');h.logEvent(o,l,m,n);},logPurchase:function(l,m,n){g.isTrue(j('allow_non_canvas_app_events',false)||k.isCanvasEnvironment(),'You can only use this function in Facebook Canvas environment');g.isNumber(l,'Invalid purchaseAmount');g.isString(m,'Invalid currency');g.maybeObject(n,'Invalid params');var o=k.getClientID();g.isTrue(o!==null&&o.length>0,'You need to call FB.init() with App ID first.');h.logPurchase(o,l,m,n);},activateApp:function(){g.isTrue(j('allow_non_canvas_app_events',false)||k.isCanvasEnvironment(),'You can only use this function in Facebook Canvas environment');var l=k.getClientID();g.isTrue(l!==null&&l.length>0,'You need to call FB.init() with App ID first.');h.activateApp(l);},EventNames:h.EventNames,ParameterNames:h.ParameterNames});},3);
__d("sdk.Canvas.Environment",["sdk.RPC"],function(a,b,c,d,e,f,g){function h(k){g.remote.getPageInfo(function(l){k(l.result);});}function i(k,l){g.remote.scrollTo({x:k||0,y:l||0});}g.stub('getPageInfo');g.stub('scrollTo');var j={getPageInfo:h,scrollTo:i};e.exports=j;},null);
__d("sdk.fbt",[],function(a,b,c,d,e,f){var g={_:function(h){return typeof h==='string'?h:h[0];}};e.exports=g;},null);
__d("sdk.Dialog",["sdk.Canvas.Environment","sdk.Content","sdk.DOM","DOMEventListener","ObservableMixin","sdk.Runtime","Type","sdk.UA","sdk.fbt","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=590,r=500,s=240,t=575,u=function(){var y;if(p('dialog_resize_refactor',false)){var z=v();y=z&&(z.height>=q||z.width>=r);}else y=!!n.ipad();u=function(){return y;};return y;};function v(){if(p('dialog_resize_refactor',false)){var y=i.getViewportInfo();if(y.height&&y.width)return {width:Math.min(y.width,q),height:Math.min(y.height,r)};}return null;}var w=m.extend({constructor:function y(z,aa){this.parent();this.id=z;this.display=aa;this._e2e={};if(!x._dialogs){x._dialogs={};x._addOrientationHandler();}x._dialogs[z]=this;this.trackEvent('init');},trackEvent:function(y,z){if(this._e2e[y])return this;this._e2e[y]=z||ES('Date','now',false);if(y=='close')this.inform('e2e:end',this._e2e);return this;},trackEvents:function(y){if(typeof y==='string')y=ES('JSON','parse',false,y);for(var z in y)if(y.hasOwnProperty(z))this.trackEvent(z,y[z]);return this;}},k),x={newInstance:function(y,z){return new w(y,z);},_dialogs:null,_lastYOffset:0,_loaderEl:null,_overlayEl:null,_stack:[],_active:null,get:function(y){return x._dialogs[y];},_findRoot:function(y){while(y){if(i.containsCss(y,'fb_dialog'))return y;y=y.parentNode;}},_createWWWLoader:function(y){y=y?y:460;return x.create({content:('<div class="dialog_title">'+'  <a id="fb_dialog_loader_close">'+'    <div class="fb_dialog_close_icon"></div>'+'  </a>'+'  <span>Facebook</span>'+'  <div style="clear:both;"></div>'+'</div>'+'<div class="dialog_content"></div>'+'<div class="dialog_footer"></div>'),width:y});},_createMobileLoader:function(){var y=n.nativeApp()?'':('<table>'+'  <tbody>'+'    <tr>'+'      <td class="header_left">'+'        <label class="touchable_button">'+'          <input type="submit" value="'+"Cancel"+'"'+'            id="fb_dialog_loader_close"/>'+'        </label>'+'      </td>'+'      <td class="header_center">'+'        <div>'+'         '+"Loading..."+'        </div>'+'      </td>'+'      <td class="header_right">'+'      </td>'+'    </tr>'+'  </tbody>'+'</table>');return x.create({classes:'loading'+(u()?' centered':''),content:('<div class="dialog_header">'+y+'</div>')});},_restoreBodyPosition:function(){if(!u()){var y=document.getElementsByTagName('body')[0];i.removeCss(y,'fb_hidden');}},_showTabletOverlay:function(){if(!u())return;if(!x._overlayEl){x._overlayEl=document.createElement('div');x._overlayEl.setAttribute('id','fb_dialog_ipad_overlay');h.append(x._overlayEl,null);}x._overlayEl.className='';},_hideTabletOverlay:function(){if(u())x._overlayEl.className='hidden';},showLoader:function(y,z){x._showTabletOverlay();if(!x._loaderEl)x._loaderEl=x._findRoot(n.mobile()?x._createMobileLoader():x._createWWWLoader(z));if(!y)y=function(){};var aa=document.getElementById('fb_dialog_loader_close');i.removeCss(aa,'fb_hidden');aa.onclick=function(){x._hideLoader();x._restoreBodyPosition();x._hideTabletOverlay();y();};var ba=document.getElementById('fb_dialog_ipad_overlay');if(ba)ba.ontouchstart=aa.onclick;x._makeActive(x._loaderEl);},_hideLoader:function(){if(x._loaderEl&&x._loaderEl==x._active)x._loaderEl.style.top='-10000px';},_makeActive:function(y){x._setDialogSizes();x._lowerActive();x._active=y;if(l.isEnvironment(l.ENVIRONMENTS.CANVAS))g.getPageInfo(function(z){x._centerActive(z);});x._centerActive();},_lowerActive:function(){if(!x._active)return;x._active.style.top='-10000px';x._active=null;},_removeStacked:function(y){x._stack=ES(x._stack,'filter',true,function(z){return z!=y;});},_centerActive:function(y){var z=x._active;if(!z)return;var aa=i.getViewportInfo(),ba=parseInt(z.offsetWidth,10),ca=parseInt(z.offsetHeight,10),da=aa.scrollLeft+(aa.width-ba)/2,ea=(aa.height-ca)/2.5;if(da<ea)ea=da;var fa=aa.height-ca-ea,ga=(aa.height-ca)/2;if(y)ga=y.scrollTop-y.offsetTop+(y.clientHeight-ca)/2;if(ga<ea){ga=ea;}else if(ga>fa)ga=fa;ga+=aa.scrollTop;if(n.mobile()){var ha=100;if(u()){ha+=(aa.height-ca)/2;}else{var ia=document.getElementsByTagName('body')[0];i.addCss(ia,'fb_hidden');if(p('dialog_resize_refactor',false))ia.style.width='auto';ga=10000;}var ja=i.getByClass('fb_dialog_padding',z);if(ja.length)ja[0].style.height=ha+'px';}z.style.left=(da>0?da:0)+'px';z.style.top=(ga>0?ga:0)+'px';},_setDialogSizes:function(){if(!n.mobile()||u())return;for(var y in x._dialogs)if(x._dialogs.hasOwnProperty(y)){var z=document.getElementById(y);if(z){z.style.width=x.getDefaultSize().width+'px';z.style.height=x.getDefaultSize().height+'px';}}},getDefaultSize:function(){if(n.mobile()){var y=v();if(y)return y;if(n.ipad())return {width:r,height:q};if(n.android()){return {width:screen.availWidth,height:screen.availHeight};}else{var z=window.innerWidth,aa=window.innerHeight,ba=z/aa>1.2;return {width:z,height:Math.max(aa,(ba?screen.width:screen.height))};}}return {width:t,height:s};},_handleOrientationChange:function(y){var z=p('dialog_resize_refactor',false)?i.getViewportInfo().width:screen.availWidth;if(n.android()&&z==x._availScreenWidth){setTimeout(x._handleOrientationChange,50);return;}x._availScreenWidth=z;if(u()){x._centerActive();}else{var aa=x.getDefaultSize().width;for(var ba in x._dialogs)if(x._dialogs.hasOwnProperty(ba)){var ca=document.getElementById(ba);if(ca)ca.style.width=aa+'px';}}},_addOrientationHandler:function(){if(!n.mobile())return;var y="onorientationchange" in window?'orientationchange':'resize';x._availScreenWidth=p('dialog_resize_refactor',false)?i.getViewportInfo().width:screen.availWidth;j.add(window,y,x._handleOrientationChange);},create:function(y){y=y||{};var z=document.createElement('div'),aa=document.createElement('div'),ba='fb_dialog';if(y.closeIcon&&y.onClose){var ca=document.createElement('a');ca.className='fb_dialog_close_icon';ca.onclick=y.onClose;z.appendChild(ca);}ba+=' '+(y.classes||'');if(n.ie()){ba+=' fb_dialog_legacy';ES(['vert_left','vert_right','horiz_top','horiz_bottom','top_left','top_right','bottom_left','bottom_right'],'forEach',true,function(fa){var ga=document.createElement('span');ga.className='fb_dialog_'+fa;z.appendChild(ga);});}else ba+=n.mobile()?' fb_dialog_mobile':' fb_dialog_advanced';if(y.content)h.append(y.content,aa);z.className=ba;var da=parseInt(y.width,10);if(!isNaN(da))z.style.width=da+'px';aa.className='fb_dialog_content';z.appendChild(aa);if(n.mobile()){var ea=document.createElement('div');ea.className='fb_dialog_padding';z.appendChild(ea);}h.append(z);if(y.visible)x.show(z);return aa;},show:function(y){var z=x._findRoot(y);if(z){x._removeStacked(z);x._hideLoader();x._makeActive(z);x._stack.push(z);if('fbCallID' in y)x.get(y.fbCallID).inform('iframe_show').trackEvent('show');}},hide:function(y){var z=x._findRoot(y);x._hideLoader();if(z==x._active){x._lowerActive();x._restoreBodyPosition();x._hideTabletOverlay();if('fbCallID' in y)x.get(y.fbCallID).inform('iframe_hide').trackEvent('hide');}},remove:function(y){y=x._findRoot(y);if(y){var z=x._active==y;x._removeStacked(y);if(z){x._hideLoader();if(x._stack.length>0){x.show(x._stack.pop());}else{x._lowerActive();x._restoreBodyPosition();x._hideTabletOverlay();}}else if(x._active===null&&x._stack.length>0)x.show(x._stack.pop());setTimeout(function(){y.parentNode.removeChild(y);},3000);}},isActive:function(y){var z=x._findRoot(y);return z&&z===x._active;}};e.exports=x;},null);
__d("sdk.Frictionless",["sdk.Auth","sdk.api","sdk.Event","sdk.Dialog"],function(a,b,c,d,e,f,g,h,i,j){var k={_allowedRecipients:{},_useFrictionless:false,_updateRecipients:function(){k._allowedRecipients={};h('/me/apprequestformerrecipients',function(l){if(!l||l.error)return;ES(l.data,'forEach',true,function(m){k._allowedRecipients[m.recipient_id]=true;});});},init:function(){k._useFrictionless=true;g.getLoginStatus(function(l){if(l.status=='connected')k._updateRecipients();});i.subscribe('auth.login',function(l){if(l.authResponse)k._updateRecipients();});},_processRequestResponse:function(l,m){return function(n){var o=n&&n.updated_frictionless;if(k._useFrictionless&&o)k._updateRecipients();if(n){if(!m&&n.frictionless){j._hideLoader();j._restoreBodyPosition();j._hideIPadOverlay();}delete n.frictionless;delete n.updated_frictionless;}l&&l(n);};},isAllowed:function(l){if(!l)return false;if(typeof l==='number')return l in k._allowedRecipients;if(typeof l==='string')l=l.split(',');l=ES(l,'map',true,function(o){return ES(String(o),'trim',true);});var m=true,n=false;ES(l,'forEach',true,function(o){m=m&&o in k._allowedRecipients;n=true;});return m&&n;}};i.subscribe('init:post',function(l){if(l.frictionlessRequests)k.init();});e.exports=k;},null);
__d("sdk.Native",["Log","sdk.UA"],function(a,b,c,d,e,f,g,h){var i='fbNativeReady',j={onready:function(k){if(!h.nativeApp()){g.error('FB.Native.onready only works when the page is rendered '+'in a WebView of the native Facebook app. Test if this is the '+'case calling FB.UA.nativeApp()');return;}if(window.__fbNative&&!this.nativeReady)ES('Object','assign',false,this,window.__fbNative);if(this.nativeReady){k();}else{var l=function(m){window.removeEventListener(i,l);this.onready(k);};window.addEventListener(i,l,false);}}};e.exports=j;},null);
__d("resolveURI",[],function(a,b,c,d,e,f){function g(h){if(!h)return window.location.href;h=h.replace(/&/g,'&amp;').replace(/"/g,'&quot;');var i=document.createElement('div');i.innerHTML='<a href="'+h+'"></a>';return i.firstChild.href;}e.exports=g;},null);
__d("sdk.UIServer",["sdk.Auth","sdk.Content","sdk.DOM","sdk.Dialog","sdk.Event","sdk.Frictionless","Log","sdk.Native","QueryString","sdk.RPC","sdk.Runtime","JSSDKConfig","sdk.UA","UrlMap","sdk.XD","createObjectFrom","sdk.feature","flattenObject","sdk.getContextType","guid","insertIframe","resolveURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){var ca={transform:function(ia){if(ia.params.display==='touch'&&ia.params.access_token&&window.postMessage){ia.params.channel=ha._xdChannelHandler(ia.id,'parent');if(!s.nativeApp())ia.params.in_iframe=1;return ia;}else return ha.genericTransform(ia);},getXdRelation:function(ia){var ja=ia.display;if(ja==='touch'&&window.postMessage&&ia.in_iframe)return 'parent';return ha.getXdRelation(ia);}},da={'stream.share':{size:{width:670,height:340},url:'sharer.php',transform:function(ia){if(!ia.params.u)ia.params.u=window.location.toString();ia.params.display='popup';return ia;}},apprequests:{transform:function(ia){ia=ca.transform(ia);ia.params.frictionless=l&&l._useFrictionless;if(ia.params.frictionless){if(l.isAllowed(ia.params.to)){ia.params.display='iframe';ia.params.in_iframe=true;ia.hideLoader=true;}ia.cb=l._processRequestResponse(ia.cb,ia.hideLoader);}ia.closeIcon=false;return ia;},getXdRelation:ca.getXdRelation},feed:ca,'permissions.oauth':{url:'dialog/oauth',size:{width:(s.mobile()?null:475),height:(s.mobile()?null:183)},transform:function(ia){if(!q.getClientID()){m.error('FB.login() called before FB.init().');return;}if(g.getAuthResponse()&&!ia.params.scope&&!ia.params.auth_type){m.error('FB.login() called when user is already connected.');ia.cb&&ia.cb({status:q.getLoginStatus(),authResponse:g.getAuthResponse()});return;}var ja=ia.cb,ka=ia.id;delete ia.cb;var la=ES('Object','keys',false,ES('Object','assign',false,ia.params.response_type?v(ia.params.response_type.split(',')):{},{token:true,signed_request:true})).join(',');if(ia.params.display==='async'){ES('Object','assign',false,ia.params,{client_id:q.getClientID(),origin:y(),response_type:la,domain:location.hostname});ia.cb=g.xdResponseWrapper(ja,g.getAuthResponse(),'permissions.oauth');}else ES('Object','assign',false,ia.params,{client_id:q.getClientID(),redirect_uri:ba(ha.xdHandler(ja,ka,'opener',g.getAuthResponse(),'permissions.oauth')),origin:y(),response_type:la,domain:location.hostname});return ia;}},'auth.logout':{url:'logout.php',transform:function(ia){if(!q.getClientID()){m.error('FB.logout() called before calling FB.init().');}else if(!g.getAuthResponse()){m.error('FB.logout() called without an access token.');}else{ia.params.next=ha.xdHandler(ia.cb,ia.id,'parent',g.getAuthResponse(),'logout');return ia;}}},'login.status':{url:'dialog/oauth',transform:function(ia){var ja=ia.cb,ka=ia.id;delete ia.cb;ES('Object','assign',false,ia.params,{client_id:q.getClientID(),redirect_uri:ha.xdHandler(ja,ka,'parent',g.getAuthResponse(),'login_status'),origin:y(),response_type:'token,signed_request,code',domain:location.hostname});return ia;}},pay:{size:{width:555,height:120},connectDisplay:'popup'}},ea={};function fa(ia,ja){ea[ja]=true;return function(ka){delete ea[ja];ia(ka);};}function ga(ia){if(!w('should_force_single_dialog_instance',true))return false;var ja=ia.method.toLowerCase();if(ja==='pay'&&ia.display==='async')return true;return false;}var ha={Methods:da,_loadedNodes:{},_defaultCb:{},_resultToken:'"xxRESULTTOKENxx"',genericTransform:function(ia){if(ia.params.display=='dialog'||ia.params.display=='iframe')ES('Object','assign',false,ia.params,{display:'iframe',channel:ha._xdChannelHandler(ia.id,'parent.parent')},true);return ia;},checkOauthDisplay:function(ia){var ja=ia.scope||ia.perms||q.getScope();if(!ja)return ia.display;var ka=ja.split(/\s|,/g);for(var la=0;la<ka.length;la++)if(!r.initSitevars.iframePermissions[ES(ka[la],'trim',true)])return 'popup';return ia.display;},prepareCall:function(ia,ja){var ka=ia.method.toLowerCase(),la=ha.Methods.hasOwnProperty(ka)?ES('Object','assign',false,{},ha.Methods[ka]):{},ma=z(),na=q.getSecure()||(ka!=='auth.status'&&ka!='login.status');ES('Object','assign',false,ia,{app_id:q.getClientID(),locale:q.getLocale(),sdk:'joey',access_token:na&&q.getAccessToken()||(void 0)});ia.display=ha.getDisplayMode(la,ia);if(!la.url)la.url='dialog/'+ka;if((la.url=='dialog/oauth'||la.url=='dialog/permissions.request')&&(ia.display=='iframe'||(ia.display=='touch'&&ia.in_iframe)))ia.display=ha.checkOauthDisplay(ia);if(ia.display=='popup')delete ia.access_token;if(q.getIsVersioned()&&la.url.substring(0,7)==='dialog/')la.url=ia.version+'/'+la.url;if(ga(ia)){if(ea[ka]){var oa='Dialog "'+ka+'" is trying to run more than once.';m.warn(oa);ja({error_code:-100,error_message:oa});return;}ja=fa(ja,ka);}var pa={cb:ja,id:ma,size:la.size||ha.getDefaultSize(),url:t.resolve(ia.display=='touch'?'m':'www',na)+'/'+la.url,params:ia,name:ka,dialog:j.newInstance(ma,ia.display)},qa=la.transform?la.transform:ha.genericTransform;if(qa){pa=qa(pa);if(!pa)return;}if(ia.display==='touch'&&ia.in_iframe)pa.params.parent_height=window.innerHeight;var ra=la.getXdRelation||ha.getXdRelation,sa=ra(pa.params);if(!(pa.id in ha._defaultCb)&&!('next' in pa.params)&&!('redirect_uri' in pa.params))pa.params.next=ha._xdResult(pa.cb,pa.id,sa,true);if(sa==='parent')ES('Object','assign',false,pa.params,{channel_url:ha._xdChannelHandler(ma,'parent.parent')},true);pa=ha.prepareParams(pa);return pa;},prepareParams:function(ia){if(ia.params.display!=='async')delete ia.params.method;ia.params=x(ia.params);var ja=o.encode(ia.params);if(!s.nativeApp()&&ha.urlTooLongForIE(ia.url+'?'+ja)){ia.post=true;}else if(ja)ia.url+='?'+ja;return ia;},urlTooLongForIE:function(ia){return ia.length>2000;},getDisplayMode:function(ia,ja){if(ja.display==='hidden'||ja.display==='none')return ja.display;var ka=q.isEnvironment(q.ENVIRONMENTS.CANVAS)||q.isEnvironment(q.ENVIRONMENTS.PAGETAB);if(ka&&!ja.display)return 'async';if(s.mobile()||ja.display==='touch')return 'touch';if(!q.getAccessToken()&&(ja.display=='iframe'||ja.display=='dialog')&&!ia.loggedOutIframe){m.error('"dialog" mode can only be used when the user is connected.');return 'popup';}if(ia.connectDisplay&&!ka)return ia.connectDisplay;return ja.display||(q.getAccessToken()?'dialog':'popup');},getXdRelation:function(ia){var ja=ia.display;if(ja==='popup'||ja==='touch')return 'opener';if(ja==='dialog'||ja==='iframe'||ja==='hidden'||ja==='none')return 'parent';if(ja==='async')return 'parent.frames['+window.name+']';},popup:function(ia){var ja=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,ka=typeof window.screenY!='undefined'?window.screenY:window.screenTop,la=typeof window.outerWidth!='undefined'?window.outerWidth:document.documentElement.clientWidth,ma=typeof window.outerHeight!='undefined'?window.outerHeight:(document.documentElement.clientHeight-22),na=s.mobile()?null:ia.size.width,oa=s.mobile()?null:ia.size.height,pa=(ja<0)?window.screen.width+ja:ja,qa=parseInt(pa+((la-na)/2),10),ra=parseInt(ka+((ma-oa)/2.5),10),sa=[];if(na!==null)sa.push('width='+na);if(oa!==null)sa.push('height='+oa);sa.push('left='+qa);sa.push('top='+ra);sa.push('scrollbars=1');if(ia.name=='permissions.request'||ia.name=='permissions.oauth')sa.push('location=1,toolbar=0');sa=sa.join(',');var ta;if(ia.post){ta=window.open('about:blank',ia.id,sa);if(ta){ha.setLoadedNode(ia,ta,'popup');h.submitToTarget({url:ia.url,target:ia.id,params:ia.params});}}else{ta=window.open(ia.url,ia.id,sa);if(ta)ha.setLoadedNode(ia,ta,'popup');}if(!ta)return;if(ia.id in ha._defaultCb)ha._popupMonitor();},setLoadedNode:function(ia,ja,ka){if(ia.params&&ia.params.display!='popup')ja.fbCallID=ia.id;ja={node:ja,type:ka,fbCallID:ia.id};ha._loadedNodes[ia.id]=ja;},getLoadedNode:function(ia){var ja=typeof ia=='object'?ia.id:ia,ka=ha._loadedNodes[ja];return ka?ka.node:null;},hidden:function(ia){ia.className='FB_UI_Hidden';ia.root=h.appendHidden('');ha._insertIframe(ia);},iframe:function(ia){ia.className='FB_UI_Dialog';var ja=function(){ha._triggerDefault(ia.id);};ia.root=j.create({onClose:ja,closeIcon:ia.closeIcon===(void 0)?true:ia.closeIcon,classes:(s.ipad()?'centered':'')});if(!ia.hideLoader)j.showLoader(ja,ia.size.width);i.addCss(ia.root,'fb_dialog_iframe');ha._insertIframe(ia);},touch:function(ia){if(ia.params&&ia.params.in_iframe){if(ia.ui_created){j.showLoader(function(){ha._triggerDefault(ia.id);},0);}else ha.iframe(ia);}else if(s.nativeApp()&&!ia.ui_created){ia.frame=ia.id;n.onready(function(){ha.setLoadedNode(ia,n.open(ia.url+'#cb='+ia.frameName),'native');});ha._popupMonitor();}else if(!ia.ui_created)ha.popup(ia);},async:function(ia){ia.params.redirect_uri=location.protocol+'//'+location.host+location.pathname;delete ia.params.access_token;p.remote.showDialog(ia.params,function(ja){var ka=ja.result;if(ka&&ka.e2e){var la=j.get(ia.id);la.trackEvents(ka.e2e);la.trackEvent('close');delete ka.e2e;}ia.cb(ka);});},getDefaultSize:function(){return j.getDefaultSize();},_insertIframe:function(ia){ha._loadedNodes[ia.id]=false;var ja=function(ka){if(ia.id in ha._loadedNodes)ha.setLoadedNode(ia,ka,'iframe');};if(ia.post){aa({url:'about:blank',root:ia.root,className:ia.className,width:ia.size.width,height:ia.size.height,id:ia.id,onInsert:ja,onload:function(ka){h.submitToTarget({url:ia.url,target:ka.name,params:ia.params});}});}else aa({url:ia.url,root:ia.root,className:ia.className,width:ia.size.width,height:ia.size.height,id:ia.id,name:ia.frameName,onInsert:ja});},_handleResizeMessage:function(ia,ja){var ka=ha.getLoadedNode(ia);if(!ka)return;if(ja.height)ka.style.height=ja.height+'px';if(ja.width)ka.style.width=ja.width+'px';u.inform('resize.ack',ja||{},'parent.frames['+ka.name+']');if(!j.isActive(ka))j.show(ka);},_triggerDefault:function(ia){ha._xdRecv({frame:ia},ha._defaultCb[ia]||function(){});},_popupMonitor:function(){var ia;for(var ja in ha._loadedNodes)if(ha._loadedNodes.hasOwnProperty(ja)&&ja in ha._defaultCb){var ka=ha._loadedNodes[ja];if(ka.type!='popup'&&ka.type!='native')continue;var la=ka.node;try{if(la.closed){ha._triggerDefault(ja);}else ia=true;}catch(ma){}}if(ia&&!ha._popupInterval){ha._popupInterval=setInterval(ha._popupMonitor,100);}else if(!ia&&ha._popupInterval){clearInterval(ha._popupInterval);ha._popupInterval=null;}},_xdChannelHandler:function(ia,ja){return u.handler(function(ka){var la=ha.getLoadedNode(ia);if(!la)return;if(ka.type=='resize'){ha._handleResizeMessage(ia,ka);}else if(ka.type=='hide'){j.hide(la);}else if(ka.type=='rendered'){var ma=j._findRoot(la);j.show(ma);}else if(ka.type=='fireevent')k.fire(ka.event);},ja,true,null);},_xdNextHandler:function(ia,ja,ka,la){if(la)ha._defaultCb[ja]=ia;return u.handler(function(ma){ha._xdRecv(ma,ia);},ka)+'&frame='+ja;},_xdRecv:function(ia,ja){var ka=ha.getLoadedNode(ia.frame);if(ka)if(ka.close){try{ka.close();if(/iPhone.*Version\/(5|6)/.test(navigator.userAgent)&&RegExp.$1!=='5')window.focus();ha._popupCount--;}catch(la){}}else if(i.containsCss(ka,'FB_UI_Hidden')){setTimeout(function(){ka.parentNode.parentNode.removeChild(ka.parentNode);},3000);}else if(i.containsCss(ka,'FB_UI_Dialog'))j.remove(ka);delete ha._loadedNodes[ia.frame];delete ha._defaultCb[ia.frame];if(ia.e2e){var ma=j.get(ia.frame);ma.trackEvents(ia.e2e);ma.trackEvent('close');delete ia.e2e;}ja(ia);},_xdResult:function(ia,ja,ka,la){return (ha._xdNextHandler(function(ma){ia&&ia(ma.result&&ma.result!=ha._resultToken&&ES('JSON','parse',false,ma.result));},ja,ka,la)+'&result='+encodeURIComponent(ha._resultToken));},xdHandler:function(ia,ja,ka,la,ma){return ha._xdNextHandler(g.xdResponseWrapper(ia,la,ma),ja,ka,true);}};p.stub('showDialog');e.exports=ha;},null);
__d("sdk.ui",["Assert","sdk.Impressions","Log","sdk.PlatformVersioning","sdk.Runtime","sdk.UIServer","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){g.isObject(o);g.maybeFunction(p);if(k.getIsVersioned()){j.assertVersionIsSet();if(o.version){j.assertValidVersion(o.version);}else o.version=k.getVersion();}o=ES('Object','assign',false,{},o);if(!o.method){i.error('"method" is a required parameter for FB.ui().');return null;}if(o.method=='pay.prompt')o.method='pay';var q=o.method;if(o.redirect_uri){i.warn('When using FB.ui, you should not specify a redirect_uri.');delete o.redirect_uri;}if((q=='permissions.request'||q=='permissions.oauth')&&(o.display=='iframe'||o.display=='dialog'))o.display=l.checkOauthDisplay(o);var r=m('e2e_tracking',true);if(r)o.e2e={};var s=l.prepareCall(o,p||function(){});if(!s)return null;var t=s.params.display;if(t==='dialog'){t='iframe';}else if(t==='none')t='hidden';var u=l[t];if(!u){i.error('"display" must be one of "popup", '+'"dialog", "iframe", "touch", "async", "hidden", or "none"');return null;}if(r)s.dialog.subscribe('e2e:end',function(v){v.method=q;v.display=t;i.debug('e2e: %s',ES('JSON','stringify',false,v));h.log(114,{payload:v});});u(s);return s.dialog;}e.exports=n;},null);
__d("legacy:fb.auth",["sdk.Auth","sdk.Cookie","copyProperties","sdk.Event","FB","Log","sdk.Runtime","sdk.SignedRequest","sdk.ui"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){k.provide('',{getLoginStatus:function(){return g.getLoginStatus.apply(g,arguments);},getAuthResponse:function(){return g.getAuthResponse();},getAccessToken:function(){return m.getAccessToken()||null;},getUserID:function(){return m.getUserID()||m.getCookieUserID();},login:function(p,q){if(q&&q.perms&&!q.scope){q.scope=q.perms;delete q.perms;l.warn('OAuth2 specification states that \'perms\' '+'should now be called \'scope\'.  Please update.');}var r=m.isEnvironment(m.ENVIRONMENTS.CANVAS)||m.isEnvironment(m.ENVIRONMENTS.PAGETAB);o(i({method:'permissions.oauth',display:r?'async':'popup',domain:location.hostname},q||{}),p);},logout:function(p){o({method:'auth.logout',display:'hidden'},p);}});g.subscribe('logout',ES(j.fire,'bind',true,j,'auth.logout'));g.subscribe('login',ES(j.fire,'bind',true,j,'auth.login'));g.subscribe('authresponse.change',ES(j.fire,'bind',true,j,'auth.authResponseChange'));g.subscribe('status.change',ES(j.fire,'bind',true,j,'auth.statusChange'));j.subscribe('init:post',function(p){if(p.status)g.getLoginStatus();if(m.getClientID())if(p.authResponse){g.setAuthResponse(p.authResponse,'connected');}else if(m.getUseCookie()){var q=h.loadSignedRequest(),r;if(q){try{r=n.parse(q);}catch(s){h.clearSignedRequestCookie();}if(r&&r.user_id)m.setCookieUserID(r.user_id);}h.loadMeta();}});},3);
__d("sdk.Canvas.IframeHandling",["DOMWrapper","sdk.RPC"],function(a,b,c,d,e,f,g,h){var i=null,j;function k(){var o=g.getWindow().document,p=o.body,q=o.documentElement,r=Math.max(p.offsetTop,0),s=Math.max(q.offsetTop,0),t=p.scrollHeight+r,u=p.offsetHeight+r,v=q.scrollHeight+s,w=q.offsetHeight+s;return Math.max(t,u,v,w);}function l(o){if(typeof o!='object')o={};var p=0,q=0;if(!o.height){o.height=k();p=16;q=4;}if(!o.frame)o.frame=window.name||'iframe_canvas';if(j){var r=j.height,s=o.height-r;if(s<=q&&s>=-p)return false;}j=o;h.remote.setSize(o);return true;}function m(o,p){if(p===(void 0)&&typeof o==='number'){p=o;o=true;}if(o||o===(void 0)){if(i===null)i=setInterval(function(){l();},p||100);l();}else if(i!==null){clearInterval(i);i=null;}}h.stub('setSize');var n={setSize:l,setAutoGrow:m};e.exports=n;},null);
__d("sdk.Canvas.Navigation",["sdk.RPC"],function(a,b,c,d,e,f,g){function h(j){g.local.navigate=function(k){j({path:k});};g.remote.setNavigationEnabled(true);}g.stub('setNavigationEnabled');var i={setUrlHandler:h};e.exports=i;},null);
__d("sdk.Canvas.Plugin",["Log","sdk.RPC","sdk.Runtime","sdk.UA","sdk.api","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',n='CLSID:444785F1-DE89-4295-863A-D46C3A781394',o=null,p=j.osx()&&j.osx.getVersionParts(),q=!((p&&p[0]>10&&p[1]>10)&&(j.chrome()>=31||j.webkit()>=537.71||j.firefox()>=25));function r(ba){ba._hideunity_savedstyle={};ba._hideunity_savedstyle.left=ba.style.left;ba._hideunity_savedstyle.position=ba.style.position;ba._hideunity_savedstyle.width=ba.style.width;ba._hideunity_savedstyle.height=ba.style.height;ba.style.left='-10000px';ba.style.position='absolute';ba.style.width='1px';ba.style.height='1px';}function s(ba){if(ba._hideunity_savedstyle){ba.style.left=ba._hideunity_savedstyle.left;ba.style.position=ba._hideunity_savedstyle.position;ba.style.width=ba._hideunity_savedstyle.width;ba.style.height=ba._hideunity_savedstyle.height;}}function t(ba){ba._old_visibility=ba.style.visibility;ba.style.visibility='hidden';}function u(ba){ba.style.visibility=ba._old_visibility||'';delete ba._old_visibility;}function v(ba){var ca=ba.type?ba.type.toLowerCase():null,da=ca==='application/x-shockwave-flash'||(ba.classid&&ba.classid.toUpperCase()==m);if(!da)return false;var ea=/opaque|transparent/i;if(ea.test(ba.getAttribute('wmode')))return false;for(var fa=0;fa<ba.childNodes.length;fa++){var ga=ba.childNodes[fa];if(/param/i.test(ga.nodeName)&&/wmode/i.test(ga.name)&&ea.test(ga.value))return false;}return true;}function w(ba){var ca=ba.type?ba.type.toLowerCase():null;return ca==='application/vnd.unity'||(ba.classid&&ba.classid.toUpperCase()==n);}function x(ba){var ca=l(window.document.getElementsByTagName('object'));ca=ca.concat(l(window.document.getElementsByTagName('embed')));var da=false,ea=false;ES(ca,'forEach',true,function(ga){var ha=v(ga),ia=q&&w(ga);if(!ha&&!ia)return;da=da||ha;ea=ea||ia;var ja=function(){if(ba.state==='opened'){if(ha){t(ga);}else r(ga);}else if(ha){u(ga);}else s(ga);};if(o){g.info('Calling developer specified callback');var ka={state:ba.state,elem:ga};o(ka);setTimeout(ja,200);}else ja();});if(Math.random()<=1/1000){var fa={unity:ea,flash:da};k(i.getClientID()+'/occludespopups','post',fa);}}h.local.hidePluginObjects=function(){g.info('hidePluginObjects called');x({state:'opened'});};h.local.showPluginObjects=function(){g.info('showPluginObjects called');x({state:'closed'});};h.local.showFlashObjects=h.local.showPluginObjects;h.local.hideFlashObjects=h.local.hidePluginObjects;function y(){t();r();}function z(){u();s();}var aa={_setHidePluginCallback:function(ba){o=ba;},hidePluginElement:y,showPluginElement:z};e.exports=aa;},null);
__d("sdk.Canvas.Tti",["sdk.RPC","sdk.Runtime"],function(a,b,c,d,e,f,g,h){function i(n,o){var p={appId:h.getClientID(),time:ES('Date','now',false),name:o},q=[p];if(n)q.push(function(r){n(r.result);});g.remote.logTtiMessage.apply(null,q);}function j(){i(null,'StartIframeAppTtiTimer');}function k(n){i(n,'StopIframeAppTtiTimer');}function l(n){i(n,'RecordIframeAppTti');}g.stub('logTtiMessage');var m={setDoneLoading:l,startTimer:j,stopTimer:k};e.exports=m;},null);
__d("legacy:fb.canvas",["Assert","sdk.Canvas.Environment","sdk.Event","FB","sdk.Canvas.IframeHandling","sdk.Canvas.Navigation","sdk.Canvas.Plugin","sdk.RPC","sdk.Runtime","sdk.Canvas.Tti"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){j.provide('Canvas',{setSize:function(q){g.maybeObject(q,'Invalid argument');return k.setSize.apply(null,arguments);},setAutoGrow:function(){return k.setAutoGrow.apply(null,arguments);},getPageInfo:function(q){g.isFunction(q,'Invalid argument');return h.getPageInfo.apply(null,arguments);},scrollTo:function(q,r){g.maybeNumber(q,'Invalid argument');g.maybeNumber(r,'Invalid argument');return h.scrollTo.apply(null,arguments);},setDoneLoading:function(q){g.maybeFunction(q,'Invalid argument');return p.setDoneLoading.apply(null,arguments);},startTimer:function(){return p.startTimer.apply(null,arguments);},stopTimer:function(q){g.maybeFunction(q,'Invalid argument');return p.stopTimer.apply(null,arguments);},getHash:function(q){g.isFunction(q,'Invalid argument');return l.getHash.apply(null,arguments);},setHash:function(q){g.isString(q,'Invalid argument');return l.setHash.apply(null,arguments);},setUrlHandler:function(q){g.isFunction(q,'Invalid argument');return l.setUrlHandler.apply(null,arguments);}});n.local.fireEvent=ES(i.fire,'bind',true,i);i.subscribe('init:post',function(q){if(o.isEnvironment(o.ENVIRONMENTS.CANVAS)){g.isTrue(!q.hideFlashCallback||!q.hidePluginCallback,'cannot specify deprecated hideFlashCallback and new hidePluginCallback');m._setHidePluginCallback(q.hidePluginCallback||q.hideFlashCallback);}});},3);
__d("legacy:fb.canvas.syncrequests",["sdk.RPC","sdk.Event"],function(a,b,c,d,e,f,g,h){g.stub('initPendingSyncRequests');function i(j,k){if(j!='canvas.syncRequestUpdated')return;g.remote.initPendingSyncRequests();h.unsubscribe(h.SUBSCRIBE,i);}h.subscribe(h.SUBSCRIBE,i);},3);
__d("sdk.Canvas.Prefetcher",["sdk.api","createArrayFromMixed","JSSDKCanvasPrefetcherConfig","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j){var k={AUTOMATIC:0,MANUAL:1},l=i.sampleRate,m=i.blacklist,n=k.AUTOMATIC,o=[];function p(){var u={object:'data',link:'href',script:'src'};if(n==k.AUTOMATIC)ES(ES('Object','keys',false,u),'forEach',true,function(v){var w=u[v];ES(h(document.getElementsByTagName(v)),'forEach',true,function(x){if(x[w])o.push(x[w]);});});if(o.length===0)return;g(j.getClientID()+'/staticresources','post',{urls:ES('JSON','stringify',false,o),is_https:location.protocol==='https:'});o=[];}function q(){if(!j.isEnvironment(j.ENVIRONMENTS.CANVAS)||!j.getClientID()||!l)return;if(Math.random()>1/l||m=='*'||~ES(m,'indexOf',true,j.getClientID()))return;setTimeout(p,30000);}function r(u){n=u;}function s(u){o.push(u);}var t={COLLECT_AUTOMATIC:k.AUTOMATIC,COLLECT_MANUAL:k.MANUAL,addStaticResource:s,setCollectionMode:r,_maybeSample:q};e.exports=t;},null);
__d("legacy:fb.canvas.prefetcher",["FB","sdk.Canvas.Prefetcher","sdk.Event","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j){g.provide('Canvas.Prefetcher',h);i.subscribe('init:post',function(k){if(j.isEnvironment(j.ENVIRONMENTS.CANVAS))h._maybeSample();});},3);
__d("legacy:fb.canvas.presence",["sdk.RPC","sdk.Event"],function(a,b,c,d,e,f,g,h){h.subscribe(h.SUBSCRIBE,i);h.subscribe(h.UNSUBSCRIBE,j);g.stub('useFriendsOnline');function i(k,l){if(k!='canvas.friendsOnlineUpdated')return;if(l.length===1)g.remote.useFriendsOnline(true);}function j(k,l){if(k!='canvas.friendsOnlineUpdated')return;if(l.length===0)g.remote.useFriendsOnline(false);}},3);
__d("legacy:fb.event",["FB","sdk.Event","sdk.Runtime","sdk.Scribe","sdk.feature"],function(a,b,c,d,e,f,g,h,i,j,k){var l=[],m=null,n=k('event_subscriptions_log',false);g.provide('Event',{subscribe:function(o,p){if(n){l.push(o);if(!m)m=setTimeout(function(){j.log('jssdk_error',{appId:i.getClientID(),error:'EVENT_SUBSCRIPTIONS_LOG',extra:{line:0,name:'EVENT_SUBSCRIPTIONS_LOG',script:'N/A',stack:'N/A',message:l.sort().join(',')}});l.length=0;m=null;},n);}return h.subscribe(o,p);},unsubscribe:ES(h.unsubscribe,'bind',true,h)});},3);
__d("legacy:fb.frictionless",["FB","sdk.Frictionless"],function(a,b,c,d,e,f,g,h){g.provide('Frictionless',h);},3);
__d("sdk.init",["sdk.Cookie","sdk.ErrorHandling","sdk.Event","Log","ManagedError","sdk.PlatformVersioning","QueryString","sdk.Runtime","sdk.URI","createArrayFromMixed"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(s){var t=(typeof s=='number'&&s>0)||(typeof s=='string'&&/^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(s));if(t)return s.toString();j.warn('Invalid App Id: Must be a number or numeric string representing '+'the application id.');return null;}function r(s){if(n.getInitialized())j.warn('FB.init has already been called - this could indicate a problem');if(n.getIsVersioned()){if(Object.prototype.toString.call(s)!=='[object Object]')throw new k('Invalid argument');if(s.authResponse)j.warn('Setting authResponse is not supported');if(!s.version)s.version=o(location.href).getQueryData().sdk_version;l.assertValidVersion(s.version);n.setVersion(s.version);}else{if(/number|string/.test(typeof s)){j.warn('FB.init called with invalid parameters');s={apiKey:s};}s=ES('Object','assign',false,{status:true},s||{});}var t=q(s.appId||s.apiKey);if(t!==null)n.setClientID(t);if('scope' in s)n.setScope(s.scope);if(s.cookie){n.setUseCookie(true);if(typeof s.cookie==='string')g.setDomain(s.cookie);}if(s.kidDirectedSite)n.setKidDirectedSite(true);n.setInitialized(true);i.fire('init:post',s);}setTimeout(function(){var s=/(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;ES(p(document.getElementsByTagName('script')),'forEach',true,function(t){if(t.src){var u=s.exec(t.src);if(u){var v=m.decode(u[2]);for(var w in v)if(v.hasOwnProperty(w)){var x=v[w];if(x=='0')v[w]=0;}r(v);}}});if(window.fbAsyncInit&&!window.fbAsyncInit.hasRun){window.fbAsyncInit.hasRun=true;h.unguard(window.fbAsyncInit)();}},0);e.exports=r;},null);
__d("legacy:fb.init",["FB","sdk.init"],function(a,b,c,d,e,f,g,h){g.provide('',{init:h});},3);
__d("legacy:fb.ui",["FB","sdk.ui"],function(a,b,c,d,e,f,g,h){g.provide('',{ui:h});},3);
__d("runOnce",[],function(a,b,c,d,e,f){function g(h){var i,j;return function(){if(!i){i=true;j=h();}return j;};}e.exports=g;},null);
__d("XFBML",["Assert","sdk.DOM","Log","ObservableMixin","sdk.UA","createArrayFromMixed","runOnce"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o={},p=0,q=new j();function r(y,z){return y[z]+'';}function s(y){return y.scopeName?(y.scopeName+':'+y.nodeName):'';}function t(y){return n[r(y,'nodeName').toLowerCase()]||n[s(y).toLowerCase()];}function u(y){var z=ES(ES(r(y,'className'),'trim',true).split(/\s+/),'filter',true,function(aa){return o.hasOwnProperty(aa);});if(z.length===0)return (void 0);if(y.getAttribute('fb-xfbml-state')||!y.childNodes||y.childNodes.length===0||(y.childNodes.length===1&&y.childNodes[0].nodeType===3)||(y.children.length===1&&r(y.children[0],'className')==='fb-xfbml-parse-ignore'))return o[z[0]];}function v(y){var z={};ES(l(y.attributes),'forEach',true,function(aa){z[r(aa,'name')]=r(aa,'value');});return z;}function w(y,z,aa){var ba=document.createElement('div');h.addCss(y,z+'-'+aa);ES(l(y.childNodes),'forEach',true,function(ca){ba.appendChild(ca);});ES(l(y.attributes),'forEach',true,function(ca){ba.setAttribute(ca.name,ca.value);});y.parentNode.replaceChild(ba,y);return ba;}function x(y,z,aa){g.isTrue(y&&y.nodeType&&y.nodeType===1&&!!y.getElementsByTagName,'Invalid DOM node passed to FB.XFBML.parse()');g.isFunction(z,'Invalid callback passed to FB.XFBML.parse()');var ba=++p;i.info('XFBML Parsing Start %s',ba);var ca=1,da=0,ea=function(){ca--;if(ca===0){i.info('XFBML Parsing Finish %s, %s tags found',ba,da);z();q.inform('render',ba,da);}g.isTrue(ca>=0,'onrender() has been called too many times');};ES(l(y.getElementsByTagName('*')),'forEach',true,function(ga){if(!aa&&ga.getAttribute('fb-xfbml-state'))return;if(ga.nodeType!==1)return;var ha=t(ga)||u(ga);if(!ha)return;if(k.ie()<9&&ga.scopeName)ga=w(ga,ha.xmlns,ha.localName);ca++;da++;var ia=new ha.ctor(ga,ha.xmlns,ha.localName,v(ga));ia.subscribe('render',m(function(){ga.setAttribute('fb-xfbml-state','rendered');ea();}));var ja=function(){if(ga.getAttribute('fb-xfbml-state')=='parsed'){q.subscribe('render.queue',ja);}else{ga.setAttribute('fb-xfbml-state','parsed');ia.process();}};ja();});q.inform('parse',ba,da);var fa=30000;setTimeout(function(){if(ca>0)i.warn('%s tags failed to render in %s ms',ca,fa);},fa);ea();}q.subscribe('render',function(){var y=q.getSubscribers('render.queue');q.clearSubscribers('render.queue');ES(y,'forEach',true,function(z){z();});});ES('Object','assign',false,q,{registerTag:function(y){var z=y.xmlns+':'+y.localName;g.isUndefined(n[z],z+' already registered');n[z]=y;o[y.xmlns+'-'+y.localName]=y;},parse:function(y,z){x(y||document.body,z||function(){},true);},parseNew:function(){x(document.body,function(){},false);}});e.exports=q;},null);
__d("PluginPipe",["sdk.Content","sdk.feature","guid","insertIframe","Miny","ObservableMixin","JSSDKPluginPipeConfig","sdk.Runtime","sdk.UA","UrlMap","XFBML"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=new l(),s=m.threshold,t=[];function u(){return !!(h('plugin_pipe',false)&&n.getSecure()!==(void 0)&&(o.chrome()||o.firefox())&&m.enabledApps[n.getClientID()]);}function v(){var x=t;t=[];if(x.length<=s){ES(x,'forEach',true,function(aa){j(aa.config);});return;}var y=x.length+1;function z(){y--;if(y===0)w(x);}ES(x,'forEach',true,function(aa){var ba={};for(var ca in aa.config)ba[ca]=aa.config[ca];ba.url=p.resolve('www',n.getSecure())+'/plugins/plugin_pipe_shell.php';ba.onload=z;j(ba);});z();}q.subscribe('parse',v);function w(x){var y=document.createElement('span');g.appendHidden(y);var z={};ES(x,'forEach',true,function(ea){z[ea.config.name]={plugin:ea.tag,params:ea.params};});var aa=ES('JSON','stringify',false,z),ba=k.encode(aa);ES(x,'forEach',true,function(ea){var fa=document.getElementsByName(ea.config.name)[0];fa.onload=ea.config.onload;});var ca=p.resolve('www',n.getSecure())+'/plugins/pipe.php',da=i();j({url:'about:blank',root:y,name:da,className:'fb_hidden fb_invisible',onload:function(){g.submitToTarget({url:ca,target:da,params:{plugins:ba.length<aa.length?ba:aa}});}});}ES('Object','assign',false,r,{add:function(x){var y=u();y&&t.push({config:x._config,tag:x._tag,params:x._params});return y;}});e.exports=r;},null);
__d("IframePlugin",["sdk.Auth","sdk.DOM","sdk.Event","Log","ObservableMixin","sdk.PlatformVersioning","PluginPipe","QueryString","sdk.Runtime","Type","sdk.UA","sdk.URI","UrlMap","sdk.XD","sdk.createIframe","sdk.feature","guid","resolveURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y={skin:'string',font:'string',width:'px',height:'px',ref:'string',color_scheme:'string'};function z(ha,ia,ja){if(ia||ia===0)ha.style.width=ia+'px';if(ja||ja===0)ha.style.height=ja+'px';}function aa(ha){return function(ia){var ja={width:ia.width,height:ia.height,pluginID:ha};i.fire('xfbml.resize',ja);};}var ba={string:function(ha){return ha;},bool:function(ha){return ha?(/^(?:true|1|yes|on)$/i).test(ha):(void 0);},url:function(ha){return x(ha);},url_maybe:function(ha){return ha?x(ha):ha;},hostname:function(ha){return ha||window.location.hostname;},px:function(ha){return (/^(\d+)(?:px)?$/).test(ha)?parseInt(RegExp.$1,10):(void 0);},text:function(ha){return ha;}};function ca(ha,ia){var ja=ha[ia]||ha[ia.replace(/_/g,'-')]||ha[ia.replace(/_/g,'')]||ha['data-'+ia]||ha['data-'+ia.replace(/_/g,'-')]||ha['data-'+ia.replace(/_/g,'')]||(void 0);return ja;}function da(ha,ia,ja,ka){ES(ES('Object','keys',false,ha),'forEach',true,function(la){if(ha[la]=='text'&&!ja[la]){ja[la]=ia.textContent||ia.innerText||'';ia.setAttribute(la,ja[la]);}ka[la]=ba[ha[la]](ca(ja,la));});}function ea(ha){return ha||ha==='0'||ha===0?parseInt(ha,10):(void 0);}function fa(ha){if(ha)z(ha,0,0);}var ga=p.extend({constructor:function(ha,ia,ja,ka){this.parent();ja=ja.replace(/-/g,'_');var la=ca(ka,'plugin_id');this.subscribe('xd.resize',aa(la));this.subscribe('xd.resize.flow',aa(la));this.subscribe('xd.resize.flow',ES(function(ra){ES('Object','assign',false,this._iframeOptions.root.style,{verticalAlign:'bottom',overflow:''});z(this._iframeOptions.root,ea(ra.width),ea(ra.height));this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize',ES(function(ra){ES('Object','assign',false,this._iframeOptions.root.style,{verticalAlign:'bottom',overflow:''});z(this._iframeOptions.root,ea(ra.width),ea(ra.height));z(this._iframe,ea(ra.width),ea(ra.height));this._isIframeResized=true;this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.resize.iframe',ES(function(ra){if(ra.reposition==='true'&&v('reposition_iframe',false))this.reposition(ea(ra.width));z(this._iframe,ea(ra.width),ea(ra.height));this._isIframeResized=true;this.updateLift();clearTimeout(this._timeoutID);},'bind',true,this));this.subscribe('xd.sdk_event',function(ra){var sa=ES('JSON','parse',false,ra.data);sa.pluginID=la;i.fire(ra.event,sa,ha);});var ma=o.getSecure()||window.location.protocol=='https:',na=s.resolve('www',ma)+'/plugins/'+ja+'.php?',oa={};da(this.getParams(),ha,ka,oa);da(y,ha,ka,oa);ES('Object','assign',false,oa,{app_id:o.getClientID(),locale:o.getLocale(),sdk:'joey',kid_directed_site:o.getKidDirectedSite(),channel:t.handler(ES(function(ra){return this.inform('xd.'+ra.type,ra);},'bind',true,this),'parent.parent',true)});oa.container_width=ha.offsetWidth;h.addCss(ha,'fb_iframe_widget');if(this.isFluid())h.addCss(ha,'fb_iframe_widget_fluid_desktop');var pa=w();this.subscribe('xd.verify',function(ra){t.sendToFacebook(pa,{method:'xd/verify',params:ES('JSON','stringify',false,ra.token)});});this.subscribe('xd.refreshLoginStatus',ES(g.getLoginStatus,'bind',true,g,ES(this.inform,'bind',true,this,'login.status'),true));var qa=document.createElement('span');ES('Object','assign',false,qa.style,{verticalAlign:'top',width:'0px',height:'0px',overflow:'hidden'});this._element=ha;this._ns=ia;this._tag=ja;this._params=oa;this._config=this.getConfig();this._iframeOptions={root:qa,url:na+n.encode(oa),name:pa,width:this._config.mobile_fullsize&&q.mobile()?void 0:oa.width||1000,height:oa.height||1000,style:{border:'none',visibility:'hidden'},title:this._ns+':'+this._tag+' Facebook Social Plugin',onload:ES(function(){return this.inform('render');},'bind',true,this),onerror:ES(function(){return fa(this._iframe);},'bind',true,this)};if(oa.allowfullscreen)this._iframeOptions.allowfullscreen=true;},process:function(){if(o.getIsVersioned()){l.assertVersionIsSet();var ha=r(this._iframeOptions.url);this._iframeOptions.url=ha.setPath('/'+o.getVersion()+ha.getPath()).toString();}var ia=ES('Object','assign',false,{},this._params);delete ia.channel;var ja=n.encode(ia);if(this._element.getAttribute('fb-iframe-plugin-query')==ja){j.info('Skipping render: %s:%s %s',this._ns,this._tag,ja);this.inform('render');return;}this._element.setAttribute('fb-iframe-plugin-query',ja);this.subscribe('render',ES(function(){this._iframe.style.visibility='visible';if(!this._isIframeResized)fa(this._iframe);},'bind',true,this));while(this._element.firstChild)this._element.removeChild(this._element.firstChild);this._element.appendChild(this._iframeOptions.root);var ka=q.mobile()?120:45;this._timeoutID=setTimeout(ES(function(){fa(this._iframe);j.warn('%s:%s failed to resize in %ss',this._ns,this._tag,ka);},'bind',true,this),ka*1000);if(!m.add(this))this._iframe=u(this._iframeOptions);if(q.mobile()){h.addCss(this._element,'fb_iframe_widget_fluid');if(!this._iframeOptions.width){ES('Object','assign',false,this._element.style,{display:'block',width:'100%',height:'auto'});ES('Object','assign',false,this._iframeOptions.root.style,{width:'100%',height:'auto'});var la={height:'auto',position:'static',width:'100%'};if(q.iphone()||q.ipad())ES('Object','assign',false,la,{width:'220px','min-width':'100%'});ES('Object','assign',false,this._iframe.style,la);}}},getConfig:function(){return {};},isFluid:function(){var ha=this.getConfig();return ha.fluid&&!q.mobile();},reposition:function(ha){var ia=h.getPosition(this._iframe).x,ja=h.getViewportInfo().width,ka=parseInt(h.getStyle(this._iframe,'width'),10),la={};if((ia+ha)>ja&&ia>ha){this._iframe.style.left=parseInt(h.getStyle(this._iframe,'width'),10)-ha+'px';this._isRepositioned=true;la.type='reposition';}else if(this._isRepositioned&&(ka-ha)!==0){this._iframe.style.left='0px';this._isRepositioned=false;la.type='restore';}else return;t.sendToFacebook(this._iframe.name,{method:'xd/reposition',params:ES('JSON','stringify',false,la)});},updateLift:function(){var ha=this._iframe.style.width===this._iframeOptions.root.style.width&&this._iframe.style.height===this._iframeOptions.root.style.height;h[ha?'removeCss':'addCss'](this._iframe,'fb_iframe_widget_lift');}},k);ga.getVal=ca;ga.withParams=function(ha,ia){return ga.extend({getParams:function(){return ha;},getConfig:function(){return ia?ia:{};}});};e.exports=ga;},null);
__d("PluginConfig",["sdk.feature"],function(a,b,c,d,e,f,g){var h={post:{fluid:g('fluid_embed',false),mobile_fullsize:true}};e.exports=h;},null);
__d("PluginTags",[],function(a,b,c,d,e,f){var g={activity:{filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',recommendations:'bool',site:'hostname'},composer:{action_type:'string',action_properties:'string'},create_event_button:{},degrees:{href:'url'},facepile:{href:'string',action:'string',size:'string',max_rows:'string',show_count:'bool'},follow:{href:'url',layout:'string',show_faces:'bool'},like:{href:'url',layout:'string',show_faces:'bool',share:'bool',action:'string',send:'bool'},like_box:{href:'string',show_faces:'bool',header:'bool',stream:'bool',force_wall:'bool',show_border:'bool',id:'string',connections:'string',profile_id:'string',name:'string'},open_graph:{href:'url',layout:'string',show_faces:'bool',action_type:'string',action_properties:'string'},open_graph_preview:{action_type:'string',action_properties:'string'},page_events:{href:'url'},post:{href:'url',show_border:'bool'},privacy_selector:{},profile_pic:{uid:'string',linked:'bool',href:'string',size:'string',facebook_logo:'bool'},recommendations:{filter:'string',action:'string',max_age:'string',linktarget:'string',header:'bool',site:'hostname'},share_button:{href:'url',layout:'string',type:'string'},shared_activity:{header:'bool'},send:{href:'url'},send_to_mobile:{max_rows:'string',show_faces:'bool',size:'string'},story:{href:'url',show_border:'bool'},topic:{topic_name:'string',topic_id:'string'},want:{href:'url',layout:'string',show_faces:'bool'}},h={subscribe:'follow',fan:'like_box',likebox:'like_box',friendpile:'facepile'};ES(ES('Object','keys',false,h),'forEach',true,function(i){g[i]=g[h[i]];});e.exports=g;},null);
__d("sdk.Arbiter",[],function(a,b,c,d,e,f){var g={BEHAVIOR_EVENT:'e',BEHAVIOR_PERSISTENT:'p',BEHAVIOR_STATE:'s'};e.exports=g;},null);
__d("sdk.XFBML.Element",["sdk.DOM","Type","ObservableMixin"],function(a,b,c,d,e,f,g,h,i){var j=h.extend({constructor:function(k){this.parent();this.dom=k;},fire:function(){this.inform.apply(this,arguments);},getAttribute:function(k,l,m){var n=g.getAttr(this.dom,k);return n?m?m(n):n:l;},_getBoolAttribute:function(k,l){var m=g.getBoolAttr(this.dom,k);return m===null?l:m;},_getPxAttribute:function(k,l){return this.getAttribute(k,l,function(m){var n=parseInt(m,10);return isNaN(n)?l:n;});},_getLengthAttribute:function(k,l){return this.getAttribute(k,l,function(m){if(m==='100%')return m;var n=parseInt(m,10);return isNaN(n)?l:n;});},_getAttributeFromList:function(k,l,m){return this.getAttribute(k,l,function(n){n=n.toLowerCase();return (ES(m,'indexOf',true,n)>-1)?n:l;});},isValid:function(){for(var k=this.dom;k;k=k.parentNode)if(k==document.body)return true;},clear:function(){g.html(this.dom,'');}},i);e.exports=j;},null);
__d("sdk.XFBML.IframeWidget",["sdk.Arbiter","sdk.Auth","sdk.Content","sdk.DOM","sdk.Event","sdk.XFBML.Element","guid","insertIframe","QueryString","sdk.Runtime","sdk.ui","UrlMap","sdk.XD"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=l.extend({_iframeName:null,_showLoader:true,_refreshOnAuthChange:false,_allowReProcess:false,_fetchPreCachedLoader:false,_visibleAfter:'load',_widgetPipeEnabled:false,_borderReset:false,_repositioned:false,getUrlBits:function(){throw new Error('Inheriting class needs to implement getUrlBits().');},setupAndValidate:function(){return true;},oneTimeSetup:function(){},getSize:function(){},getIframeName:function(){return this._iframeName;},getIframeTitle:function(){return 'Facebook Social Plugin';},getChannelUrl:function(){if(!this._channelUrl){var x=this;this._channelUrl=s.handler(function(y){x.fire('xd.'+y.type,y);},'parent.parent',true);}return this._channelUrl;},getIframeNode:function(){return this.dom.getElementsByTagName('iframe')[0];},arbiterInform:function(event,x,y){s.sendToFacebook(this.getIframeName(),{method:event,params:ES('JSON','stringify',false,x||{}),behavior:y||g.BEHAVIOR_PERSISTENT});},_arbiterInform:function(event,x,y){var z='parent.frames["'+this.getIframeNode().name+'"]';s.inform(event,x,z,y);},getDefaultWebDomain:function(){return r.resolve('www');},process:function(x){if(this._done){if(!this._allowReProcess&&!x)return;this.clear();}else this._oneTimeSetup();this._done=true;this._iframeName=this.getIframeName()||this._iframeName||m();if(!this.setupAndValidate()){this.fire('render');return;}if(this._showLoader)this._addLoader();j.addCss(this.dom,'fb_iframe_widget');if(this._visibleAfter!='immediate'){j.addCss(this.dom,'fb_hide_iframes');}else this.subscribe('iframe.onload',ES(this.fire,'bind',true,this,'render'));var y=this.getSize()||{},z=this.getFullyQualifiedURL();if(y.width=='100%')j.addCss(this.dom,'fb_iframe_widget_fluid');this.clear();n({url:z,root:this.dom.appendChild(document.createElement('span')),name:this._iframeName,title:this.getIframeTitle(),className:p.getRtl()?'fb_rtl':'fb_ltr',height:y.height,width:y.width,onload:ES(this.fire,'bind',true,this,'iframe.onload')});this._resizeFlow(y);this.loaded=false;this.subscribe('iframe.onload',ES(function(){this.loaded=true;if(!this._isResizeHandled)j.addCss(this.dom,'fb_hide_iframes');},'bind',true,this));},generateWidgetPipeIframeName:function(){u++;return 'fb_iframe_'+u;},getFullyQualifiedURL:function(){var x=this._getURL();x+='?'+o.encode(this._getQS());if(x.length>2000){x='about:blank';var y=ES(function(){this._postRequest();this.unsubscribe('iframe.onload',y);},'bind',true,this);this.subscribe('iframe.onload',y);}return x;},_getWidgetPipeShell:function(){return r.resolve('www')+'/common/widget_pipe_shell.php';},_oneTimeSetup:function(){this.subscribe('xd.resize',ES(this._handleResizeMsg,'bind',true,this));this.subscribe('xd.resize',ES(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.resize.iframe',ES(this._resizeIframe,'bind',true,this));this.subscribe('xd.resize.flow',ES(this._resizeFlow,'bind',true,this));this.subscribe('xd.resize.flow',ES(this._bubbleResizeEvent,'bind',true,this));this.subscribe('xd.refreshLoginStatus',function(){h.getLoginStatus(function(){},true);});this.subscribe('xd.logout',function(){q({method:'auth.logout',display:'hidden'},function(){});});if(this._refreshOnAuthChange)this._setupAuthRefresh();if(this._visibleAfter=='load')this.subscribe('iframe.onload',ES(this._makeVisible,'bind',true,this));this.subscribe('xd.verify',ES(function(x){this.arbiterInform('xd/verify',x.token);},'bind',true,this));this.oneTimeSetup();},_makeVisible:function(){this._removeLoader();j.removeCss(this.dom,'fb_hide_iframes');this.fire('render');},_setupAuthRefresh:function(){h.getLoginStatus(ES(function(x){var y=x.status;k.subscribe('auth.statusChange',ES(function(z){if(!this.isValid())return;if(y=='unknown'||z.status=='unknown')this.process(true);y=z.status;},'bind',true,this));},'bind',true,this));},_handleResizeMsg:function(x){if(!this.isValid())return;this._resizeIframe(x);this._resizeFlow(x);if(!this._borderReset){this.getIframeNode().style.border='none';this._borderReset=true;}this._isResizeHandled=true;this._makeVisible();},_bubbleResizeEvent:function(x){var y={height:x.height,width:x.width,pluginID:this.getAttribute('plugin-id')};k.fire('xfbml.resize',y);},_resizeIframe:function(x){var y=this.getIframeNode();if(x.reposition==="true")this._repositionIframe(x);x.height&&(y.style.height=x.height+'px');x.width&&(y.style.width=x.width+'px');this._updateIframeZIndex();},_resizeFlow:function(x){var y=this.dom.getElementsByTagName('span')[0];x.height&&(y.style.height=x.height+'px');x.width&&(y.style.width=x.width+'px');this._updateIframeZIndex();},_updateIframeZIndex:function(){var x=this.dom.getElementsByTagName('span')[0],y=this.getIframeNode(),z=y.style.height===x.style.height&&y.style.width===x.style.width,aa=z?'removeCss':'addCss';j[aa](y,'fb_iframe_widget_lift');},_repositionIframe:function(x){var y=this.getIframeNode(),z=parseInt(j.getStyle(y,'width'),10),aa=j.getPosition(y).x,ba=j.getViewportInfo().width,ca=parseInt(x.width,10);if(aa+ca>ba&&aa>ca){y.style.left=z-ca+'px';this.arbiterInform('xd/reposition',{type:'horizontal'});this._repositioned=true;}else if(this._repositioned){y.style.left='0px';this.arbiterInform('xd/reposition',{type:'restore'});this._repositioned=false;}},_addLoader:function(){if(!this._loaderDiv){j.addCss(this.dom,'fb_iframe_widget_loader');this._loaderDiv=document.createElement('div');this._loaderDiv.className='FB_Loader';this.dom.appendChild(this._loaderDiv);}},_removeLoader:function(){if(this._loaderDiv){j.removeCss(this.dom,'fb_iframe_widget_loader');if(this._loaderDiv.parentNode)this._loaderDiv.parentNode.removeChild(this._loaderDiv);this._loaderDiv=null;}},_getQS:function(){return ES('Object','assign',false,{api_key:p.getClientID(),locale:p.getLocale(),sdk:'joey',kid_directed_site:p.getKidDirectedSite(),ref:this.getAttribute('ref')},this.getUrlBits().params);},_getURL:function(){var x=this.getDefaultWebDomain(),y='';return x+'/plugins/'+y+this.getUrlBits().name+'.php';},_postRequest:function(){i.submitToTarget({url:this._getURL(),target:this.getIframeNode().name,params:this._getQS()});}}),u=0,v={};function w(){var x={};for(var y in v){var z=v[y];x[y]={widget:z.getUrlBits().name,params:z._getQS()};}return x;}e.exports=t;},null);
__d("sdk.XFBML.Comments",["sdk.Event","sdk.XFBML.IframeWidget","QueryString","sdk.Runtime","JSSDKConfig","sdk.UA","UrlMap"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=h.extend({_visibleAfter:'immediate',_refreshOnAuthChange:true,setupAndValidate:function(){var o={channel_url:this.getChannelUrl(),colorscheme:this.getAttribute('colorscheme'),skin:this.getAttribute('skin'),numposts:this.getAttribute('num-posts',10),width:this._getLengthAttribute('width'),href:this.getAttribute('href'),permalink:this.getAttribute('permalink'),publish_feed:this.getAttribute('publish_feed'),order_by:this.getAttribute('order_by'),mobile:this._getBoolAttribute('mobile')};if(!o.width&&!o.permalink)o.width=550;if(k.initSitevars.enableMobileComments&&l.mobile()&&o.mobile!==false){o.mobile=true;delete o.width;}if(!o.skin)o.skin=o.colorscheme;if(!o.href){o.migrated=this.getAttribute('migrated');o.xid=this.getAttribute('xid');o.title=this.getAttribute('title',document.title);o.url=this.getAttribute('url',document.URL);o.quiet=this.getAttribute('quiet');o.reverse=this.getAttribute('reverse');o.simple=this.getAttribute('simple');o.css=this.getAttribute('css');o.notify=this.getAttribute('notify');if(!o.xid){var p=ES(document.URL,'indexOf',true,'#');if(p>0){o.xid=encodeURIComponent(document.URL.substring(0,p));}else o.xid=encodeURIComponent(document.URL);}if(o.migrated)o.href=m.resolve('www')+'/plugins/comments_v1.php?'+'app_id='+j.getClientID()+'&xid='+encodeURIComponent(o.xid)+'&url='+encodeURIComponent(o.url);}else{var q=this.getAttribute('fb_comment_id');if(!q){q=i.decode(document.URL.substring(ES(document.URL,'indexOf',true,'?')+1)).fb_comment_id;if(q&&ES(q,'indexOf',true,'#')>0)q=q.substring(0,ES(q,'indexOf',true,'#'));}if(q){o.fb_comment_id=q;this.subscribe('render',ES(function(){if(!window.location.hash)window.location.hash=this.getIframeNode().id;},'bind',true,this));}}this._attr=o;return true;},oneTimeSetup:function(){this.subscribe('xd.commentCreated',ES(this._handleCommentCreatedMsg,'bind',true,this));this.subscribe('xd.commentRemoved',ES(this._handleCommentRemovedMsg,'bind',true,this));},getSize:function(){if(!this._attr.permalink)return {width:this._attr.mobile?'100%':this._attr.width,height:100};},getUrlBits:function(){return {name:'comments',params:this._attr};},getDefaultWebDomain:function(){return m.resolve(this._attr.mobile?'m':'www',true);},_handleCommentCreatedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID,parentCommentID:o.parentCommentID,message:o.message};g.fire('comment.create',p);},_handleCommentRemovedMsg:function(o){if(!this.isValid())return;var p={href:o.href,commentID:o.commentID};g.fire('comment.remove',p);}});e.exports=n;},null);
__d("sdk.XFBML.CommentsCount",["ApiClient","sdk.DOM","sdk.XFBML.Element","sprintf"],function(a,b,c,d,e,f,g,h,i,j){var k=i.extend({process:function(){h.addCss(this.dom,'fb_comments_count_zero');var l=this.getAttribute('href',window.location.href);g.scheduleBatchCall('/v2.1/'+encodeURIComponent(l),{fields:'share'},ES(function(m){var n=(m.share&&m.share.comment_count)||0;h.html(this.dom,j('<span class="fb_comments_count">%s</span>',n));if(n>0)h.removeCss(this.dom,'fb_comments_count_zero');this.fire('render');},'bind',true,this));}});e.exports=k;},null);
__d("safeEval",[],function(a,b,c,d,e,f){function g(h,i){if(h===null||typeof h==='undefined')return;if(typeof h!=='string')return h;if(/^\w+$/.test(h)&&typeof window[h]==='function')return window[h].apply(null,i||[]);return Function('return eval("'+h.replace(/"/g,'\\"')+'");').apply(null,i||[]);}e.exports=g;},null);
__d("sdk.Helper",["sdk.ErrorHandling","sdk.Event","UrlMap","safeEval","sprintf"],function(a,b,c,d,e,f,g,h,i,j,k){var l={isUser:function(m){return m<2.2e+09||(m>=1e+14&&m<=100099999989999)||(m>=8.9e+13&&m<=89999999999999)||(m>=6.000001e+13&&m<=60000019999999);},upperCaseFirstChar:function(m){if(m.length>0){return m.substr(0,1).toUpperCase()+m.substr(1);}else return m;},getProfileLink:function(m,n,o){if(!o&&m)o=k('%s/profile.php?id=%s',i.resolve('www'),m.uid||m.id);if(o)n=k('<a class="fb_link" href="%s">%s</a>',o,n);return n;},invokeHandler:function(m,n,o){if(m)if(typeof m==='string'){g.unguard(j)(m,o);}else if(m.apply)g.unguard(m).apply(n,o||[]);},fireEvent:function(m,n){var o=n._attr.href;n.fire(m,o);h.fire(m,o,n);},executeFunctionByName:function(m){var n=Array.prototype.slice.call(arguments,1),o=m.split("."),p=o.pop(),q=window;for(var r=0;r<o.length;r++)q=q[o[r]];return q[p].apply(this,n);}};e.exports=l;},null);
__d("sdk.XFBML.LoginButton",["sdk.Helper","IframePlugin"],function(a,b,c,d,e,f,g,h){var i=h.extend({constructor:function(j,k,l,m){this.parent(j,k,l,m);var n=h.getVal(m,'on_login');if(n)this.subscribe('login.status',function(o){g.invokeHandler(n,null,[o]);});},getParams:function(){return {scope:'string',perms:'string',size:'string',login_text:'text',show_faces:'bool',max_rows:'string',show_login_face:'bool',registration_url:'url_maybe',auto_logout_link:'bool',one_click:'bool',show_banner:'bool',auth_type:'string',default_audience:'string'};}});e.exports=i;},null);
__d("escapeHTML",[],function(a,b,c,d,e,f){var g=/[&<>"'\/]/g,h={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;','/':'&#x2F;'};function i(j){return j.replace(g,function(k){return h[k];});}e.exports=i;},null);
__d("sdk.XFBML.Name",["ApiClient","escapeHTML","sdk.Event","sdk.XFBML.Element","sdk.Helper","Log","sdk.Runtime"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=({}).hasOwnProperty,o=j.extend({process:function(){ES('Object','assign',false,this,{_uid:this.getAttribute('uid'),_firstnameonly:this._getBoolAttribute('first-name-only'),_lastnameonly:this._getBoolAttribute('last-name-only'),_possessive:this._getBoolAttribute('possessive'),_reflexive:this._getBoolAttribute('reflexive'),_objective:this._getBoolAttribute('objective'),_linked:this._getBoolAttribute('linked',true),_subjectId:this.getAttribute('subject-id')});if(!this._uid){l.error('"uid" is a required attribute for <fb:name>');this.fire('render');return;}var p=[];if(this._firstnameonly){p.push('first_name');}else if(this._lastnameonly){p.push('last_name');}else p.push('name');if(this._subjectId){p.push('gender');if(this._subjectId==m.getUserID())this._reflexive=true;}i.monitor('auth.statusChange',ES(function(){if(!this.isValid()){this.fire('render');return true;}if(!this._uid||this._uid=='loggedinuser')this._uid=m.getUserID();if(!this._uid)return;g.scheduleBatchCall('/v1.0/'+this._uid,{fields:p.join(',')},ES(function(q){if(n.call(q,'error')){l.warn('The name is not found for ID: '+this._uid);return;}if(this._subjectId==this._uid){this._renderPronoun(q);}else this._renderOther(q);this.fire('render');},'bind',true,this));},'bind',true,this));},_renderPronoun:function(p){var q='',r=this._objective;if(this._subjectId){r=true;if(this._subjectId===this._uid)this._reflexive=true;}if(this._uid==m.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._possessive){if(this._reflexive){q='your own';}else q='your';}else if(this._reflexive){q='yourself';}else q='you';}else switch(p.gender){case 'male':if(this._possessive){q=this._reflexive?'his own':'his';}else if(this._reflexive){q='himself';}else if(r){q='him';}else q='he';break;case 'female':if(this._possessive){q=this._reflexive?'her own':'her';}else if(this._reflexive){q='herself';}else if(r){q='her';}else q='she';break;default:if(this._getBoolAttribute('use-they',true)){if(this._possessive){if(this._reflexive){q='their own';}else q='their';}else if(this._reflexive){q='themselves';}else if(r){q='them';}else q='they';}else if(this._possessive){if(this._reflexive){q='his/her own';}else q='his/her';}else if(this._reflexive){q='himself/herself';}else if(r){q='him/her';}else q='he/she';break;}if(this._getBoolAttribute('capitalize',false))q=k.upperCaseFirstChar(q);this.dom.innerHTML=q;},_renderOther:function(p){var q='',r='';if(this._uid==m.getUserID()&&this._getBoolAttribute('use-you',true)){if(this._reflexive){if(this._possessive){q='your own';}else q='yourself';}else if(this._possessive){q='your';}else q='you';}else if(p){if(null===p.first_name)p.first_name='';if(null===p.last_name)p.last_name='';if(this._firstnameonly&&p.first_name!==(void 0)){q=h(p.first_name);}else if(this._lastnameonly&&p.last_name!==(void 0))q=h(p.last_name);if(!q)q=h(p.name);if(q!==''&&this._possessive)q+='\'s';}if(!q)q=h(this.getAttribute('if-cant-see','Facebook User'));if(q){if(this._getBoolAttribute('capitalize',false))q=k.upperCaseFirstChar(q);if(p&&this._linked){r=k.getProfileLink(p,q,this.getAttribute('href',null));}else r=q;}this.dom.innerHTML=r;}});e.exports=o;},null);
__d("sdk.XFBML.Registration",["sdk.Auth","sdk.Helper","sdk.XFBML.IframeWidget","sdk.Runtime","UrlMap"],function(a,b,c,d,e,f,g,h,i,j,k){var l=i.extend({_visibleAfter:'immediate',_baseHeight:167,_fieldHeight:28,_skinnyWidth:520,_skinnyBaseHeight:173,_skinnyFieldHeight:52,setupAndValidate:function(){this._attr={action:this.getAttribute('action'),border_color:this.getAttribute('border-color'),channel_url:this.getChannelUrl(),client_id:j.getClientID(),fb_only:this._getBoolAttribute('fb-only',false),fb_register:this._getBoolAttribute('fb-register',false),fields:this.getAttribute('fields'),height:this._getPxAttribute('height'),redirect_uri:this.getAttribute('redirect-uri',window.location.href),no_footer:this._getBoolAttribute('no-footer'),no_header:this._getBoolAttribute('no-header'),onvalidate:this.getAttribute('onvalidate'),width:this._getPxAttribute('width',600),target:this.getAttribute('target')};if(this._attr.onvalidate)this.subscribe('xd.validate',ES(function(m){var n=ES('JSON','parse',false,m.value),o=ES(function(q){this.arbiterInform('Registration.Validation',{errors:q,id:m.id});},'bind',true,this),p=h.executeFunctionByName(this._attr.onvalidate,n,o);if(p)o(p);},'bind',true,this));this.subscribe('xd.authLogin',ES(this._onAuthLogin,'bind',true,this));this.subscribe('xd.authLogout',ES(this._onAuthLogout,'bind',true,this));return true;},getSize:function(){return {width:this._attr.width,height:this._getHeight()};},_getHeight:function(){if(this._attr.height)return this._attr.height;var m;if(!this._attr.fields){m=['name'];}else try{m=ES('JSON','parse',false,this._attr.fields);}catch(n){m=this._attr.fields.split(/,/);}if(this._attr.width<this._skinnyWidth){return this._skinnyBaseHeight+m.length*this._skinnyFieldHeight;}else return this._baseHeight+m.length*this._fieldHeight;},getUrlBits:function(){return {name:'registration',params:this._attr};},getDefaultWebDomain:function(){return k.resolve('www',true);},_onAuthLogin:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.login',this);},_onAuthLogout:function(){if(!g.getAuthResponse())g.getLoginStatus();h.fireEvent('auth.logout',this);}});e.exports=l;},null);
__d("legacy:fb.xfbml",["Assert","sdk.Event","FB","IframePlugin","PluginConfig","PluginTags","XFBML","sdk.domReady","sdk.feature","wrapFunction","sdk.XFBML.Comments","sdk.XFBML.CommentsCount","sdk.XFBML.LoginButton","sdk.XFBML.Name","sdk.XFBML.Registration"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={comments:b('sdk.XFBML.Comments'),comments_count:b('sdk.XFBML.CommentsCount'),login_button:b('sdk.XFBML.LoginButton'),name:b('sdk.XFBML.Name'),registration:b('sdk.XFBML.Registration')},r=o('plugin_tags_blacklist',[]);ES(ES('Object','keys',false,l),'forEach',true,function(t){if(ES(r,'indexOf',true,t)!==-1)return;m.registerTag({xmlns:'fb',localName:t.replace(/_/g,'-'),ctor:j.withParams(l[t],k[t])});});ES(ES('Object','keys',false,q),'forEach',true,function(t){if(ES(r,'indexOf',true,t)!==-1)return;m.registerTag({xmlns:'fb',localName:t.replace(/_/g,'-'),ctor:q[t]});});i.provide('XFBML',{parse:function(t){g.maybeXfbml(t,'Invalid argument');if(t&&t.nodeType===9)t=t.body;return m.parse.apply(null,arguments);}});m.subscribe('parse',ES(h.fire,'bind',true,h,'xfbml.parse'));m.subscribe('render',ES(h.fire,'bind',true,h,'xfbml.render'));h.subscribe('init:post',function(t){if(t.xfbml)setTimeout(p(ES(n,'bind',true,null,m.parse),'entry','init:post:xfbml.parse'),0);});g.define('Xfbml',function(t){return (t.nodeType===1||t.nodeType===9)&&typeof t.nodeName==='string';});try{if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');}catch(s){}},3);
__d("legacy:fb.versioned-sdk",["sdk.Runtime"],function(a,b,c,d,e,f,g){g.setIsVersioned(true);},3);

}).call({}, window.inDapIF ? parent.window : window);
} catch (e) {new Image().src="https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1594576","message":"'+e.message+'"}}');};/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);;/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) slider.currentSlide = 0;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) methods.pausePlay.setup();

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // TOUCH
        if (touch && slider.vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture)
                          e.currentTarget._gesture.addPointer(e.pointerId);
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            el.addEventListener('touchstart', onTouchStart, false);

            function onTouchStart(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            }

            function onTouchMove(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            }

            function onTouchEnd(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            }
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var prefixes = ['webkit','moz','ms','o'];

          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document)
            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
          }
          if (methods.pauseInvisible.visProp) {
            var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                else slider.pause(); //Or just pause
              }
              else {
                if(slider.started) slider.play(); //Initiated before, just play
                else (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play(); //Didn't init before: simply init or wait for it
              }
            });
          }
        },
        isHidden: function() {
          return document[methods.pauseInvisible.visProp] || false;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) slider.pause();

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (slider.vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) clearInterval(slider.animatedSlides);
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) methods.directionNav.update();

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  };
})(jQuery);
;/*
 Highcharts JS v4.0.4 (2014-09-02)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(d){function x(f,a,b,c){var e,g,j;b*=t;a*=t;var i=[],h,k,o;b*=-1;h=c.x;k=c.y;o=(c.z===0?1.0E-4:c.z)*(c.vd||25);o=Math.max(500,o);var q=l(b),n=m(b),r=l(a),s=m(a),p,v,u;d.each(f,function(a){p=a.x-h;v=a.y-k;u=a.z||0;e=n*p-q*u;g=-q*r*p-n*r*u+s*v;j=q*s*p+n*s*u+r*v;e=e*((o-j)/o)+h;g=g*((o-j)/o)+k;i.push({x:z(e),y:z(g),z:z(j)})});return i}function A(f){return f!==void 0&&f!==null}function w(f,a,b,c,e,g,d,i){var h=[];return g>e&&g-e>n/2+1.0E-4?(h=h.concat(w(f,a,b,c,e,e+n/2,d,i)),h=h.concat(w(f,a,
b,c,e+n/2,g,d,i))):g<e&&e-g>n/2+1.0E-4?(h=h.concat(w(f,a,b,c,e,e-n/2,d,i)),h=h.concat(w(f,a,b,c,e-n/2,g,d,i))):(h=g-e,["C",f+b*m(e)-b*B*h*l(e)+d,a+c*l(e)+c*B*h*m(e)+i,f+b*m(g)+b*B*h*l(g)+d,a+c*l(g)-c*B*h*m(g)+i,f+b*m(g)+d,a+c*l(g)+i])}function D(f){if(this.chart.is3d()){var a=this.chart.options.plotOptions.column.grouping;a!==void 0&&!a&&this.group.zIndex!==void 0&&this.group.attr({zIndex:this.group.zIndex*10});var b=this.options,c=this.options.states;this.borderWidth=b.borderWidth=b.edgeWidth||1;
d.each(this.data,function(a){if(a.y!==null)a=a.pointAttr,this.borderColor=d.pick(b.edgeColor,a[""].fill),a[""].stroke=this.borderColor,a.hover.stroke=d.pick(c.hover.edgeColor,this.borderColor),a.select.stroke=d.pick(c.select.edgeColor,this.borderColor)})}f.apply(this,[].slice.call(arguments,1))}var n=Math.PI,t=n/180,l=Math.sin,m=Math.cos,z=Math.round,B=4*(Math.sqrt(2)-1)/3/(n/2);d.SVGRenderer.prototype.toLinePath=function(f,a){var b=[];d.each(f,function(a){b.push("L",a.x,a.y)});b[0]="M";a&&b.push("Z");
return b};d.SVGRenderer.prototype.cuboid=function(f){var a=this.g(),f=this.cuboidPath(f);a.front=this.path(f[0]).attr({zIndex:f[3],"stroke-linejoin":"round"}).add(a);a.top=this.path(f[1]).attr({zIndex:f[4],"stroke-linejoin":"round"}).add(a);a.side=this.path(f[2]).attr({zIndex:f[5],"stroke-linejoin":"round"}).add(a);a.fillSetter=function(a){var c=d.Color(a).brighten(0.1).get(),e=d.Color(a).brighten(-0.1).get();this.front.attr({fill:a});this.top.attr({fill:c});this.side.attr({fill:e});this.color=a;
return this};a.opacitySetter=function(a){this.front.attr({opacity:a});this.top.attr({opacity:a});this.side.attr({opacity:a});return this};a.attr=function(a){a.shapeArgs||A(a.x)?(a=this.renderer.cuboidPath(a.shapeArgs||a),this.front.attr({d:a[0],zIndex:a[3]}),this.top.attr({d:a[1],zIndex:a[4]}),this.side.attr({d:a[2],zIndex:a[5]})):d.SVGElement.prototype.attr.call(this,a);return this};a.animate=function(a,c,e){A(a.x)&&A(a.y)?(a=this.renderer.cuboidPath(a),this.front.attr({zIndex:a[3]}).animate({d:a[0]},
c,e),this.top.attr({zIndex:a[4]}).animate({d:a[1]},c,e),this.side.attr({zIndex:a[5]}).animate({d:a[2]},c,e)):a.opacity?(this.front.animate(a,c,e),this.top.animate(a,c,e),this.side.animate(a,c,e)):d.SVGElement.prototype.animate.call(this,a,c,e);return this};a.destroy=function(){this.front.destroy();this.top.destroy();this.side.destroy();return null};a.attr({zIndex:-f[3]});return a};d.SVGRenderer.prototype.cuboidPath=function(d){var a=d.x,b=d.y,c=d.z,e=d.height,g=d.width,j=d.depth,i=d.alpha,h=d.beta,
a=[{x:a,y:b,z:c},{x:a+g,y:b,z:c},{x:a+g,y:b+e,z:c},{x:a,y:b+e,z:c},{x:a,y:b+e,z:c+j},{x:a+g,y:b+e,z:c+j},{x:a+g,y:b,z:c+j},{x:a,y:b,z:c+j}],a=x(a,i,h,d.origin),d=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[6].x,a[6].y,"L",a[1].x,a[1].y,"Z"],b=["M",a[3].x,a[3].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[4].x,a[4].y,"Z"],c=["M",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[5].x,a[5].y,"L",a[6].x,a[6].y,"Z"],e=["M",a[0].x,a[0].y,"L",a[7].x,a[7].y,"L",a[4].x,a[4].y,"L",a[3].x,a[3].y,"Z"];return[["M",a[0].x,a[0].y,
"L",a[1].x,a[1].y,"L",a[2].x,a[2].y,"L",a[3].x,a[3].y,"Z"],a[7].y<a[1].y?d:a[4].y>a[2].y?b:[],a[6].x>a[1].x?c:a[7].x<a[0].x?e:[],(a[0].z+a[1].z+a[2].z+a[3].z)/4,h>0?(a[0].z+a[7].z+a[6].z+a[1].z)/4:(a[3].z+a[2].z+a[5].z+a[4].z)/4,i>0?(a[1].z+a[2].z+a[5].z+a[6].z)/4:(a[0].z+a[7].z+a[4].z+a[3].z)/4]};d.SVGRenderer.prototype.arc3d=function(f){f.alpha*=t;f.beta*=t;var a=this.g(),b=this.arc3dPath(f),c=a.renderer,e=b.zTop*100;a.shapeArgs=f;a.top=c.path(b.top).attr({zIndex:b.zTop}).add(a);a.side1=c.path(b.side2).attr({zIndex:b.zSide2});
a.side2=c.path(b.side1).attr({zIndex:b.zSide1});a.inn=c.path(b.inn).attr({zIndex:b.zInn});a.out=c.path(b.out).attr({zIndex:b.zOut});a.fillSetter=function(a){this.color=a;var b=d.Color(a).brighten(-0.1).get();this.side1.attr({fill:b});this.side2.attr({fill:b});this.inn.attr({fill:b});this.out.attr({fill:b});this.top.attr({fill:a});return this};a.translateXSetter=function(a){this.out.attr({translateX:a});this.inn.attr({translateX:a});this.side1.attr({translateX:a});this.side2.attr({translateX:a});this.top.attr({translateX:a})};
a.translateYSetter=function(a){this.out.attr({translateY:a});this.inn.attr({translateY:a});this.side1.attr({translateY:a});this.side2.attr({translateY:a});this.top.attr({translateY:a})};a.animate=function(a,b,c){A(a.end)||A(a.start)?(this._shapeArgs=this.shapeArgs,d.SVGElement.prototype.animate.call(this,{_args:a},{duration:b,step:function(){var a=arguments[1],b=a.elem,c=b._shapeArgs,e=a.end,a=a.pos,c=d.merge(c,{x:c.x+(e.x-c.x)*a,y:c.y+(e.y-c.y)*a,r:c.r+(e.r-c.r)*a,innerR:c.innerR+(e.innerR-c.innerR)*
a,start:c.start+(e.start-c.start)*a,end:c.end+(e.end-c.end)*a}),e=b.renderer.arc3dPath(c);b.shapeArgs=c;b.top.attr({d:e.top,zIndex:e.zTop});b.inn.attr({d:e.inn,zIndex:e.zInn});b.out.attr({d:e.out,zIndex:e.zOut});b.side1.attr({d:e.side1,zIndex:e.zSide1});b.side2.attr({d:e.side2,zIndex:e.zSide2})}},c)):d.SVGElement.prototype.animate.call(this,a,b,c);return this};a.destroy=function(){this.top.destroy();this.out.destroy();this.inn.destroy();this.side1.destroy();this.side2.destroy();d.SVGElement.prototype.destroy.call(this)};
a.hide=function(){this.top.hide();this.out.hide();this.inn.hide();this.side1.hide();this.side2.hide()};a.show=function(){this.top.show();this.out.show();this.inn.show();this.side1.show();this.side2.show()};a.zIndex=e;a.attr({zIndex:e});return a};d.SVGRenderer.prototype.arc3dPath=function(d){var a=d.x,b=d.y,c=d.start,e=d.end-1.0E-5,g=d.r,j=d.innerR,i=d.depth,h=d.alpha,k=d.beta,o=m(c),q=l(c),d=m(e),y=l(e),r=g*m(k),s=g*m(h),p=j*m(k);j*=m(h);var v=i*l(k),u=i*l(h),i=["M",a+r*o,b+s*q],i=i.concat(w(a,b,
r,s,c,e,0,0)),i=i.concat(["L",a+p*d,b+j*y]),i=i.concat(w(a,b,p,j,e,c,0,0)),i=i.concat(["Z"]),k=k>0?n/2:0,h=h>0?0:n/2,k=c>-k?c:e>-k?-k:c,t=e<n-h?e:c<n-h?n-h:e,h=["M",a+r*m(k),b+s*l(k)],h=h.concat(w(a,b,r,s,k,t,0,0)),h=h.concat(["L",a+r*m(t)+v,b+s*l(t)+u]),h=h.concat(w(a,b,r,s,t,k,v,u)),h=h.concat(["Z"]),k=["M",a+p*o,b+j*q],k=k.concat(w(a,b,p,j,c,e,0,0)),k=k.concat(["L",a+p*m(e)+v,b+j*l(e)+u]),k=k.concat(w(a,b,p,j,e,c,v,u)),k=k.concat(["Z"]),o=["M",a+r*o,b+s*q,"L",a+r*o+v,b+s*q+u,"L",a+p*o+v,b+j*q+
u,"L",a+p*o,b+j*q,"Z"],a=["M",a+r*d,b+s*y,"L",a+r*d+v,b+s*y+u,"L",a+p*d+v,b+j*y+u,"L",a+p*d,b+j*y,"Z"],b=l((c+e)/2),c=l(c),e=l(e);return{top:i,zTop:g,out:h,zOut:Math.max(b,c,e)*g,inn:k,zInn:Math.max(b,c,e)*g,side1:o,zSide1:c*g*0.99,side2:a,zSide2:e*g*0.99}};d.Chart.prototype.is3d=function(){return this.options.chart.options3d&&this.options.chart.options3d.enabled};d.wrap(d.Chart.prototype,"isInsidePlot",function(d){return this.is3d()?!0:d.apply(this,[].slice.call(arguments,1))});d.getOptions().chart.options3d=
{enabled:!1,alpha:0,beta:0,depth:100,viewDistance:25,frame:{bottom:{size:1,color:"rgba(255,255,255,0)"},side:{size:1,color:"rgba(255,255,255,0)"},back:{size:1,color:"rgba(255,255,255,0)"}}};d.wrap(d.Chart.prototype,"init",function(f){var a=[].slice.call(arguments,1),b;if(a[0].chart.options3d&&a[0].chart.options3d.enabled)b=a[0].plotOptions||{},b=b.pie||{},b.borderColor=d.pick(b.borderColor,void 0);f.apply(this,a)});d.wrap(d.Chart.prototype,"setChartSize",function(d){d.apply(this,[].slice.call(arguments,
1));if(this.is3d()){var a=this.inverted,b=this.clipBox,c=this.margin;b[a?"y":"x"]=-(c[3]||0);b[a?"x":"y"]=-(c[0]||0);b[a?"height":"width"]=this.chartWidth+(c[3]||0)+(c[1]||0);b[a?"width":"height"]=this.chartHeight+(c[0]||0)+(c[2]||0)}});d.wrap(d.Chart.prototype,"redraw",function(d){if(this.is3d())this.isDirtyBox=!0;d.apply(this,[].slice.call(arguments,1))});d.Chart.prototype.retrieveStacks=function(f,a){var b={},c=1;if(f||!a)return this.series;d.each(this.series,function(a){b[a.options.stack||0]?
b[a.options.stack||0].series.push(a):(b[a.options.stack||0]={series:[a],position:c},c++)});b.totalStacks=c+1;return b};d.wrap(d.Axis.prototype,"init",function(f){var a=arguments;if(a[1].is3d())a[2].tickWidth=d.pick(a[2].tickWidth,0),a[2].gridLineWidth=d.pick(a[2].gridLineWidth,1);f.apply(this,[].slice.call(arguments,1))});d.wrap(d.Axis.prototype,"render",function(d){d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.chart,b=a.renderer,c=a.options.chart.options3d,e=c.alpha,g=
c.beta*(a.yAxis[0].opposite?-1:1),j=c.frame,i=j.bottom,h=j.back,j=j.side,k=c.depth,o=this.height,q=this.width,l=this.left,m=this.top,c={x:a.plotLeft+a.plotWidth/2,y:a.plotTop+a.plotHeight/2,z:k,vd:c.viewDistance};if(this.horiz)this.axisLine&&this.axisLine.hide(),g={x:l,y:m+(a.yAxis[0].reversed?-i.size:o),z:0,width:q,height:i.size,depth:k,alpha:e,beta:g,origin:c},this.bottomFrame?this.bottomFrame.animate(g):this.bottomFrame=b.cuboid(g).attr({fill:i.color,zIndex:a.yAxis[0].reversed&&e>0?4:-1}).css({stroke:i.color}).add();
else{var n={x:l,y:m,z:k+1,width:q,height:o+i.size,depth:h.size,alpha:e,beta:g,origin:c};this.backFrame?this.backFrame.animate(n):this.backFrame=b.cuboid(n).attr({fill:h.color,zIndex:-3}).css({stroke:h.color}).add();this.axisLine&&this.axisLine.hide();a={x:(a.yAxis[0].opposite?q:0)+l-j.size,y:m,z:0,width:j.size,height:o+i.size,depth:k+h.size,alpha:e,beta:g,origin:c};this.sideFrame?this.sideFrame.animate(a):this.sideFrame=b.cuboid(a).attr({fill:j.color,zIndex:-2}).css({stroke:j.color}).add()}}});d.wrap(d.Axis.prototype,
"getPlotLinePath",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.chart.is3d())return a;if(a===null)return a;var b=this.chart,c=b.options.chart.options3d,e=c.depth;c.origin={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:e,vd:c.viewDistance};var a=[{x:a[1],y:a[2],z:this.horiz||this.opposite?e:0},{x:a[1],y:a[2],z:e},{x:a[4],y:a[5],z:e},{x:a[4],y:a[5],z:this.horiz||this.opposite?0:e}],e=b.options.inverted?c.beta:c.alpha,g=b.options.inverted?c.alpha:c.beta;g*=b.yAxis[0].opposite?
-1:1;a=x(a,e,g,c.origin);return a=this.chart.renderer.toLinePath(a,!1)});d.wrap(d.Axis.prototype,"getPlotBandPath",function(d){if(this.chart.is3d()){var a=arguments,b=a[1],a=this.getPlotLinePath(a[2]);(b=this.getPlotLinePath(b))&&a?b.push(a[7],a[8],a[4],a[5],a[1],a[2]):b=null;return b}else return d.apply(this,[].slice.call(arguments,1))});d.wrap(d.Tick.prototype,"getMarkPath",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return a;var b=this.axis.chart,c=b.options.chart.options3d,
e={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+b.plotHeight/2,z:c.depth,vd:c.viewDistance},a=[{x:a[1],y:a[2],z:0},{x:a[4],y:a[5],z:0}],g=b.inverted?c.beta:c.alpha,c=b.inverted?c.alpha:c.beta;c*=b.yAxis[0].opposite?-1:1;a=x(a,g,c,e);return a=["M",a[0].x,a[0].y,"L",a[1].x,a[1].y]});d.wrap(d.Tick.prototype,"getLabelPosition",function(d){var a=d.apply(this,[].slice.call(arguments,1));if(!this.axis.chart.is3d())return a;var b=this.axis.chart,c=b.options.chart.options3d,e={x:b.plotLeft+b.plotWidth/2,y:b.plotTop+
b.plotHeight/2,z:c.depth,vd:c.viewDistance},g=b.inverted?c.beta:c.alpha,c=b.inverted?c.alpha:c.beta;c*=b.yAxis[0].opposite?-1:1;return a=x([{x:a.x,y:a.y,z:0}],g,c,e)[0]});d.wrap(d.Axis.prototype,"drawCrosshair",function(d){var a=arguments;this.chart.is3d()&&a[2]&&(a[2]={plotX:a[2].plotXold||a[2].plotX,plotY:a[2].plotYold||a[2].plotY});d.apply(this,[].slice.call(a,1))});d.wrap(d.seriesTypes.column.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=
this.chart,b=this.options,c=a.options.chart.options3d,e=b.depth||25,g={x:a.plotWidth/2,y:a.plotHeight/2,z:c.depth,vd:c.viewDistance},j=c.alpha,i=c.beta*(a.yAxis[0].opposite?-1:1),h=(b.stacking?b.stack||0:this._i)*(e+(b.groupZPadding||1));b.grouping!==!1&&(h=0);h+=b.groupZPadding||1;d.each(this.data,function(a){if(a.y!==null){var b=a.shapeArgs,c=a.tooltipPos;a.shapeType="cuboid";b.alpha=j;b.beta=i;b.z=h;b.origin=g;b.depth=e;c=x([{x:c[0],y:c[1],z:h}],j,i,g)[0];a.tooltipPos=[c.x,c.y]}})}});d.wrap(d.seriesTypes.column.prototype,
"animate",function(f){if(this.chart.is3d()){var a=arguments[1],b=this.yAxis,c=this,e=this.yAxis.reversed;if(d.svg)a?d.each(c.data,function(a){if(a.y!==null&&(a.height=a.shapeArgs.height,a.shapey=a.shapeArgs.y,a.shapeArgs.height=1,!e))a.shapeArgs.y=a.stackY?a.plotY+b.translate(a.stackY):a.plotY+(a.negative?-a.height:a.height)}):(d.each(c.data,function(a){if(a.y!==null)a.shapeArgs.height=a.height,a.shapeArgs.y=a.shapey,a.graphic&&a.graphic.animate(a.shapeArgs,c.options.animation)}),this.drawDataLabels(),
c.animate=null)}else f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.column.prototype,"init",function(d){d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.options,b=a.grouping,c=a.stacking,e=0;if((b===void 0||b)&&c){b=this.chart.retrieveStacks(b,c);c=a.stack||0;for(e=0;e<b[c].series.length;e++)if(b[c].series[e]===this)break;e=b.totalStacks*10-10*(b.totalStacks-b[c].position)-e}a.zIndex=e}});d.wrap(d.Series.prototype,"alignDataLabel",function(d){if(this.chart.is3d()&&
(this.type==="column"||this.type==="columnrange")){var a=this.chart,b=a.options.chart.options3d,c=arguments[4],e={x:c.x,y:c.y,z:0},e=x([e],b.alpha,b.beta*(a.yAxis[0].opposite?-1:1),{x:a.plotWidth/2,y:a.plotHeight/2,z:b.depth,vd:b.viewDistance})[0];c.x=e.x;c.y=e.y}d.apply(this,[].slice.call(arguments,1))});d.seriesTypes.columnrange&&d.wrap(d.seriesTypes.columnrange.prototype,"drawPoints",D);d.wrap(d.seriesTypes.column.prototype,"drawPoints",D);var C=d.getOptions();C.plotOptions.cylinder=d.merge(C.plotOptions.column);
C=d.extendClass(d.seriesTypes.column,{type:"cylinder"});d.seriesTypes.cylinder=C;d.wrap(d.seriesTypes.cylinder.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this.chart,b=a.options,c=b.plotOptions.cylinder,b=b.chart.options3d,e=c.depth||0,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},j=b.alpha,i=c.stacking?(this.options.stack||0)*e:this._i*e;i+=e/2;c.grouping!==!1&&(i=0);d.each(this.data,
function(a){var b=a.shapeArgs;a.shapeType="arc3d";b.x+=e/2;b.z=i;b.start=0;b.end=2*n;b.r=e*0.95;b.innerR=0;b.depth=b.height*(1/l((90-j)*t))-i;b.alpha=90-j;b.beta=0;b.origin=g})}});d.wrap(d.seriesTypes.pie.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var a=this,b=a.chart,c=a.options,e=c.depth||0,g=b.options.chart.options3d,j={x:b.plotWidth/2,y:b.plotHeight/2,z:g.depth},i=g.alpha,h=g.beta,k=c.stacking?(c.stack||0)*e:a._i*e;k+=e/2;c.grouping!==!1&&
(k=0);d.each(a.data,function(b){b.shapeType="arc3d";var c=b.shapeArgs;if(b.y)c.z=k,c.depth=e*0.75,c.origin=j,c.alpha=i,c.beta=h,c=(c.end+c.start)/2,b.slicedTranslation={translateX:z(m(c)*a.options.slicedOffset*m(i*t)),translateY:z(l(c)*a.options.slicedOffset*m(i*t))}})}});d.wrap(d.seriesTypes.pie.prototype.pointClass.prototype,"haloPath",function(d){var a=arguments;return this.series.chart.is3d()?[]:d.call(this,a[1])});d.wrap(d.seriesTypes.pie.prototype,"drawPoints",function(f){if(this.chart.is3d()){var a=
this.options,b=this.options.states;this.borderWidth=a.borderWidth=a.edgeWidth||1;this.borderColor=a.edgeColor=d.pick(a.edgeColor,a.borderColor,void 0);b.hover.borderColor=d.pick(b.hover.edgeColor,this.borderColor);b.hover.borderWidth=d.pick(b.hover.edgeWidth,this.borderWidth);b.select.borderColor=d.pick(b.select.edgeColor,this.borderColor);b.select.borderWidth=d.pick(b.select.edgeWidth,this.borderWidth);d.each(this.data,function(a){var c=a.pointAttr;c[""].stroke=a.series.borderColor||a.color;c[""]["stroke-width"]=
a.series.borderWidth;c.hover.stroke=b.hover.borderColor;c.hover["stroke-width"]=b.hover.borderWidth;c.select.stroke=b.select.borderColor;c.select["stroke-width"]=b.select.borderWidth})}f.apply(this,[].slice.call(arguments,1));if(this.chart.is3d()){var c=this.group;d.each(this.points,function(a){a.graphic.out.add(c);a.graphic.inn.add(c);a.graphic.side1.add(c);a.graphic.side2.add(c)})}});d.wrap(d.seriesTypes.pie.prototype,"drawDataLabels",function(f){this.chart.is3d()&&d.each(this.data,function(a){var b=
a.shapeArgs,c=b.r,d=b.depth,f=b.alpha*t,b=(b.start+b.end)/2,a=a.labelPos;a[1]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0);a[3]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0);a[5]+=-c*(1-m(f))*l(b)+(l(b)>0?l(f)*d:0)});f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.pie.prototype,"addPoint",function(d){d.apply(this,[].slice.call(arguments,1));this.chart.is3d()&&this.update()});d.wrap(d.seriesTypes.pie.prototype,"animate",function(f){if(this.chart.is3d()){var a=arguments[1],b=this.options.animation,c=this.center,
e=this.group,g=this.markerGroup;if(d.svg)if(b===!0&&(b={}),a){if(e.oldtranslateX=e.translateX,e.oldtranslateY=e.translateY,a={translateX:c[0],translateY:c[1],scaleX:0.001,scaleY:0.001},e.attr(a),g)g.attrSetters=e.attrSetters,g.attr(a)}else a={translateX:e.oldtranslateX,translateY:e.oldtranslateY,scaleX:1,scaleY:1},e.animate(a,b),g&&g.animate(a,b),this.animate=null}else f.apply(this,[].slice.call(arguments,1))});d.wrap(d.seriesTypes.scatter.prototype,"translate",function(f){f.apply(this,[].slice.call(arguments,
1));if(this.chart.is3d()){var a=this.chart,b=this.chart.options.chart.options3d,c=b.alpha,e=b.beta,g={x:a.inverted?a.plotHeight/2:a.plotWidth/2,y:a.inverted?a.plotWidth/2:a.plotHeight/2,z:b.depth,vd:b.viewDistance},b=b.depth,j=a.options.zAxis||{min:0,max:b},i=b/(j.max-j.min);d.each(this.data,function(a){var b={x:a.plotX,y:a.plotY,z:(a.z-j.min)*i},b=x([b],c,e,g)[0];a.plotXold=a.plotX;a.plotYold=a.plotY;a.plotX=b.x;a.plotY=b.y;a.plotZ=b.z})}});d.wrap(d.seriesTypes.scatter.prototype,"init",function(d){var a=
d.apply(this,[].slice.call(arguments,1));if(this.chart.is3d())this.pointArrayMap=["x","y","z"],this.tooltipOptions.pointFormat=this.userOptions.tooltip?this.userOptions.tooltip.pointFormat||"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>":"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>";return a});if(d.VMLRenderer)d.setOptions({animate:!1}),d.VMLRenderer.prototype.cuboid=d.SVGRenderer.prototype.cuboid,d.VMLRenderer.prototype.cuboidPath=d.SVGRenderer.prototype.cuboidPath,
d.VMLRenderer.prototype.toLinePath=d.SVGRenderer.prototype.toLinePath,d.VMLRenderer.prototype.createElement3D=d.SVGRenderer.prototype.createElement3D,d.VMLRenderer.prototype.arc3d=function(f){f=d.SVGRenderer.prototype.arc3d.call(this,f);f.css({zIndex:f.zIndex});return f},d.VMLRenderer.prototype.arc3dPath=d.SVGRenderer.prototype.arc3dPath,d.Chart.prototype.renderSeries=function(){for(var d,a=this.series.length;a--;)d=this.series[a],d.translate(),d.setTooltipPoints&&d.setTooltipPoints(),d.render()},
d.wrap(d.Axis.prototype,"render",function(d){d.apply(this,[].slice.call(arguments,1));this.sideFrame&&(this.sideFrame.css({zIndex:0}),this.sideFrame.front.attr({fill:this.sideFrame.color}));this.bottomFrame&&(this.bottomFrame.css({zIndex:1}),this.bottomFrame.front.attr({fill:this.bottomFrame.color}));this.backFrame&&(this.backFrame.css({zIndex:0}),this.backFrame.front.attr({fill:this.backFrame.color}))})})(Highcharts);
;/*
 Highcharts JS v4.0.4 (2014-09-02)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l,C){function K(a,b,c){this.init.call(this,a,b,c)}var P=l.arrayMin,Q=l.arrayMax,s=l.each,F=l.extend,q=l.merge,R=l.map,o=l.pick,x=l.pInt,p=l.getOptions().plotOptions,g=l.seriesTypes,v=l.extendClass,L=l.splat,r=l.wrap,M=l.Axis,y=l.Tick,H=l.Point,S=l.Pointer,T=l.CenteredSeriesMixin,z=l.TrackerMixin,t=l.Series,w=Math,D=w.round,A=w.floor,N=w.max,U=l.Color,u=function(){};F(K.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;if(b.angular)e.background={};d.options=a=q(e,a);
(a=a.background)&&s([].concat(L(a)).reverse(),function(a){var b=a.backgroundColor,a=q(d.defaultBackgroundOptions,a);if(b)a.backgroundColor=b;a.color=a.backgroundColor;c.options.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});
var G=M.prototype,y=y.prototype,V={getOffset:u,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:u,setCategories:u,setTitle:u},O={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},
maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=q(this.defaultOptions,this.defaultRadialOptions,a);if(!a.plotBands)a.plotBands=[]},getOffset:function(){G.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=T.getCenter.call(this.pane)},getLinePath:function(a,b){var c=this.center,b=o(b,
c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){G.setAxisTranslation.call(this);if(this.center)this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0},beforeSetTickPositions:function(){this.autoConnect&&(this.max+=this.categories&&
1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){G.setAxisSize.call(this);if(this.isRadial){this.center=this.pane.center=l.CenteredSeriesMixin.getCenter.call(this.pane);if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;this.len=this.width=this.height=this.center[2]*o(this.sector,1)/2}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,o(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},postTranslate:function(a,
b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,h=[o(c.outerRadius,"100%"),c.innerRadius,o(c.thickness,10)],j=/%$/,k,m=this.isCircular;this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(m||(h[0]=this.translate(a),h[1]=this.translate(b)),h=R(h,function(a){j.test(a)&&(a=x(a,10)*f/100);
return a}),c.shape==="circle"||!m?(a=-Math.PI/2,b=Math.PI*1.5,k=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],h[0],h[0],{start:a,end:b,innerR:o(h[1],h[0]-h[2]),open:k}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),h,j,k;c.isCircular?k=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation==="circle"?(a=c.translate(a))&&(k=c.getLinePath(0,a)):(s(e.xAxis,function(a){a.pane===
c.pane&&(h=a)}),k=[],a=c.translate(a),d=h.tickPositions,h.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),s(d,function(f,c){j=h.getPosition(f,a);k.push(c?"L":"M",j.x,j.y)}));return k},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,low:0}[c.align]*a[2]+(c.y||0)}}};r(G,"init",function(a,b,c){var i;var d=b.angular,e=b.polar,f=c.isX,h=d&&f,j,k;k=b.options;var m=c.pane||0;if(d){if(F(this,
h?V:O),j=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(e)F(this,O),this.defaultRadialOptions=(j=f)?this.defaultRadialXOptions:q(this.defaultYAxisOptions,this.defaultRadialYOptions);a.call(this,b,c);if(!h&&(d||e)){a=this.options;if(!b.panes)b.panes=[];this.pane=(i=b.panes[m]=b.panes[m]||new K(L(k.pane)[m],b,this),m=i);m=m.options;b.inverted=!1;k.chart.zoomType=null;this.startAngleRad=b=(m.startAngle-90)*Math.PI/180;this.endAngleRad=k=(o(m.endAngle,m.startAngle+360)-90)*Math.PI/
180;this.offset=a.offset||0;if((this.isCircular=j)&&c.max===C&&k-b===2*Math.PI)this.autoConnect=!0}});r(y,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});r(y,"getLabelPosition",function(a,b,c,d,e,f,h,j,k){var m=this.axis,i=f.y,n=f.align,g=(m.translate(this.pos)+m.startAngleRad+Math.PI/2)/Math.PI*180%360;m.isRadial?(a=m.getPosition(this.pos,m.center[2]/2+o(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:g}):i===null&&(i=m.chart.renderer.fontMetrics(d.styles.fontSize).b-
d.getBBox().height/2),n===null&&(n=m.isCircular?g>20&&g<160?"left":g>200&&g<340?"right":"center":"center",d.attr({align:n})),a.x+=f.x,a.y+=i):a=a.call(this,b,c,d,e,f,h,j,k);return a});r(y,"getMarkPath",function(a,b,c,d,e,f,h){var j=this.axis;j.isRadial?(a=j.getPosition(this.pos,j.center[2]/2+d),b=["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,h);return b});p.arearange=q(p.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});g.arearange=v(g.area,{type:"arearange",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"low",getSegments:function(){var a=this;s(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null))b.y=null;else if(b.low===null&&b.high!==null)b.y=b.high});t.prototype.getSegments.call(this)},translate:function(){var a=this.yAxis;g.area.prototype.translate.apply(this);
s(this.points,function(b){var c=b.low,d=b.high,e=b.plotY;d===null&&c===null?b.y=null:c===null?(b.plotLow=b.plotY=null,b.plotHigh=a.translate(d,0,1,0,1)):d===null?(b.plotLow=e,b.plotHigh=null):(b.plotLow=e,b.plotHigh=a.translate(d,0,1,0,1))})},getSegmentPath:function(a){var b,c=[],d=a.length,e=t.prototype.getSegmentPath,f,h;h=this.options;var j=h.step;for(b=HighchartsAdapter.grep(a,function(a){return a.plotLow!==null});d--;)f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotX,plotY:f.plotHigh});a=e.call(this,
b);if(j)j===!0&&(j="left"),h.step={left:"right",center:"center",right:"left"}[j];c=e.call(this,c);h.step=j;h=[].concat(a,c);c[0]="L";this.areaPath=this.areaPath.concat(a,c);return h},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=t.prototype,f=this.options.dataLabels,h=f.align,j,k=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)if(j=a[c],j.y=j.high,j._plotY=j.plotY,j.plotY=j.plotHigh,d[c]=j.dataLabel,j.dataLabel=j.dataLabelUpper,j.below=!1,k){if(!h)f.align="left";
f.x=f.xHigh}else f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=b;c--;)if(j=a[c],j.dataLabelUpper=j.dataLabel,j.dataLabel=d[c],j.y=j.low,j.plotY=j._plotY,j.below=!0,k){if(!h)f.align="right";f.x=f.xLow}else f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}f.align=h},alignDataLabel:function(){g.column.prototype.alignDataLabel.apply(this,arguments)},getSymbol:u,drawPoints:u});p.areasplinerange=q(p.arearange);g.areasplinerange=v(g.arearange,{type:"areasplinerange",
getPointSpline:g.spline.prototype.getPointSpline});(function(){var a=g.column.prototype;p.columnrange=q(p.column,p.arearange,{lineWidth:1,pointRange:null});g.columnrange=v(g.arearange,{type:"columnrange",translate:function(){var b=this,c=b.yAxis,d;a.translate.apply(b);s(b.points,function(a){var f=a.shapeArgs,h=b.options.minPointLength,j;a.tooltipPos=null;a.plotHigh=d=c.translate(a.high,0,1,0,1);a.plotLow=a.plotY;j=d;a=a.plotY-d;a<h&&(h-=a,a+=h,j-=h/2);f.height=a;f.y=j})},trackerGroups:["group","dataLabelsGroup"],
drawGraph:u,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})})();p.gauge=q(p.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,style:{fontWeight:"bold"},verticalAlign:"top",zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});z={type:"gauge",pointClass:v(H,{setState:function(a){this.state=a}}),angular:!0,drawGraph:u,fixedBox:!0,forceDL:!0,
trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();s(this.points,function(d){var e=q(b.dial,d.dial),f=x(o(e.radius,80))*c[2]/200,h=x(o(e.baseLength,70))*f/100,j=x(o(e.rearLength,10))*f/100,k=e.baseWidth||3,m=e.topWidth||1,i=b.overshoot,n=a.startAngleRad+a.translate(d.y,null,null,null,!0);i&&typeof i==="number"?(i=i/180*Math.PI,n=Math.max(a.startAngleRad-i,Math.min(a.endAngleRad+i,n))):b.wrap===!1&&(n=Math.max(a.startAngleRad,
Math.min(a.endAngleRad,n)));n=n*180/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-j,-k/2,"L",h,-k/2,f,-m/2,f,m/2,h,k/2,-j,k/2,"z"],translateX:c[0],translateY:c[1],rotation:n};d.plotX=c[0];d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;s(a.points,function(c){var b=c.graphic,k=c.shapeArgs,e=k.d,i=q(d.dial,c.dial);b?(b.animate(k),k.d=e):c.graphic=f[c.shapeType](k).attr({stroke:i.borderColor||"none","stroke-width":i.borderWidth||
0,fill:i.backgroundColor||"black",rotation:k.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,o(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=this;if(!a)s(b.points,function(a){var d=a.graphic;d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=
null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);t.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,b){t.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();o(b,!0)&&this.chart.redraw()},drawTracker:z&&z.drawTrackerPoint};g.gauge=v(g.line,z);p.boxplot=q(p.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,
tooltip:{pointFormat:'<span style="color:{series.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});g.boxplot=v(g.column,{type:"boxplot",pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},
drawDataLabels:u,translate:function(){var a=this.yAxis,b=this.pointArrayMap;g.column.prototype.translate.apply(this);s(this.points,function(c){s(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=this,b=a.points,c=a.options,d=a.chart.renderer,e,f,h,j,k,m,i,n,g,l,p,I,r,q,J,u,v,t,w,x,z,y,E=a.doQuartiles!==!1,B=parseInt(a.options.whiskerLength,10)/100;s(b,function(b){g=b.graphic;z=b.shapeArgs;p={};q={};u={};y=b.color||a.color;if(b.plotY!==C)if(e=b.pointAttr[b.selected?
"selected":""],v=z.width,t=A(z.x),w=t+v,x=D(v/2),f=A(E?b.q1Plot:b.lowPlot),h=A(E?b.q3Plot:b.lowPlot),j=A(b.highPlot),k=A(b.lowPlot),p.stroke=b.stemColor||c.stemColor||y,p["stroke-width"]=o(b.stemWidth,c.stemWidth,c.lineWidth),p.dashstyle=b.stemDashStyle||c.stemDashStyle,q.stroke=b.whiskerColor||c.whiskerColor||y,q["stroke-width"]=o(b.whiskerWidth,c.whiskerWidth,c.lineWidth),u.stroke=b.medianColor||c.medianColor||y,u["stroke-width"]=o(b.medianWidth,c.medianWidth,c.lineWidth),u["stroke-linecap"]="round",
i=p["stroke-width"]%2/2,n=t+x+i,l=["M",n,h,"L",n,j,"M",n,f,"L",n,k],E&&(i=e["stroke-width"]%2/2,n=A(n)+i,f=A(f)+i,h=A(h)+i,t+=i,w+=i,I=["M",t,h,"L",t,f,"L",w,f,"L",w,h,"L",t,h,"z"]),B&&(i=q["stroke-width"]%2/2,j+=i,k+=i,r=["M",n-x*B,j,"L",n+x*B,j,"M",n-x*B,k,"L",n+x*B,k]),i=u["stroke-width"]%2/2,m=D(b.medianPlot)+i,J=["M",t,m,"L",w,m],g)b.stem.animate({d:l}),B&&b.whiskers.animate({d:r}),E&&b.box.animate({d:I}),b.medianShape.animate({d:J});else{b.graphic=g=d.g().add(a.group);b.stem=d.path(l).attr(p).add(g);
if(B)b.whiskers=d.path(r).attr(q).add(g);if(E)b.box=d.path(I).attr(e).add(g);b.medianShape=d.path(J).attr(u).add(g)}})}});p.errorbar=q(p.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null});g.errorbar=v(g.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:g.arearange?
g.arearange.prototype.drawDataLabels:u,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||g.column.prototype.getColumnMetrics.call(this)}});p.waterfall=q(p.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",states:{hover:{lineWidthPlus:0}}});g.waterfall=v(g.column,{type:"waterfall",upColorProp:"fill",pointArrayMap:["low","y"],pointValKey:"y",init:function(a,b){b.stacking=!0;g.column.prototype.init.call(this,a,b)},translate:function(){var a=
this.yAxis,b,c,d,e,f,h,j,k,m,i;b=this.options.threshold;g.column.prototype.translate.apply(this);k=m=b;d=this.points;for(c=0,b=d.length;c<b;c++){e=d[c];f=e.shapeArgs;h=this.getStack(c);i=h.points[this.index+","+c];if(isNaN(e.y))e.y=this.yData[c];j=N(k,k+e.y)+i[0];f.y=a.translate(j,0,1);e.isSum?(f.y=a.translate(i[1],0,1),f.height=a.translate(i[0],0,1)-f.y):e.isIntermediateSum?(f.y=a.translate(i[1],0,1),f.height=a.translate(m,0,1)-f.y,m=i[1]):k+=h.total;f.height<0&&(f.y+=f.height,f.height*=-1);e.plotY=
f.y=D(f.y)-this.borderWidth%2/2;f.height=N(D(f.height),0.001);e.yBottom=f.y+f.height;f=e.plotY+(e.negative?f.height:0);this.chart.inverted?e.tooltipPos[0]=a.len-f:e.tooltipPos[1]=f}},processData:function(a){var b=this.yData,c=this.points,d,e=b.length,f,h,j,k,m,i;h=f=j=k=this.options.threshold||0;for(i=0;i<e;i++)m=b[i],d=c&&c[i]?c[i]:{},m==="sum"||d.isSum?b[i]=h:m==="intermediateSum"||d.isIntermediateSum?b[i]=f:(h+=m,f+=m),j=Math.min(h,j),k=Math.max(h,k);t.prototype.processData.call(this,a);this.dataMin=
j;this.dataMax=k},toYData:function(a){if(a.isSum)return a.x===0?null:"sum";else if(a.isIntermediateSum)return a.x===0?null:"intermediateSum";return a.y},getAttribs:function(){g.column.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,c=a.upColor||this.color,a=l.Color(c).brighten(0.1).get(),d=q(this.pointAttr),e=this.upColorProp;d[""][e]=c;d.hover[e]=b.hover.upColor||a;d.select[e]=b.select.upColor||c;s(this.points,function(a){if(a.y>0&&!a.color)a.pointAttr=d,a.color=c})},getGraphPath:function(){var a=
this.data,b=a.length,c=D(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,h;for(h=1;h<b;h++)f=a[h].shapeArgs,e=a[h-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[h-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getExtremes:u,getStack:function(a){var b=this.yAxis.stacks,c=this.stackKey;this.processedYData[a]<this.options.threshold&&(c="-"+c);return b[c][a]},drawGraph:t.prototype.drawGraph});p.bubble=q(p.scatter,{dataLabels:{formatter:function(){return this.point.z},inside:!0,
style:{color:"white",textShadow:"0px 0px 3px black"},verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0});z=v(H,{haloPath:function(){return H.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)}});g.bubble=v(g.scatter,{type:"bubble",pointClass:z,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group",
"dataLabelsGroup"],bubblePadding:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=o(b.fillOpacity,0.5),a=a||b.fillColor||this.color;c!==1&&(a=U(a).setOpacity(c).get("rgba"));return a},convertAttribs:function(){var a=t.prototype.convertAttribs.apply(this,arguments);a.fill=this.applyOpacity(a.fill);return a},getRadii:function(a,b,c,d){var e,f,h,j=this.zData,k=[],m=this.options.sizeBy!=="width";for(f=0,e=j.length;f<
e;f++)h=b-a,h=h>0?(j[f]-a)/(b-a):0.5,m&&h>=0&&(h=Math.sqrt(h)),k.push(w.ceil(c+h*(d-c))/2);this.radii=k},animate:function(a){var b=this.options.animation;if(!a)s(this.points,function(a){var d=a.graphic,a=a.shapeArgs;d&&a&&(d.attr("r",1),d.animate({r:a.r},b))}),this.animate=null},translate:function(){var a,b=this.data,c,d,e=this.radii;g.scatter.prototype.translate.call(this);for(a=b.length;a--;)c=b[a],d=e?e[a]:0,c.negative=c.z<(this.options.zThreshold||0),d>=this.minPxSize/2?(c.shapeType="circle",
c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=C},drawLegendSymbol:function(a,b){var c=x(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);b.legendSymbol.isMarker=!0},drawPoints:g.column.prototype.drawPoints,alignDataLabel:g.column.prototype.alignDataLabel});M.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,d=0,e=b,f=this.isXAxis,h=
f?"xData":"yData",j=this.min,k={},m=w.min(c.plotWidth,c.plotHeight),i=Number.MAX_VALUE,n=-Number.MAX_VALUE,g=this.max-j,l=b/g,p=[];this.tickPositions&&(s(this.series,function(b){var h=b.options;if(b.bubblePadding&&(b.visible||!c.options.chart.ignoreHiddenSeries))if(a.allowZoomOutside=!0,p.push(b),f)s(["minSize","maxSize"],function(a){var b=h[a],f=/%$/.test(b),b=x(b);k[a]=f?m*b/100:b}),b.minPxSize=k.minSize,b=b.zData,b.length&&(i=o(h.zMin,w.min(i,w.max(P(b),h.displayNegative===!1?h.zThreshold:-Number.MAX_VALUE))),
n=o(h.zMax,w.max(n,Q(b))))}),s(p,function(a){var b=a[h],c=b.length,m;f&&a.getRadii(i,n,k.minSize,k.maxSize);if(g>0)for(;c--;)typeof b[c]==="number"&&(m=a.radii[c],d=Math.min((b[c]-j)*l-m,d),e=Math.max((b[c]-j)*l+m,e))}),p.length&&g>0&&o(this.options.min,this.userMin)===C&&o(this.options.max,this.userMax)===C&&(e-=b,l*=(b+d-e)/b,this.min+=d/l,this.max+=e/l))};(function(){function a(a,b,c){a.call(this,b,c);if(this.chart.polar)this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},
this.closedStacks=!0}function b(a,b){var c=this.chart,d=this.options.animation,e=this.group,i=this.markerGroup,n=this.xAxis.center,g=c.plotLeft,l=c.plotTop;if(c.polar){if(c.renderer.isSVG)d===!0&&(d={}),b?(c={translateX:n[0]+g,translateY:n[1]+l,scaleX:0.001,scaleY:0.001},e.attr(c),i&&i.attr(c)):(c={translateX:g,translateY:l,scaleX:1,scaleY:1},e.animate(c,d),i&&i.animate(c,d),this.animate=null)}else a.call(this,b)}var c=t.prototype,d=S.prototype,e;c.toXY=function(a){var b,c=this.chart,d=a.plotX;b=
a.plotY;a.rectPlotX=d;a.rectPlotY=b;d=(d/Math.PI*180+this.xAxis.pane.options.startAngle)%360;d<0&&(d+=360);a.clientX=d;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop};c.orderTooltipPoints=function(a){if(this.chart.polar&&(a.sort(function(a,b){return a.clientX-b.clientX}),a[0]))a[0].wrappedClientX=a[0].clientX+360,a.push(a[0])};g.area&&r(g.area.prototype,"init",a);g.areaspline&&r(g.areaspline.prototype,"init",a);g.spline&&
r(g.spline.prototype,"getPointSpline",function(a,b,c,d){var e,i,n,g,l,p,o;if(this.chart.polar){e=c.plotX;i=c.plotY;a=b[d-1];n=b[d+1];this.connectEnds&&(a||(a=b[b.length-2]),n||(n=b[1]));if(a&&n)g=a.plotX,l=a.plotY,b=n.plotX,p=n.plotY,g=(1.5*e+g)/2.5,l=(1.5*i+l)/2.5,n=(1.5*e+b)/2.5,o=(1.5*i+p)/2.5,b=Math.sqrt(Math.pow(g-e,2)+Math.pow(l-i,2)),p=Math.sqrt(Math.pow(n-e,2)+Math.pow(o-i,2)),g=Math.atan2(l-i,g-e),l=Math.atan2(o-i,n-e),o=Math.PI/2+(g+l)/2,Math.abs(g-o)>Math.PI/2&&(o-=Math.PI),g=e+Math.cos(o)*
b,l=i+Math.sin(o)*b,n=e+Math.cos(Math.PI+o)*p,o=i+Math.sin(Math.PI+o)*p,c.rightContX=n,c.rightContY=o;d?(c=["C",a.rightContX||a.plotX,a.rightContY||a.plotY,g||e,l||i,e,i],a.rightContX=a.rightContY=null):c=["M",e,i]}else c=a.call(this,b,c,d);return c});r(c,"translate",function(a){a.call(this);if(this.chart.polar&&!this.preventPostTranslate)for(var a=this.points,b=a.length;b--;)this.toXY(a[b])});r(c,"getSegmentPath",function(a,b){var c=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&
b[b.length-1]===c[c.length-1]&&c[0].y!==null)this.connectEnds=!0,b=[].concat(b,[c[0]]);return a.call(this,b)});r(c,"animate",b);r(c,"setTooltipPoints",function(a,b){this.chart.polar&&F(this.xAxis,{tooltipLen:360});return a.call(this,b)});if(g.column)e=g.column.prototype,r(e,"animate",b),r(e,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,i=this.chart.renderer,g,l;this.preventPostTranslate=!0;a.call(this);if(b.isRadial){b=this.points;for(l=b.length;l--;)g=b[l],
a=g.barX+e,g.shapeType="path",g.shapeArgs={d:i.symbols.arc(d[0],d[1],c-g.plotY,null,{start:a,end:a+g.pointWidth,innerR:c-o(g.yBottom,c)})},this.toXY(g),g.tooltipPos=[g.plotX,g.plotY],g.ttBelow=g.plotY>d[1]}}),r(e,"alignDataLabel",function(a,b,d,e,g,i){if(this.chart.polar){a=b.rectPlotX/Math.PI*180;if(e.align===null)e.align=a>20&&a<160?"left":a>200&&a<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=a<45||a>315?"bottom":a>135&&a<225?"top":"middle";c.alignDataLabel.call(this,b,d,e,g,i)}else a.call(this,
b,d,e,g,i)});r(d,"getIndex",function(a,b){var c,d=this.chart,e;d.polar?(e=d.xAxis[0].center,c=b.chartX-e[0]-d.plotLeft,d=b.chartY-e[1]-d.plotTop,c=180-Math.round(Math.atan2(c,d)/Math.PI*180)):c=a.call(this,b);return c});r(d,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?s(c.axes,function(a){var e=a.isXAxis,f=a.center,g=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(g,f):Math.sqrt(Math.pow(g,
2)+Math.pow(f,2)),!0)})}):d=a.call(this,b);return d})})()})(Highcharts);
;/*
 Highcharts JS v4.0.4 (2014-09-02)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function r(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function w(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function y(a,b){return parseInt(a,b||
10)}function Ga(a){return typeof a==="string"}function da(a){return a&&typeof a==="object"}function Ha(a){return Object.prototype.toString.call(a)==="[object Array]"}function ja(a){return typeof a==="number"}function za(a){return V.log(a)/V.LN10}function ka(a){return V.pow(10,a)}function la(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==u&&a!==null}function F(a,b,c){var d,e;if(Ga(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&
da(b))for(d in b)a.setAttribute(d,b[d]);return e}function ra(a){return Ha(a)?a:[a]}function p(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==u&&c!==null)return c}function B(a,b){if(Aa&&!ba&&b&&b.opacity!==u)b.filter="alpha(opacity="+b.opacity*100+")";r(a.style,b)}function $(a,b,c,d,e){a=x.createElement(a);b&&r(a,b);e&&B(a,{padding:0,border:P,margin:0});c&&B(a,c);d&&d.appendChild(a);return a}function ma(a,b){var c=function(){return u};c.prototype=new a;r(c.prototype,b);return c}function Ba(a,
b,c,d){var e=K.numberFormat,f=E.lang,g=+a||0,h=b===-1?(g.toString().split(".")[1]||"").length:isNaN(b=Q(b))?2:b,i=c===void 0?f.decimalPoint:c,f=d===void 0?f.thousandsSep:d,j=g<0?"-":"",k=String(y(g=Q(g).toFixed(h))),l=k.length>3?k.length%3:0;return e!==Ba?e(a,b,c,d):j+(l?k.substr(0,l)+f:"")+k.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+f)+(h?i+Q(g-k).toFixed(h).slice(2):"")}function Ia(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Na(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(d);return c.apply(this,a)}}function Ja(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=E.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=Ba(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=cb(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function mb(a){return V.pow(10,U(V.log(a)/
V.LN10))}function nb(a,b,c,d){var e,c=p(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function ob(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Oa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ca(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}
function Pa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Qa(a){db||(db=$(Ka));a&&db.appendChild(a);db.innerHTML=""}function ea(a){return parseFloat(a.toPrecision(14))}function Ra(a,b){va=p(a,b.animation)}function Bb(){var a=E.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";Da=E.global.Date||window.Date;Sa=(a&&E.global.timezoneOffset||0)*6E4;eb=a?Da.UTC:function(a,b,c,g,h,i){return(new Da(a,b,p(c,1),p(g,0),p(h,0),p(i,0))).getTime()};pb=b+"Minutes";qb=b+
"Hours";rb=b+"Day";Xa=b+"Date";fb=b+"Month";gb=b+"FullYear";Cb=c+"Minutes";Db=c+"Hours";sb=c+"Date";Eb=c+"Month";Fb=c+"FullYear"}function S(){}function Ta(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function na(){this.init.apply(this,arguments)}function Ya(){this.init.apply(this,arguments)}function Gb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.alignOptions={align:b.align||
(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var u,x=document,G=window,V=Math,v=V.round,U=V.floor,La=V.ceil,t=V.max,L=V.min,Q=V.abs,aa=V.cos,fa=V.sin,oa=V.PI,Ea=oa*2/360,wa=navigator.userAgent,Hb=G.opera,Aa=/msie/i.test(wa)&&!Hb,hb=x.documentMode===8,tb=/AppleWebKit/.test(wa),Ua=/Firefox/.test(wa),Ib=/(Mobile|Android|Windows Phone)/.test(wa),xa="http://www.w3.org/2000/svg",
ba=!!x.createElementNS&&!!x.createElementNS(xa,"svg").createSVGRect,Ob=Ua&&parseInt(wa.split("Firefox/")[1],10)<4,ga=!ba&&!Aa&&!!x.createElement("canvas").getContext,Za,$a,Jb={},ub=0,db,E,cb,va,vb,A,ha,sa=function(){return u},W=[],ab=0,Ka="div",P="none",Pb=/^[0-9]+$/,Qb="stroke-width",Da,eb,Sa,pb,qb,rb,Xa,fb,gb,Cb,Db,sb,Eb,Fb,H={},K;G.Highcharts?ha(16,!0):K=G.Highcharts={};cb=function(a,b,c){if(!s(b)||isNaN(b))return"Invalid date";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new Da(b-Sa),e,f=d[qb](),g=d[rb](),
h=d[Xa](),i=d[fb](),j=d[gb](),k=E.lang,l=k.weekdays,d=r({a:l[g].substr(0,3),A:l[g],d:Ia(h),e:h,b:k.shortMonths[i],B:k.months[i],m:Ia(i+1),y:j.toString().substr(2,2),Y:j,H:Ia(f),I:Ia(f%12||12),l:f%12||12,M:Ia(d[pb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ia(d.getSeconds()),L:Ia(v(b%1E3),3)},K.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};ha=function(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+
a;if(b)throw c;G.console&&console.log(c)};A={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:26784E5,year:31556952E3};vb={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);
a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){G.HighchartsAdapter=G.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=
h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!=="align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?u:a.now):g.apply(this,arguments)})});Na(a.cssHooks.opacity,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),
a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,c,g;if(this[0]){Ga(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==u)c.chart=c.chart||{},c.chart.renderTo=this[0],new K[a](c,b[1]),g=this;c===u&&(g=W[F(this[0],"data-highcharts-chart")])}return g}},
addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=x.removeEventListener?"removeEventListener":"detachEvent";x[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,
c,d,e){var f=a.Event(c),g="detached"+c,h;!Aa&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);r(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===u)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=
a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==u&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(G.jQuery);var T=G.HighchartsAdapter,M=T||{};T&&T.init.call(T,vb);var ib=M.adapterRun,Rb=M.getScript,Ma=M.inArray,q=M.each,wb=M.grep,Sb=M.offset,Va=M.map,N=M.addEvent,X=M.removeEvent,I=M.fireEvent,Tb=M.washMouseEvent,jb=M.animate,bb=M.stop,M={enabled:!0,x:0,y:15,style:{color:"#606060",cursor:"default",fontSize:"11px"}};E={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:","},global:{useUTC:!0,
canvasToolsURL:"http://code.highcharts.com/4.0.4/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",
align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:w(M,{align:"center",enabled:!1,formatter:function(){return this.y===null?"":Ba(this.y,-1)},verticalAlign:"bottom",y:0}),cropThreshold:300,pointRange:0,states:{hover:{lineWidthPlus:1,
marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",
width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ba,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Ib?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",
color:"#909090",fontSize:"9px"}}};var ca=E.plotOptions,T=ca.line;Bb();var Ub=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Vb=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,Wb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,ya=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Va(a.stops,function(a){return ya(a[1])}):(c=Ub.exec(a))?b=[y(c[1]),y(c[2]),y(c[3]),parseFloat(c[4],10)]:(c=Vb.exec(a))?b=[y(c[1],16),y(c[2],16),y(c[3],
16),1]:(c=Wb.exec(a))&&(b=[y(c[1]),y(c[2]),y(c[3]),1])})(a);return{get:function(c){var f;d?(f=w(a),f.stops=[].concat(f.stops),q(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)q(d,function(b){b.brighten(a)});else if(ja(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=y(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this}}};
S.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow,HcTextStroke".split(","),init:function(a,b){this.element=b==="span"?$(b):x.createElementNS(xa,b);this.renderer=a},animate:function(a,b,c){b=p(b,va,!0);bb(this);if(b){b=w(b,{});if(c)b.complete=c;jb(this,a,b)}else this.attr(a),c&&c();return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,n,m,o=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");
if(f){g=a[f];h=d.gradients;j=a.stops;n=c.radialReference;Ha(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!s(g.gradientUnits)&&(g=w(g,{cx:n[0]-n[2]/2+g.cx*n[2],cy:n[1]-n[2]/2+g.cy*n[2],r:g.r*n[2],gradientUnits:"userSpaceOnUse"}));for(m in g)m!=="id"&&o.push(m,g[m]);for(m in j)o.push(j[m]);o=o.join(",");h[o]?a=h[o].attr("id"):(g.id=a="highcharts-"+ub++,h[o]=i=d.createElement(f).attr(g).add(d.defs),i.stops=[],q(j,function(a){a[1].indexOf("rgba")===
0?(e=ya(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},attr:function(a,b){var c,d,e=this.element,f,g=this,h;typeof a==="string"&&b!==u&&(c=a,a={},a[c]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(c in a){d=a[c];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&(f||(this.symbolAttr(a),
f=!0),h=!0);if(this.rotation&&(c==="x"||c==="y"))this.doTransform=!0;h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,a==="height"?t(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,c=F(b,"class")||
"";c.indexOf(a)===-1&&F(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":P)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||0;d=v(e)%2/2;a.x=U(a.x||this.x||0)+d;a.y=U(a.y||this.y||0)+d;a.width=U((a.width||this.width||
0)-2*d);a.height=U((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&y(a.width);b&&(a=r(b,c));this.styles=a;e&&(ga||!ba&&this.renderer.forExport)&&delete a.width;if(Aa&&!ba)B(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};
for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";F(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;$a&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Da.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(wa.indexOf("Android")===-1||Da.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},translate:function(a,b){return this.attr({translateX:a,
translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",
a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Ga(c))this.alignTo=d=c||"renderer",la(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];
h[b?"translateX":"x"]=v(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=v(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(){var a=this.bBox,b=this.renderer,c,d,e=this.rotation;c=this.element;var f=this.styles,g=e*Ea;d=this.textStr;var h;if(d===""||Pb.test(d))h="num."+d.toString().length+(f?"|"+f.fontSize+"|"+f.fontFamily:"");h&&(a=b.cache[h]);if(!a){if(c.namespaceURI===xa||b.forExport){try{a=
c.getBBox?r({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight}}catch(i){}if(!a||a.width<0)a={width:0,height:0}}else a=this.htmlGetBBox();if(b.isSVG){c=a.width;d=a.height;if(Aa&&f&&f.fontSize==="11px"&&d.toPrecision(3)==="16.9")a.height=d=14;if(e)a.width=Q(d*fa(g))+Q(c*aa(g)),a.height=Q(d*aa(g))+Q(c*fa(g))}this.bBox=a;h&&(b.cache[h]=a)}return a},show:function(a){a&&this.element.namespaceURI===xa?this.element.removeAttribute("visibility"):this.attr({visibility:a?"inherit":"visible"});return this},
hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=a||b,d=c.element||b.box,e=this.element,f=this.zIndex,g,h;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);if(f)c.handleZ=!0,f=y(f);if(c.handleZ){a=d.childNodes;for(g=0;g<a.length;g++)if(b=a[g],c=F(b,"zIndex"),b!==e&&(y(c)>f||!s(f)&&s(c))){d.insertBefore(e,
b);h=!0;break}}h||d.appendChild(e);this.added=!0;if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;bb(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&
q(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&la(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;F(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*
e,"stroke-width":h,transform:"translate"+k,fill:P});if(c)F(f,"height",t(F(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=y(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},
alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=x.createElementNS(xa,"title"),this.element.appendChild(b));b.textContent=p(a,"").replace(/<[^>]*>/g,"")},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,
c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b,c){c.setAttribute(b,a);this[b]=a},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};S.prototype.yGetter=S.prototype.xGetter;S.prototype.translateXSetter=S.prototype.translateYSetter=S.prototype.rotationSetter=S.prototype.verticalAlignSetter=S.prototype.scaleXSetter=S.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};S.prototype["stroke-widthSetter"]=S.prototype.strokeSetter=function(a,
b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],S.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ta=function(){this.init.apply(this,arguments)};ta.prototype={Element:S,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));
g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&F(g,"xmlns",xa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Ua||tb)&&x.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(x.createTextNode("Created with Highcharts 4.0.4"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;
if(Ua&&a.getBoundingClientRect)this.subPixelFix=b=function(){B(a,{left:0,top:0});h=a.getBoundingClientRect();B(a,{left:La(h.left)-h.left+"px",top:La(h.top)-h.top+"px"})},b(),N(G,"resize",b)},getStyle:function(a){return this.style=r({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Pa(this.gradients||
{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&X(G,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=F(b,"x"),k=a.styles,l=a.textWidth,n=k&&k.lineHeight,m=k&&k.HcTextStroke,o=g.length,Y=function(a){return n?y(n):c.fontMetrics(/(px|em)$/.test(a&&
a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12,a).h};o--;)b.removeChild(g[o]);!f&&!m&&e.indexOf(" ")===-1?b.appendChild(x.createTextNode(e)):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,l&&!a.added&&this.box.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===""&&e.pop(),q(e,function(e,
f){var g,n=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");q(g,function(e){if(e!==""||g.length===1){var m={},o=x.createElementNS(xa,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),F(o,"style",p));i.test(e)&&!d&&(F(o,"onclick",'location.href="'+e.match(i)[1]+'"'),B(o,{cursor:"pointer"}));e=(e.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(e!==" "){o.appendChild(x.createTextNode(e));if(n)m.dx=0;else if(f&&
j!==null)m.x=j;F(o,m);b.appendChild(o);!n&&f&&(!ba&&d&&B(o,{display:"block"}),F(o,"dy",Y(o)));if(l)for(var e=e.replace(/([^\^])-/g,"$1- ").split(" "),m=g.length>1||e.length>1&&k.whiteSpace!=="nowrap",q,D,s=k.HcHeight,t=[],u=Y(o),Lb=1;m&&(e.length||t.length);)delete a.bBox,q=a.getBBox(),D=q.width,!ba&&c.forExport&&(D=c.measureSpanWidth(o.firstChild.data,a.styles)),q=D>l,!q||e.length===1?(e=t,t=[],e.length&&(Lb++,s&&Lb*u>s?(e=["..."],a.attr("title",a.textStr)):(o=x.createElementNS(xa,"tspan"),F(o,{dy:u,
x:j}),p&&F(o,"style",p),b.appendChild(o))),D>l&&(l=D)):(o.removeChild(o.firstChild),t.unshift(e.pop())),e.length&&o.appendChild(x.createTextNode(e.join(" ").replace(/- /g,"-")));n++}}})}))},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,n,m,o,p,q,a={x1:0,y1:0,x2:0,y2:1},e=w({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);m=e.style;delete e.style;f=w(e,{stroke:"#68A",
fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);o=f.style;delete f.style;g=w(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);p=g.style;delete g.style;h=w(e,{style:{color:"#CCC"}},h);q=h.style;delete h.style;N(j.element,Aa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(o)});N(j.element,Aa?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],n=[m,o,p][k],j.attr(l).css(n))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(p):a===3&&j.attr(h).css(q):
j.attr(e).css(m)};return j.on("click",function(){k!==3&&d.call(j)}).attr(e).css(r({cursor:"default"},m))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=v(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=v(a[2])+b%2/2);return a},path:function(a){var b={fill:P};Ha(a)?b.d=a:da(a)&&r(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=da(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",
a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(da(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=da(a)?a.r:e,g=this.createElement("rect"),a=da(a)?a:a===u?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==u)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){F(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;
this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:P};arguments.length>1&&r(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,
b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(v(b),v(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),r(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&r(g,f);else if(i.test(a))k=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(v((d-b[0])/2),v((e-b[1])/2)))},j=a.match(i)[1],a=Jb[j]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),$("img",{onload:function(){k(g,Jb[j]=[this.width,this.height])},
src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-
0.001,d=e.innerR,h=e.open,i=aa(f),j=fa(f),k=aa(g),g=fa(g),e=e.end-f<oa?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=L(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,i=e&&e.anchorY,e=v(e.strokeWidth||0)%2/2;a+=e;b+=e;e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&i>b+g&&i<b+d-g?e.splice(13,3,
"L",a+c,i-6,a+c+6,i,a+c,i+6,a+c,b+d-f):h&&h<0&&i>b+g&&i<b+d-g?e.splice(33,3,"L",a,i+6,a-6,i,a,i-6,a,b+f):i&&i>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):i&&i<0&&h>a+g&&h<a+c-g&&e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return e}},clipRect:function(a,b,c,d){var e="highcharts-"+ub++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;return a},text:function(a,b,c,d){var e=ga||!ba&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,
b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),n;for(n=0;n<d.length;n++)e=d[n],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){a=a||this.style.fontSize;if(b&&G.getComputedStyle)b=b.element||b,a=G.getComputedStyle(b,"").fontSize;var a=/px/.test(a)?y(a):/em/.test(a)?
parseFloat(a)*12:12,c=a<24?a+4:v(a*1.2),d=v(c*0.8);return{h:c,b:d,f:a}},label:function(a,b,c,d,e,f,g,h,i){function j(){var a,b;a=o.element.style;D=(t===void 0||xb===void 0||m.styles.textAlign)&&o.textStr&&o.getBBox();m.width=(t||D.width||0)+2*C+kb;m.height=(xb||D.height||0)+2*C;R=C+n.fontMetrics(a&&a.fontSize,o).b;if(y){if(!p)a=v(-J*C),b=h?-R:0,m.box=p=d?n.symbol(d,a,b,m.width,m.height,z):n.rect(a,b,m.width,m.height,0,z[Qb]),p.attr("fill",P).add(m);p.isImg||p.attr(r({width:v(m.width),height:v(m.height)},
z));z=null}}function k(){var a=m.styles,a=a&&a.textAlign,b=kb+C*(1-J),c;c=h?0:R;if(s(t)&&D&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(t-D.width);if(b!==o.x||c!==o.y)o.attr("x",b),c!==u&&o.attr("y",c);o.x=b;o.y=c}function l(a,b){p?p.attr(a,b):z[a]=b}var n=this,m=n.g(i),o=n.text("",0,0,g).attr({zIndex:1}),p,D,J=0,C=3,kb=0,t,xb,yb,x,Kb=0,z={},R,y;m.onAdd=function(){o.add(m);m.attr({text:a||a===0?a:"",x:b,y:c});p&&s(e)&&m.attr({anchorX:e,anchorY:f})};m.widthSetter=function(a){t=a};m.heightSetter=
function(a){xb=a};m.paddingSetter=function(a){s(a)&&a!==C&&(C=a,k())};m.paddingLeftSetter=function(a){s(a)&&a!==kb&&(kb=a,k())};m.alignSetter=function(a){J={left:0,center:0.5,right:1}[a]};m.textSetter=function(a){a!==u&&o.textSetter(a);j();k()};m["stroke-widthSetter"]=function(a,b){a&&(y=!0);Kb=a%2/2;l(b,a)};m.strokeSetter=m.fillSetter=m.rSetter=function(a,b){b==="fill"&&a&&(y=!0);l(b,a)};m.anchorXSetter=function(a,b){e=a;l(b,a+Kb-yb)};m.anchorYSetter=function(a,b){f=a;l(b,a-x)};m.xSetter=function(a){m.x=
a;J&&(a-=J*((t||D.width)+C));yb=v(a);m.attr("translateX",yb)};m.ySetter=function(a){x=m.y=v(a);m.attr("translateY",x)};var A=m.css;return r(m,{css:function(a){if(a){var b={},a=w(a);q(m.textProps,function(c){a[c]!==u&&(b[c]=a[c],delete a[c])});o.css(b)}return A.call(m,a)},getBBox:function(){return{width:D.width+2*C,height:D.height+2*C,x:D.x-C,y:D.y-C}},shadow:function(a){p&&p.shadow(a);return m},destroy:function(){X(m.element,"mouseenter");X(m.element,"mouseleave");o&&(o=o.destroy());p&&(p=p.destroy());
S.prototype.destroy.call(m);m=n=j=k=l=null}})}};Za=ta;r(S.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();this.styles=r(this.styles,a);B(this.element,a);return this},htmlGetBBox:function(){var a=this.element,b=this.bBox;if(!b){if(a.nodeName==="text")a.style.position="absolute";b=this.bBox={x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}}return b},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows;B(b,{marginLeft:c,marginTop:d});i&&q(i,function(a){B(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&q(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var j=this.rotation,k,l=y(this.textWidth),n=[j,g,b.innerHTML,this.textWidth].join(",");if(n!==this.cTT){k=a.fontMetrics(b.style.fontSize).b;s(j)&&this.setSpanRotation(j,
h,k);i=p(this.elemWidth,b.offsetWidth);if(i>l&&/[ \-]/.test(b.textContent||b.innerText))B(b,{width:l+"px",display:"block",whiteSpace:"normal"}),i=l;this.getSpanCorrection(i,k,h,j,g)}B(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(tb)k=b.offsetHeight;this.cTT=n}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Aa?"-ms-transform":tb?"-webkit-transform":Ua?"MozTransform":Hb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Ua?"Origin":"-origin")]=d.transformOrigin=
b*100+"% "+c+"px";B(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});r(ta.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:v(b),y:v(c)}).css({position:"absolute",whiteSpace:"nowrap",fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize});d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;q(j.reverse(),function(a){var d;b=a.div=a.div||$(Ka,{className:F(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;r(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,
b){d[b]=a}})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var Z;if(!ba&&!ga){Z={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ka;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=$(c);this.renderer=a},add:function(a){var b=this.renderer,
c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:S.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=aa(a*Ea),c=fa(a*Ea);B(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):P})},getSpanCorrection:function(a,
b,c,d,e){var f=d?aa(d*Ea):1,g=d?fa(d*Ea):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),B(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ja(a[b]))c[b]=v(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+
5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,la(c,b),c.push(b),b.destroyClip=function(){la(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:hb?"inherit":"rect(auto)"});return b.css(a)},css:S.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Qa(a)},destroy:function(){this.destroyClip&&this.destroyClip();return S.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=
G.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=y(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,n,m,o;k&&typeof k.value!=="string"&&(k="x");n=k;if(a){m=p(a.width,3);o=(a.opacity||0.15)/m;for(e=1;e<=3;e++){l=m*2+1-2*e;c&&(n=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',n,'" coordsize="10 10" style="',
f.style.cssText,'" />'];h=$(g.prepVML(j),null,{left:y(i.left)+p(a.offsetX,1),top:y(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',o*e,'"/>'];$(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:sa,setAttr:function(a,b){hb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||
$(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!==P,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:sa,rotationSetter:function(a,b,c){c=c.style;
this[b]=c[b]=a;c.left=-v(fa(a*Ea)+1)+"px";c.top=v(aa(a*Ea))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ja(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&q(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,hb||(c.style[b]=a?"visible":"hidden"),
b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};K.VMLElement=Z=ma(S,Z);Z.prototype.ySetter=Z.prototype.widthSetter=Z.prototype.heightSetter=Z.prototype.xSetter;var ia={Element:Z,isIE8:wa.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ka).css(r(this.getStyle(d),{position:"relative"}));e=d.element;
a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!x.namespaces.hcv){x.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{x.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){x.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},
clipRect:function(a,b,c,d){var e=this.createElement(),f=da(a);return r(e,{members:[],left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+v(a?e:d)+"px,"+v(a?f:b)+"px,"+v(a?b:f)+"px,"+v(a?d:e)+"px)"};!a&&hb&&c==="DIV"&&r(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){q(e.members,function(a){a.element&&
a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=P;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,n=a.linearGradient||a.radialGradient,m,o,p,D,J,C="",a=a.stops,t,s=[],u=function(){h=['<fill colors="'+s.join(",")+'" opacity="',p,'" o:opacity2="',o,'" type="',i,'" ',C,'focus="100%" method="any" />'];$(e.prepVML(h),null,null,b)};m=a[0];t=a[a.length-1];m[0]>0&&a.unshift([0,m[1]]);t[0]<1&&a.push([1,t[1]]);q(a,function(a,b){g.test(a[1])?(f=
ya(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);s.push(a[0]*100+"% "+k);b?(p=l,D=k):(o=l,J=k)});if(c==="fill")if(i==="gradient")c=n.x1||n[0]||0,a=n.y1||n[1]||0,m=n.x2||n[2]||0,n=n.y2||n[3]||0,C='angle="'+(90-V.atan((n-a)/(m-c))*180/oa)+'"',u();else{var j=n.r,r=j*2,v=j*2,x=n.cx,z=n.cy,R=b.radialReference,w,j=function(){R&&(w=d.getBBox(),x+=(R[0]-w.x)/w.width-0.5,z+=(R[1]-w.y)/w.height-0.5,r*=R[2]/w.width,v*=R[2]/w.height);C='src="'+E.global.VMLRadialGradientURL+'" size="'+r+","+v+'" origin="0.5,0.5" position="'+
x+","+z+'" color2="'+J+'" ';u()};d.added?j():d.onAdd=j;j=D}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=ya(a),h=["<",c,' opacity="',f.get("a"),'"/>'],$(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ta.prototype.html,path:function(a){var b={coordsize:"10 10"};Ha(a)?b.d=a:da(a)&&r(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(da(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ka).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ta.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;B(a,{flip:"x",left:y(d.width)-(e?y(e.top):1),top:y(d.height)-(e?y(e.left):1),rotation:-90});q(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=aa(f),i=fa(f),j=aa(g),k=fa(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ta.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};K.VMLRenderer=Z=function(){this.init.apply(this,
arguments)};Z.prototype=w(ta.prototype,ia);Za=Z}ta.prototype.measureSpanWidth=function(a,b){var c=x.createElement("span"),d;d=x.createTextNode(a);c.appendChild(d);B(c,b);this.box.appendChild(c);d=c.offsetWidth;Qa(c);return d};var Mb;if(ga)K.CanVGRenderer=Z=function(){xa="http://www.w3.org/1999/xhtml"},Z.prototype.symbols={},Mb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Rb(d,a);b.push(c)}}}(),Za=Z;Ta.prototype={addLabel:function(){var a=
this.axis,b=a.options,c=a.chart,d=a.horiz,e=a.categories,f=a.names,g=this.pos,h=b.labels,i=h.rotation,j=a.tickPositions,d=d&&e&&!h.step&&!h.staggerLines&&!h.rotation&&c.plotWidth/j.length||!d&&(c.margin[3]||c.chartWidth*0.33),k=g===j[0],l=g===j[j.length-1],n,f=e?p(e[g],f[g],g):g,e=this.label,m=j.info;a.isDatetimeAxis&&m&&(n=b.dateTimeLabelFormats[m.higherRanks[g]||m.unitName]);this.isFirst=k;this.isLast=l;b=a.labelFormatter.call({axis:a,chart:c,isFirst:k,isLast:l,dateTimeLabelFormat:n,value:a.isLog?
ea(ka(f)):f});g=d&&{width:t(1,v(d-2*(h.padding||10)))+"px"};if(s(e))e&&e.attr({text:b}).css(g);else{n={align:a.labelAlign};if(ja(i))n.rotation=i;if(d&&h.ellipsis)g.HcHeight=a.len/j.length;this.label=e=s(b)&&h.enabled?c.renderer.text(b,0,0,h.useHTML).attr(n).css(r(g,h.style)).add(a.labelGroup):null;a.tickBaseline=c.renderer.fontMetrics(h.style.fontSize,e).b;i&&a.side===2&&(a.tickBaseline*=aa(i*Ea))}this.yOffset=e?p(h.y,a.tickBaseline+(a.side===2?8:-(e.getBBox().height/2))):0},getLabelSize:function(){var a=
this.label,b=this.axis;return a?a.getBBox()[b.horiz?"height":"width"]:0},getLabelSides:function(){var a=this.label.getBBox(),b=this.axis,c=b.horiz,d=b.options.labels,a=c?a.width:a.height,b=c?d.x-a*{left:0,center:0.5,right:1}[b.labelAlign]:0;return[b,c?a+b:a]},handleOverflow:function(a,b){var c=!0,d=this.axis,e=this.isFirst,f=this.isLast,g=d.horiz?b.x:b.y,h=d.reversed,i=d.tickPositions,j=this.getLabelSides(),k=j[0],j=j[1],l,n,m,o=this.label.line;l=o||0;n=d.labelEdge;m=d.justifyLabels&&(e||f);n[l]===
u||g+k>n[l]?n[l]=g+j:m||(c=!1);if(m){l=(n=d.justifyToPlot)?d.pos:0;n=n?l+d.len:d.chart.chartWidth;do a+=e?1:-1,m=d.ticks[i[a]];while(i[a]&&(!m||!m.label||m.label.line!==o));d=m&&m.label.xy&&m.label.xy.x+m.getLabelSides()[e?0:1];e&&!h||f&&h?g+k<l&&(g=l-k,m&&g+j>d&&(c=!1)):g+j>n&&(g=n-j,m&&g+k<d&&(c=!1));b.x=g}return c},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||
f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,a=a+e.x-(f&&d?f*j*(k?-1:1):0),b=b+this.yOffset-(f&&!d?f*j*(k?1:-1):0);if(l)c.line=g/(h||1)%l,b+=c.line*(i.labelOffset/l);return{x:a,y:b}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,
f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,n=h?h+"Grid":"grid",m=h?h+"Tick":"tick",o=e[n+"LineWidth"],q=e[n+"LineColor"],D=e[n+"LineDashStyle"],J=e[m+"Length"],n=e[m+"Width"]||0,C=e[m+"Color"],t=e[m+"Position"],m=this.mark,s=k.step,r=!0,v=d.tickmarkOffset,w=this.getPosition(g,j,v,b),x=w.x,w=w.y,z=g&&x===d.pos+d.len||!g&&w===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(o){j=d.getPlotLinePath(j+v,o*z,b,!0);if(l===u){l={stroke:q,"stroke-width":o};if(D)l.dashstyle=
D;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=o?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(n&&J)t==="inside"&&(J=-J),d.opposite&&(J=-J),h=this.getMarkPath(x,w,J,n*z,g,f),m?m.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:C,"stroke-width":n,opacity:c}).add(d.axisGroup);if(i&&!isNaN(x))i.xy=w=this.getLabelPosition(x,w,i,g,k,v,a,s),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,
1)?r=!1:!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&(r=this.handleOverflow(a,w)),s&&a%s&&(r=!1),r&&!isNaN(w.y)?(w.opacity=c,i[this.isNew?"attr":"animate"](w),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Pa(this,this.axis)}};K.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};K.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=(b.pointRange||0)/2,e=a.options,f=e.label,g=a.label,h=e.width,i=e.to,j=e.from,k=s(j)&&s(i),l=e.value,n=e.dashStyle,
m=a.svgElem,o=[],p,q=e.color,J=e.zIndex,C=e.events,r={},u=b.chart.renderer;b.isLog&&(j=za(j),i=za(i),l=za(l));if(h){if(o=b.getPlotLinePath(l,h),r={stroke:q,"stroke-width":h},n)r.dashstyle=n}else if(k){j=t(j,b.min-d);i=L(i,b.max+d);o=b.getPlotBandPath(j,i,e);if(q)r.fill=q;if(e.borderWidth)r.stroke=e.borderColor,r["stroke-width"]=e.borderWidth}else return;if(s(J))r.zIndex=J;if(m)if(o)m.animate({d:o},null,m.onGetPath);else{if(m.hide(),m.onGetPath=function(){m.show()},g)a.label=g=g.destroy()}else if(o&&
o.length&&(a.svgElem=m=u.path(o).attr(r).add(),C))for(p in d=function(b){m.on(b,function(c){C[b].apply(a,[c])})},C)d(p);if(f&&s(f.text)&&o&&o.length&&b.width>0&&b.height>0){f=w({align:c&&k&&"center",x:c?!k&&4:10,verticalAlign:!c&&k&&"middle",y:c?k?16:10:k?6:-4,rotation:c&&!k&&90},f);if(!g){r={align:f.textAlign||f.align,rotation:f.rotation};if(s(J))r.zIndex=J;a.label=g=u.text(f.text,0,0,f.useHTML).attr(r).css(f.style).add()}b=[o[1],o[4],k?o[6]:o[1]];k=[o[2],o[5],k?o[7]:o[2]];o=Oa(b);c=Oa(k);g.align(f,
!1,{x:o,y:c,width:Ca(b)-o,height:Ca(k)-c});g.show()}else g&&g.hide();return a},destroy:function(){la(this.axis.plotLinesAndBands,this);delete this.axis;Pa(this)}};na.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:M,lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",
minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return Ba(this.total,
-1)},style:M.style}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=
this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.tickmarkOffset=this.categories&&d.tickmarkPlacement==="between"&&p(d.tickInterval,1)===1?0.5:0;this.ticks={};this.labelEdge=[];this.minorTicks=
{};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=p(d.crosshair,ra(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Ma(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===
u)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=za,this.lin2val=ka},setOptions:function(a){this.options=w(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],w(E[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,
e=E.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ja(h,this);else if(c)g=b;else if(d)g=cb(d,b);else if(f&&a>=1E3)for(;f--&&g===u;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=Ba(b/c,-1)+e[f]);g===u&&(g=Q(b)>=1E4?Ba(b,0):Ba(b,-1,u,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();q(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;
d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=L(p(a.dataMin,d[0]),Oa(d)),a.dataMax=t(p(a.dataMax,d[0]),Ca(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(s(c)&&s(e))a.dataMin=L(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,e),e);if(s(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:
this.min,j=this.minPixelPadding,e=(this.options.ordinal||this.isLog&&e)&&this.lin2val;if(!i)i=this.transA;if(c)g*=-1,h=this.len;this.reversed&&(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(ja(f)?i*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,
!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,n;i=this.transB;e=p(e,this.translate(a,null,null,c));a=c=v(e+i);i=j=v(k-e-i);if(isNaN(e))n=!0;else if(this.horiz){if(i=h,j=k-this.bottom,a<g||a>g+this.width)n=!0}else if(a=g,c=l-this.right,i<h||i>h+this.height)n=!0;return n&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=ea(U(b/a)*a),f=ea(La(c/
a)*a),g=[];if(b===c&&ja(b))return[b];for(b=e;b<=f;){g.push(b);b=ea(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e;if(this.isLog){e=b.length;for(a=1;a<e;a++)d=d.concat(this.getLogTickPositions(c,b[a-1],b[a],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),this.min,this.max,a.startOfWeek)),d[0]<this.min&&d.shift();else for(b=this.min+
(b[0]-this.min)%c;b<=this.max;b+=c)d.push(b);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===u&&!this.isLog)s(a.min)||s(a.max)?this.minRange=null:(q(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===u||h<f)f=h}),this.minRange=L(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;d=(k-c+b)/2;d=[b-d,p(a.min,b-d)];
if(e)d[2]=this.dataMin;b=Ca(d);c=[b+k,p(a.max,b+k)];if(e)c[2]=this.dataMax;c=Oa(c);c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Ca(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA;if(b.isXAxis||i||d)h?(f=h.minPointOffset,g=h.pointRangePadding):q(b.series,function(a){var h=i?1:b.isXAxis?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,m=a.closestPointRange;h>c&&(h=0);d=t(d,h);f=t(f,Ga(j)?
0:h/2);g=t(g,j==="on"?0:h);!a.noSharedTooltip&&s(m)&&(e=s(e)?L(e,m):m)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=L(d,c),b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},setTickPositions:function(a){var b=this,c=b.chart,d=b.options,e=d.startOnTick,f=d.endOnTick,g=b.isLog,h=b.isDatetimeAxis,i=b.isXAxis,j=b.isLinked,k=b.options.tickPositioner,l=d.maxPadding,
n=d.minPadding,m=d.tickInterval,o=d.minTickInterval,Y=d.tickPixelInterval,D,J=b.categories;j?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ha(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));if(g)!a&&L(b.min,p(b.dataMin,b.min))<=0&&ha(10,1),b.min=ea(za(b.min)),b.max=ea(za(b.max));if(b.range&&s(b.max))b.userMin=b.min=t(b.min,b.max-b.range),b.userMax=b.max,b.range=
null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!J&&!b.axisPointRange&&!b.usePercentage&&!j&&s(b.min)&&s(b.max)&&(c=b.max-b.min)){if(!s(d.min)&&!s(b.userMin)&&n&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*n;if(!s(d.max)&&!s(b.userMax)&&l&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*l}if(ja(d.floor))b.min=t(b.min,d.floor);if(ja(d.ceiling))b.max=L(b.max,d.ceiling);b.min===b.max||b.min===void 0||b.max===void 0?b.tickInterval=1:j&&!m&&Y===b.linkedParent.options.tickPixelInterval?b.tickInterval=
b.linkedParent.tickInterval:(b.tickInterval=p(m,J?1:(b.max-b.min)*Y/t(b.len,Y)),!s(m)&&b.len<Y&&!this.isRadial&&!this.isLog&&!J&&e&&f&&(D=!0,b.tickInterval/=4));i&&!a&&q(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=t(b.pointRange,b.tickInterval);if(!m&&b.tickInterval<o)b.tickInterval=
o;if(!h&&!g&&!m)b.tickInterval=nb(b.tickInterval,null,mb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>1&&b.tickInterval<5&&b.max>1E3&&b.max<9999)));b.minorTickInterval=d.minorTickInterval==="auto"&&b.tickInterval?b.tickInterval/5:d.minorTickInterval;b.tickPositions=a=d.tickPositions?[].concat(d.tickPositions):k&&k.apply(b,[b.min,b.max]);if(!a)!b.ordinalPositions&&(b.max-b.min)/b.tickInterval>t(2*b.len,200)&&ha(19,!0),a=h?b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval,d.units),b.min,
b.max,d.startOfWeek,b.ordinalPositions,b.closestPointRange,!0):g?b.getLogTickPositions(b.tickInterval,b.min,b.max):b.getLinearTickPositions(b.tickInterval,b.min,b.max),D&&a.splice(1,a.length-2),b.tickPositions=a;if(!j)d=a[0],g=a[a.length-1],h=b.minPointOffset||0,e?b.min=d:b.min-h>d&&a.shift(),f?b.max=g:b.max+h<g&&a.pop(),a.length===0&&s(d)&&a.push((g+d)/2),a.length===1&&(e=Q(b.max)>1E13?1:0.001,b.min-=e,b.max+=e)},setMaxTicks:function(){var a=this.chart,b=a.maxTicks||{},c=this.tickPositions,d=this._maxTicksKey=
[this.coll,this.pos,this.len].join("-");if(!this.isLinked&&!this.isDatetimeAxis&&c&&c.length>(b[d]||0)&&this.options.alignTicks!==!1)b[d]=c.length;a.maxTicks=b},adjustTickAmount:function(){var a=this._maxTicksKey,b=this.tickPositions,c=this.chart.maxTicks;if(c&&c[a]&&!this.isDatetimeAxis&&!this.categories&&!this.isLinked&&this.options.alignTicks!==!1&&this.min!==u){var d=this.tickAmount,e=b.length;this.tickAmount=a=c[a];if(e<a){for(;b.length<a;)b.push(ea(b[b.length-1]+this.tickInterval));this.transA*=
(e-1)/(a-1);this.max=b[b.length-1]}if(s(d)&&a!==d)this.isDirty=!0}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;q(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=
!1;this.getSeriesExtremes();this.setTickPositions();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}this.setMaxTicks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,c=p(c,!0),e=r(e,{min:a,max:b});I(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=
!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(s(c)&&a<=L(c,p(e.min,c))&&(a=u),s(d)&&b>=t(d,p(e.max,d))&&(b=u));this.displayBtn=a!==u||b!==u;this.setExtremes(a,b,!1,u,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseInt(f,10)/
100*a.plotHeight);c.test(g)&&(g=parseInt(g,10)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?ea(ka(this.min)):this.min,max:a?ea(ka(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ka(this.min):this.min,b=b?ka(this.max):
this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,n,m=0,o=d.title,Y=d.labels,D=0,J=b.axisOffset,b=b.clipOffset,C=[-1,1,1,-1][h],r,v=1,w=p(Y.maxStaggerLines,5),x,y,A,z,R;a.hasData=j=a.hasVisibleSeries||s(a.min)&&s(a.max)&&
!!e;a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&Y.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:Y.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){a.labelAlign=p(Y.align||a.autoLabelAlign(Y.rotation));q(e,function(b){f[b]?f[b].addLabel():f[b]=new Ta(a,b)});if(a.horiz&&!a.staggerLines&&w&&!Y.rotation){for(j=
a.reversed?[].concat(e).reverse():e;v<w;){x=[];y=!1;for(r=0;r<j.length;r++)A=j[r],z=(z=f[A].label&&f[A].label.getBBox())?z.width:0,R=r%v,z&&(A=a.translate(A),x[R]!==u&&A<x[R]&&(y=!0),x[R]=A+z);if(y)v++;else break}if(v>1)a.staggerLines=v}q(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign)D=t(f[b].getLabelSize(),D)});if(a.staggerLines)D*=a.staggerLines,a.labelOffset=D}else for(r in f)f[r].destroy(),delete f[r];if(o&&o.text&&o.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(o.text,
0,0,o.useHTML).attr({zIndex:7,rotation:o.rotation||0,align:o.textAlign||{low:"left",middle:"center",high:"right"}[o.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(o.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],n=o.offset,m=s(n)?0:p(o.margin,g?5:10);a.axisTitle[k?"show":"hide"]()}a.offset=C*p(d.offset,J[h]);c=h===2?a.tickBaseline:0;g=D+m+(D&&C*(g?p(Y.y,a.tickBaseline+8):Y.x)-c);a.axisTitleMargin=p(n,g);J[h]=t(J[h],a.axisTitleMargin+
l+C*a.offset,g);b[i]=t(b[i],U(d.lineWidth/2)*2)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=y(e.style.fontSize||
12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.horiz,c=a.reversed,d=a.chart,e=d.renderer,f=a.options,g=a.isLog,h=a.isLinked,i=a.tickPositions,j,k=a.axisTitle,l=a.ticks,n=a.minorTicks,m=a.alternateBands,o=f.stackLabels,p=f.alternateGridColor,D=a.tickmarkOffset,J=f.lineWidth,C=d.hasRendered&&s(a.oldMin)&&
!isNaN(a.oldMin),r=a.hasData,t=a.showAxis,v,w=f.labels.overflow,x=a.justifyLabels=b&&w!==!1,A;a.labelEdge.length=0;a.justifyToPlot=w==="justify";q([l,n,m],function(a){for(var b in a)a[b].isActive=!1});if(r||h)if(a.minorTickInterval&&!a.categories&&q(a.getMinorTickPositions(),function(b){n[b]||(n[b]=new Ta(a,b,"minor"));C&&n[b].isNew&&n[b].render(null,!0);n[b].render(null,!1,1)}),i.length&&(j=i.slice(),(b&&c||!b&&!c)&&j.reverse(),x&&(j=j.slice(1).concat([j[0]])),q(j,function(b,c){x&&(c=c===j.length-
1?0:c+1);if(!h||b>=a.min&&b<=a.max)l[b]||(l[b]=new Ta(a,b)),C&&l[b].isNew&&l[b].render(c,!0,0.1),l[b].render(c)}),D&&a.min===0&&(l[-1]||(l[-1]=new Ta(a,-1,null,!0)),l[-1].render(-1))),p&&q(i,function(b,c){if(c%2===0&&b<a.max)m[b]||(m[b]=new K.PlotLineOrBand(a)),v=b+D,A=i[c+1]!==u?i[c+1]+D:a.max,m[b].options={from:g?ka(v):v,to:g?ka(A):A,color:p},m[b].render(),m[b].isActive=!0}),!a._addedPlotLB)q((f.plotLines||[]).concat(f.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0;q([l,n,
m],function(a){var b,c,e=[],f=va?va.duration||500:0,g=function(){for(c=e.length;c--;)a[e[c]]&&!a[e[c]].isActive&&(a[e[c]].destroy(),delete a[e[c]])};for(b in a)if(!a[b].isActive)a[b].render(b,!1,0),a[b].isActive=!1,e.push(b);a===m||!d.hasRendered||!f?g():f&&setTimeout(g,f)});if(J)b=a.getLinePath(J),a.axisLine?a.axisLine.animate({d:b}):a.axisLine=e.path(b).attr({stroke:f.lineColor,"stroke-width":J,zIndex:7}).add(a.axisGroup),a.axisLine[t?"show":"hide"]();if(k&&t)k[k.isNew?"attr":"animate"](a.getTitlePosition()),
k.isNew=!1;o&&o.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.render();q(this.plotLinesAndBands,function(a){a.render()});q(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||X(b);for(d in c)Pa(c[d]),c[d]=null;q([b.ticks,b.minorTicks,b.alternateBands],function(a){Pa(a)});for(a=e.length;a--;)e[a].destroy();q("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});
this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){if(this.crosshair)if((s(b)||!p(this.crosshair.snap,!0))===!1)this.hideCrosshair();else{var c,d=this.crosshair,e=d.animation;p(d.snap,!0)?s(b)&&(c=this.chart.inverted!=this.horiz?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos;c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y)):this.getPlotLinePath(null,null,null,null,c);if(c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?
"animate":"attr"]({d:c},e);else{e={"stroke-width":d.width||1,stroke:d.color||"#C0C0C0",zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}}},hideCrosshair:function(){this.cross&&this.cross.hide()}};r(na.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b),d=this.getPlotLinePath(a);d&&c?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(a,b){var c=(new K.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();q([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&la(b,b[e])})}});na.prototype.getTimeTicks=function(a,b,
c,d){var e=[],f={},g=E.global.useUTC,h,i=new Da(b-Sa),j=a.unitRange,k=a.count;if(s(b)){j>=A.second&&(i.setMilliseconds(0),i.setSeconds(j>=A.minute?0:k*U(i.getSeconds()/k)));if(j>=A.minute)i[Cb](j>=A.hour?0:k*U(i[pb]()/k));if(j>=A.hour)i[Db](j>=A.day?0:k*U(i[qb]()/k));if(j>=A.day)i[sb](j>=A.month?1:k*U(i[Xa]()/k));j>=A.month&&(i[Eb](j>=A.year?0:k*U(i[fb]()/k)),h=i[gb]());j>=A.year&&(h-=h%k,i[Fb](h));if(j===A.week)i[sb](i[Xa]()-i[rb]()+p(d,1));b=1;Sa&&(i=new Da(i.getTime()+Sa));h=i[gb]();for(var d=
i.getTime(),l=i[fb](),n=i[Xa](),m=(A.day+(g?Sa:i.getTimezoneOffset()*6E4))%A.day;d<c;)e.push(d),j===A.year?d=eb(h+b*k,0):j===A.month?d=eb(h,l+b*k):!g&&(j===A.day||j===A.week)?d=eb(h,l,n+b*k*(j===A.day?1:7)):d+=j*k,b++;e.push(d);q(wb(e,function(a){return j<=A.hour&&a%A.day===m}),function(a){f[a]="day"})}e.info=r(a,{higherRanks:f,totalRange:j*k});return e};na.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",
[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=A[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=A[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+A[c[g+1][0]])/2)break;e===A.year&&a<5*e&&(f=[1,2,5]);c=nb(a/e,f,d[0]==="year"?t(mb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};na.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=v(a),g=this.getLinearTickPositions(a,
b,c);else if(a>=0.08)for(var f=U(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=za(ka(f)*e[h]),j>b&&(!d||k<=c)&&k!==u&&g.push(k),k>c&&(l=!0),k=j}else if(b=ka(b),c=ka(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=nb(a,null,mb(a)),g=Va(this.getLinearTickPositions(a,b,c),za),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=
a;return g};var Nb=K.Tooltip=function(){this.init.apply(this,arguments)};Nb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=y(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});ga||this.label.shadow(b.shadow);this.shared=b.shared},
destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(Q(a-f.x)>1||Q(b-f.y)>1),h=e.followPointer||e.len>1;r(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?u:g?(2*f.anchorX+c)/3:c,anchorY:h?u:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=
this,c;clearTimeout(this.hideTimer);if(!this.isHidden)c=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){b.label.fadeOut();b.isHidden=!0},p(a,this.options.hideDelay,500)),c&&q(c,function(a){a.setState()}),this.chart.hoverPoints=null},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=0,h=0,i,a=ra(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===u&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(q(a,function(a){i=a.series.yAxis;g+=a.plotX;h+=
(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&i?i.top-f:0)}),g/=a.length,h/=a.length,c=[e?d.plotWidth-h:g,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-g:h]);return Va(c,v)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g,h=["y",d.chartHeight,b,c.plotY+d.plotTop],i=["x",d.chartWidth,a,c.plotX+d.plotLeft],j=c.ttBelow||d.inverted&&!c.negative||!d.inverted&&c.negative,k=function(a,b,c,d){var g=c<d-e,b=d+e+c<b,c=d-e-c;d+=e;if(j&&b)f[a]=d;else if(!j&&g)f[a]=c;else if(g)f[a]=
c;else if(b)f[a]=d;else return!1},l=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},n=function(a){var b=h;h=i;i=b;g=a},m=function(){k.apply(0,h)!==!1?l.apply(0,i)===!1&&!g&&(n(!0),m()):g?f.x=f.y=0:(n(!0),m())};(d.inverted||this.len>1)&&n();m();return f},defaultFormatter:function(a){var b=this.points||ra(this),c=b[0].series,d;d=[a.tooltipHeaderFormatter(b[0])];q(b,function(a){c=a.series;d.push(c.tooltipFormatter&&c.tooltipFormatter(a)||a.point.tooltipFormatter(c.tooltipOptions.pointFormat))});
d.push(a.options.footerFormat||"");return d.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},i,j=[];i=e.formatter||this.defaultFormatter;var h=c.hoverPoints,k,l=this.shared;clearTimeout(this.hideTimer);this.followPointer=ra(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,h&&q(h,function(a){a.setState()}),q(a,function(a){a.setState("hover");j.push(a.getLabelConfig())}),h={x:a[0].category,
y:a[0].y},h.points=j,this.len=j.length,a=a[0]):h=a.getLabelConfig();i=i.call(h,this);h=a.series;this.distance=p(h.tooltipOptions.distance,16);i===!1?this.hide():(this.isHidden&&(bb(d),d.attr("opacity",1).show()),d.attr({text:i}),k=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:k}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow}),this.isHidden=!1);I(c,"tooltipRefresh",{text:i,x:f+c.plotLeft,y:g+c.plotTop,borderColor:k})},updatePosition:function(a){var b=this.chart,
c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(v(c.x),v(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},tooltipHeaderFormatter:function(a){var b=a.series,c=b.tooltipOptions,d=c.dateTimeLabelFormats,e=c.xDateFormat,f=b.xAxis,g=f&&f.options.type==="datetime"&&ja(a.key),c=c.headerFormat,f=f&&f.closestPointRange,h;if(g&&!e){if(f)for(h in A){if(A[h]>=f||A[h]<=A.day&&a.key%A[h]>0){e=d[h];break}}else e=d.day;e=e||d.year}g&&e&&(c=c.replace("{point.key}","{point.key:"+
e+"}"));return Ja(c,{point:a,series:b})}};var pa;$a=x.documentElement.ontouchstart!==u;var Wa=K.Pointer=function(a,b){this.init(a,b)};Wa.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ga?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(K.Tooltip&&b.tooltip.enabled)a.tooltip=new Nb(a,b.tooltip),
this.followTouchMove=b.tooltip.followTouchMove;this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Tb(a);if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Sb(this.chart.container);d.pageX===u?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return r(a,{chartX:v(c),chartY:v(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":
"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getIndex:function(a){var b=this.chart;return b.inverted?b.plotHeight+b.plotTop-a.chartY:a.chartX-b.plotLeft},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e,f,g=b.hoverPoint,h=b.hoverSeries,i,j,k=b.chartWidth,l=this.getIndex(a);if(d&&this.options.tooltip.shared&&(!h||!h.noSharedTooltip)){f=[];i=c.length;for(j=0;j<i;j++)if(c[j].visible&&c[j].options.enableMouseTracking!==!1&&!c[j].noSharedTooltip&&
c[j].singularTooltips!==!0&&c[j].tooltipPoints.length&&(e=c[j].tooltipPoints[l])&&e.series)e._dist=Q(l-e.clientX),k=L(k,e._dist),f.push(e);for(i=f.length;i--;)f[i]._dist>k&&f.splice(i,1);if(f.length&&f[0].clientX!==this.hoverX)d.refresh(f,a),this.hoverX=f[0].clientX}c=h&&h.tooltipOptions.followPointer;if(h&&h.tracker&&!c){if((e=h.tooltipPoints[l])&&e!==g)e.onMouseOver(a)}else d&&c&&!d.isHidden&&(h=d.getAnchor([{}],a),d.updatePosition({plotX:h[0],plotY:h[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=
function(a){if(W[pa])W[pa].pointer.onDocumentMouseMove(a)},N(x,"mousemove",this._onDocumentMouseMove);q(b.axes,function(b){b.drawCrosshair(a,p(e,g))})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.tooltip,g=f&&f.shared?c.hoverPoints:e;(a=a&&f&&g)&&ra(g)[0].plotX===u&&(a=!1);if(a)f.refresh(g),e&&e.setState(e.state,!0);else{if(e)e.onMouseOut();if(d)d.onMouseOut();f&&f.hide(b);if(this._onDocumentMouseMove)X(x,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=
null;q(c.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;q(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},
drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,n=this.mouseDownX,m=this.mouseDownY,o=c.panKey&&a[c.panKey+"Key"];d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(m-e,2));if(this.hasDragged>10){l=b.isInsidePlot(n-h,m-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!o&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(h,i,
f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=n,this.selectionMarker.attr({width:Q(d),x:(d>0?0:d)+n}));this.selectionMarker&&g&&(d=e-m,this.selectionMarker.attr({height:Q(d),y:(d>0?0:d)+m}));l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this.chart,c=this.hasPinched;if(this.selectionMarker){var d={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},e=this.selectionMarker,f=e.attr?e.attr("x"):
e.x,g=e.attr?e.attr("y"):e.y,h=e.attr?e.attr("width"):e.width,i=e.attr?e.attr("height"):e.height,j;if(this.hasDragged||c)q(b.axes,function(b){if(b.zoomEnabled){var c=b.horiz,e=a.type==="touchend"?b.minPixelPadding:0,m=b.toValue((c?f:g)+e),c=b.toValue((c?f+h:g+i)-e);!isNaN(m)&&!isNaN(c)&&(d[b.coll].push({axis:b,min:L(m,c),max:t(m,c)}),j=!0)}}),j&&I(b,"selection",d,function(a){b.zoom(r(a,c?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();c&&this.scaleGroups()}if(b)B(b.container,
{cursor:b._cursor}),b.cancelClick=this.hasDragged>10,b.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){W[pa]&&W[pa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,d=b.hoverSeries,a=this.normalize(a,c);c&&d&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&
this.reset()},onContainerMouseLeave:function(){var a=W[pa];if(a)a.pointer.reset(),a.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;pa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=F(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==
-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.cancelBubble=!0;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(I(c.series,"click",r(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",
a)):(r(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&I(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);ab===1&&N(x,"mouseup",a.onDocumentMouseUp);if($a)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},ab===1&&
N(x,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;X(this.chart.container,"mouseleave",this.onContainerMouseLeave);ab||(X(x,"mouseup",this.onDocumentMouseUp),X(x,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};r(K.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,
b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,n=a?"width":"height",m=i["plot"+(a?"Left":"Top")],o,p,q=h||1,r=i.inverted,C=i.bounds[a?"h":"v"],t=b.length===1,s=b[0][l],v=c[0][l],u=!t&&b[1][l],w=!t&&c[1][l],x,c=function(){!t&&Q(s-u)>20&&(q=h||Q(v-w)/Q(s-u));p=(m-v)/q+s;o=i["plot"+(a?"Width":"Height")]/q};c();b=p;b<C.min?(b=C.min,x=!0):b+o>C.max&&(b=C.max-o,x=!0);x?(v-=0.8*(v-g[j][0]),t||(w-=0.8*(w-g[j][1])),c()):g[j]=[v,w];r||(f[j]=p-m,f[n]=o);f=r?1/q:q;e[n]=o;e[j]=b;d[r?a?"scaleY":
"scaleX":"scale"+k]=q;d["translate"+k]=f*m+(v-f*s)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=b.followTouchMove,f=a.touches,g=f.length,h=b.lastValidTouch,i=b.hasZoom,j=b.selectionMarker,k={},l=g===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),n={};(i||e)&&!l&&a.preventDefault();Va(f,function(a){return b.normalize(a)});if(a.type==="touchstart")q(f,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),h.x=[d[0].chartX,d[1]&&d[1].chartX],h.y=[d[0].chartY,
d[1]&&d[1].chartY],q(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=L(e,f),e=t(e,f);b.min=L(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!j)b.selectionMarker=j=r({destroy:sa},c.plotBox);b.pinchTranslate(d,f,k,j,n,h);b.hasPinched=i;b.scaleGroups(k,n);if(!i&&e&&g===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},onContainerTouchStart:function(a){var b=
this.chart;pa=b.index;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)?(this.runPointActions(a),this.pinch(a)):this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){W[pa]&&W[pa].pointer.drop(a)}});if(G.PointerEvent||G.MSPointerEvent){var ua={},zb=!!G.PointerEvent,Xb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in ua)ua.hasOwnProperty(a)&&
b.push({pageX:ua[a].pageX,pageY:ua[a].pageY,target:ua[a].target});return b},Ab=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&W[pa])d(a),d=W[pa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:sa,touches:Xb()})};r(Wa.prototype,{onContainerPointerDown:function(a){Ab(a,"onContainerTouchStart","touchstart",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Ab(a,
"onContainerTouchMove","touchmove",function(a){ua[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!ua[a.pointerId].target)ua[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Ab(a,"onContainerTouchEnd","touchend",function(a){delete ua[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,zb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,zb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(x,zb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
Na(Wa.prototype,"init",function(a,b,c){a.call(this,b,c);(this.hasZoom||this.followTouchMove)&&B(b.container,{"-ms-touch-action":P,"touch-action":P})});Na(Wa.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});Na(Wa.prototype,"destroy",function(a){this.batchMSEvents(X);a.call(this)})}var lb=K.Legend=function(a,b){this.init(a,b)};lb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=p(b.padding,8),f=b.itemMarginTop||0;this.options=b;
if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=w(d,b.itemHiddenStyle),c.itemMarginTop=f,c.padding=e,c.initialItemX=e,c.initialItemY=e-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.lastLineHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&
a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==u&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;q(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&
(a[b]=a[b].destroy())});b&&Qa(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,q(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,B(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":P}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=
this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,l=!d.rtl,n=d.width,m=d.itemMarginBottom||0,
o=this.itemMarginTop,q=this.initialItemX,r=a.legendItem,s=a.series&&a.series.drawLegendSymbol?a.series:a,C=s.options,C=this.createCheckboxForItem&&C&&C.showCheckbox,u=d.useHTML;if(!r){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=r=c.text(d.labelFormat?Ja(d.labelFormat,a):d.labelFormatter.call(a),l?f+g:-g,this.baseline||0,u).css(w(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.baseline=c.fontMetrics(h.fontSize,
r).f+3+o,r.attr("y",this.baseline);s.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,r,u,h,i);this.colorizeItem(a,a.visible);C&&this.createCheckboxForItem(a)}c=r.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(C?20:0);this.itemHeight=g=v(a.legendItemHeight||c.height);if(e&&this.itemX-q+f>(n||b.chartWidth-2*j-q-d.x))this.itemX=q,this.itemY+=o+this.lastLineHeight+m,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=o+this.itemY+
m;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=o+g+m,this.lastLineHeight=g);this.offsetWidth=n||t((e?this.itemX-q-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];q(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,!s(c.linkedTo)?u:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,
l=j.borderWidth,n=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();ob(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;q(e,function(b){a.renderItem(b)});g=j.width||a.offsetWidth;
h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);if(l||n){g+=k;h+=k;if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:n||P}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;q(e,function(b){a.positionItem(b)});f&&d.align(r({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=
this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),l=j.arrowSize||12,n=this.nav,m=this.pages,o,r=this.allItems;e.layout==="horizontal"&&(f/=2);g&&(f=L(f,g));m.length=0;if(a>f&&!e.useHTML){this.clipHeight=h=t(f-20-this.titleHeight-this.padding,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;q(r,function(a,b){var c=a._legendItemPos[1],d=v(a.legendItem.getBBox().height),
e=m.length;if(!e||c-m[e-1]>h&&(o||c)!==m[e-1])m.push(o||c),e++;b===r.length-1&&c+d-m[e-1]>h&&m.push(c);c!==o&&(o=c)});if(!i)i=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(i);i.attr({height:h});if(!n)this.nav=n=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(n),this.pager=d.text("",15,10).css(j.style).add(n),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(n);b.scroll(0);
a=f}else if(n)i.attr({height:c.chartHeight}),n.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==u&&Ra(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),
i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};M=K.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||12;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-5-c/2,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=
this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-v(e.fontMetrics(a.options.itemStyle.fontSize,this.legendItem).b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(wa)||Ua)&&Na(lb.prototype,"positionItem",function(a,
b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});Ya.prototype={init:function(a,b){var c,d=a.series;a.series=null;c=w(E,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=W.length;W.push(f);ab++;d.reflow!==!1&&N(f,"load",
function(){f.initReflow()});if(e)for(g in e)N(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=ga?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=H[a.type||b.type||b.defaultSeriesType])||ha(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},adjustTickAmounts:function(){this.options.chart.alignTicks!==!1&&q(this.axes,function(a){a.adjustTickAmount()});
this.maxTicks=null},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,l=k,n=this.renderer,m=n.isHidden(),o=[];Ra(a,this);m&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;q(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),
this.isDirtyLegend=!1;g&&this.getStacks();if(i){if(!this.isResizing)this.maxTicks=null,q(b,function(a){a.setScale()});this.adjustTickAmounts()}this.getMargins();i&&(q(b,function(a){a.isDirty&&(j=!0)}),q(b,function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,o.push(function(){I(a,"afterSetExtremes",r(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();q(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);n.draw();I(this,
"redraw");m&&this.cloneRenderTo(!0);q(o,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ra(b.xAxis||{}),b=b.yAxis=ra(b.yAxis||{});q(c,function(a,b){a.index=b;a.isX=!0});q(b,function(a,b){a.index=b});
c=c.concat(b);q(c,function(b){new na(a,b)});a.adjustTickAmounts()},getSelectedPoints:function(){var a=[];q(this.series,function(b){a=a.concat(wb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return wb(this.series,function(a){return a.selected})},getStacks:function(){var a=this;q(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});q(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=
b.type+p(b.options.stack,"")})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=w(e.title,a);g=e.subtitle=w(e.subtitle,b),e=g;q([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,
e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(r({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(r({y:b+(f.margin-13)+g.fontMetrics(f.style.fontSize,d).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=La(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&
p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=ib(c,"width");if(!s(a))this.containerHeight=ib(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Qa(b),delete this.renderToClone):(c&&
c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),B(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),x.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+ub++;if(Ga(a))this.renderTo=a=x.getElementById(a);a||ha(13,!0);c=y(F(a,"data-highcharts-chart"));!isNaN(c)&&W[c]&&W[c].hasRendered&&
W[c].destroy();F(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=$(Ka,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},r({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=
b.forExport?new ta(a,c,d,b.style,!0):new Za(a,c,d,b.style);ga&&this.renderer.create(this,a,c,d)},getMargins:function(){var a=this.spacing,b,c=this.legend,d=this.margin,e=this.options.legend,f=p(e.margin,20),g=e.x,h=e.y,i=e.align,j=e.verticalAlign,k=this.titleOffset;this.resetMargins();b=this.axisOffset;if(k&&!s(d[0]))this.plotTop=t(this.plotTop,k+this.options.title.margin+a[0]);if(c.display&&!e.floating)if(i==="right"){if(!s(d[1]))this.marginRight=t(this.marginRight,c.legendWidth-g+f+a[1])}else if(i===
"left"){if(!s(d[3]))this.plotLeft=t(this.plotLeft,c.legendWidth+g+f+a[3])}else if(j==="top"){if(!s(d[0]))this.plotTop=t(this.plotTop,c.legendHeight+h+f+a[0])}else if(j==="bottom"&&!s(d[2]))this.marginBottom=t(this.marginBottom,c.legendHeight-h+f+a[2]);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);this.hasCartesianSeries&&q(this.axes,function(a){a.getOffset()});s(d[3])||(this.plotLeft+=b[3]);s(d[0])||(this.plotTop+=b[0]);
s(d[2])||(this.marginBottom+=b[2]);s(d[1])||(this.marginRight+=b[1]);this.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||ib(d,"width"),f=c.height||ib(d,"height"),c=a?a.target:G,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&e&&f&&(c===G||c===x)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=
this,b=function(b){a.reflow(b)};N(G,"resize",b);N(a,"destroy",function(){X(G,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&I(d,"endResize",null,function(){d.isResizing-=1})};Ra(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(s(a))d.chartWidth=e=t(0,v(a)),d.hasUserSize=!!e;if(s(b))d.chartHeight=f=t(0,v(b));(va?jb:B)(d.container,{width:e+"px",height:f+"px"},va);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;q(d.axes,function(a){a.isDirty=
!0;a.setScale()});q(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;I(d,"resize");va===!1?g():setTimeout(g,va&&va.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=v(this.plotLeft);this.plotTop=j=v(this.plotTop);this.plotWidth=k=t(0,v(d-i-this.marginRight));this.plotHeight=
l=t(0,v(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*U(this.plotBorderWidth/2);b=La(t(d,h[3])/2);c=La(t(d,h[0])/2);this.clipBox={x:b,y:c,width:U(this.plotSizeX-t(d,h[1])/2-b),height:t(0,U(this.plotSizeY-t(d,h[2])/2-c))};a||q(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=
this.spacing,b=this.margin;this.plotTop=p(b[0],a[0]);this.marginRight=p(b[1],a[1]);this.marginBottom=p(b[2],a[2]);this.plotLeft=p(b[3],a[3]);this.axisOffset=[0,0,0,0];this.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,n=a.plotBorderWidth||0,m,o=this.plotLeft,
p=this.plotTop,q=this.plotWidth,r=this.plotHeight,t=this.plotBox,s=this.clipRect,v=this.clipBox;m=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-m,height:d-m}));else{e={fill:j||P};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(m/2,m/2,c-m,d-m,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(t):this.plotBackground=b.rect(o,p,q,r,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(t):this.plotBGImage=
b.image(l,o,p,q,r).add();s?s.animate({width:v.width,height:v.height}):this.clipRect=b.clipRect(v);if(n)g?g.animate(g.crisp({x:o,y:p,width:q,height:r,strokeWidth:-n})):this.plotBorder=b.rect(o,p,q,r,0,-n).attr({stroke:a.plotBorderColor,"stroke-width":n,fill:P,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;q(["inverted","angular","polar"],function(g){c=H[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&
e--;)(c=H[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;q(b,function(a){a.linkedSeries.length=0});q(b,function(b){var d=b.options.linkedTo;if(Ga(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){q(this.series,function(a){a.translate();a.setTooltipPoints&&a.setTooltipPoints();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&q(b.items,function(c){var d=r(b.style,
c.style),e=y(d.left)+a.plotLeft,f=y(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options;this.setTitle();this.legend=new lb(this,c.legend);this.getStacks();q(a,function(a){a.setScale()});this.getMargins();this.maxTicks=null;q(a,function(a){a.setTickPositions(!0);a.setMaxTicks()});this.adjustTickAmounts();this.getMargins();this.drawChartBox();this.hasCartesianSeries&&q(a,function(a){a.render()});
if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;I(a,"destroy");W[a.index]=
u;ab--;a.renderTo.removeAttribute("data-highcharts-chart");X(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",X(d),f&&Qa(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ba&&G==G.top&&
x.readyState!=="complete"||ga&&!G.canvg?(ga?Mb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):x.attachEvent("onreadystatechange",function(){x.detachEvent("onreadystatechange",a.firstRender);x.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();I(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();q(b.series||[],function(b){a.initSeries(b)});a.linkSeries();I(a,
"beforeRender");if(K.Pointer)a.pointer=new Wa(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);q(a.callbacks,function(b){b.apply(a,[a])});a.cloneRenderTo(!0);I(a,"load")}},splashArray:function(a,b){var c=b[a],c=da(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};Ya.prototype.callbacks=[];Z=K.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d,e=b.plotWidth-2*c,f=b.plotHeight-2*c,b=a.center,
a=[p(b[0],"50%"),p(b[1],"50%"),a.size||"100%",a.innerSize||0],g=L(e,f),h;return Va(a,function(a,b){h=/%$/.test(a);d=b<2||b===2&&h;return(h?[e,f,g,g][b]*y(a)/100:a)+(d?c:0)})}};var Fa=function(){};Fa.prototype={init:function(a,b,c){this.series=a;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,
b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Fa.prototype.optionsToObject.call(this,a);r(this,a);this.options=this.options?r(this.options,a):a;if(d)this.y=this[d];if(this.x===u&&c)this.x=b===u?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.pointArrayMap||["y"],e=d.length,f=0,g=0;if(typeof a==="number"||a===null)b[d[0]]=a;else if(Ha(a)){if(a.length>e){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];f++}for(;g<e;)b[d[g++]]=
a[f++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),la(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)X(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),
b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";q(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ja(a,
{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});I(this,a,b,c)}};var O=function(){};O.prototype={isCartesian:!0,type:"line",pointClass:Fa,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis",
"yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();r(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ga)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();
q(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;ob(f,g);this.yAxis&&ob(this.yAxis.series,g);q(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;q(a.axisTypes||[],function(e){q(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==u&&b[e]===d.id||b[e]===u&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ha(18,!0)})},
updateParallelArrays:function(a,b){var c=a.series,d=arguments;q(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,b=p(b,a.pointStart,0);this.pointInterval=p(this.pointInterval,a.pointInterval,1);this.xIncrement=b+this.pointInterval;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,
e=d.length;if(e)if(this.options.connectNulls){for(c=e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else q(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=w(e,c.series,a);this.tooltipOptions=w(E.tooltip,E.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&
d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint||this.getCyclic("color",this.options.color||ca[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=
0},drawLegendSymbol:M.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,n=l&&!!l.categories,m=e.tooltipPoints,o=i.turboThreshold,r=this.xData,t=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData)q(a,function(a,b){f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.pointRange=n?1:i.pointRange;e.colorCounter=0;q(this.parallelArrays,function(a){e[a+"Data"].length=
0});if(o&&h>o){for(c=0;k===null&&c<h;)k=a[c],c++;if(ja(k)){n=p(i.pointStart,0);i=p(i.pointInterval,1);for(c=0;c<h;c++)r[c]=n,t[c]=a[c],n+=i;e.xIncrement=n}else if(Ha(k))if(s)for(c=0;c<h;c++)i=a[c],r[c]=i[0],t[c]=i.slice(1,s+1);else for(c=0;c<h;c++)i=a[c],r[c]=i[0],t[c]=i[1];else ha(12)}else for(c=0;c<h;c++)if(a[c]!==u&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),n&&i.name))l.names[i.x]=i.name;Ga(t[0])&&ha(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&
f[c].destroy&&f[c].destroy();if(m)m.length=0;if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=0,l=this.isCartesian,n,m;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)n=h.getExtremes(),m=n.min,n=n.max;if(l&&this.sorted&&(!i||d>i||this.forceCrop))if(b[d-1]<m||b[0]>n)b=[],c=[];else if(b[0]<m||b[d-1]>n)e=
this.cropData(this.xData,this.yData,m,n),b=e.xData,c=e.yData,e=e.start,f=!0,k=b.length;for(i=b.length-1;i>=0;i--)d=b[i]-b[i-1],!f&&b[i]>m&&b[i]<n&&k++,d>0&&(g===u||d<g)?g=d:d<0&&this.requireSorting&&ha(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.activePointCount=k;if(j.pointRange===null)this.pointRange=g||1;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(;i<
e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],n;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(n=0;n<g;n++)i=h+n,j?l[n]=(new f).init(this,[d[n]].concat(ra(e[n]))):(b[i]?k=b[i]:a[i]!==u&&(b[i]=k=(new f).init(this,a[i],d[n])),l[n]=k),l[n].index=i;if(b&&(g!==(c=b.length)||
j))for(n=0;n<c;n++)if(n===h&&!j&&(n+=g),b[n])b[n].destroyElements(),b[n].plotX=u;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==u&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=
k;this.dataMin=p(void 0,Oa(e));this.dataMax=p(void 0,Ca(e))},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ja(i),k=a.threshold,a=0;a<g;a++){var l=f[a],n=l.x,m=l.y,o=l.low,q=b&&e.stacks[(this.negStacks&&m<k?"-":"")+this.stackKey];if(e.isLog&&m<=0)l.y=m=null,ha(10);l.plotX=c.translate(n,0,0,0,1,i,this.type===
"flags");if(b&&this.visible&&q&&q[n])q=q[n],m=q.points[this.index+","+a],o=m[0],m=m[1],o===0&&(o=p(k,e.min)),e.isLog&&o<=0&&(o=null),l.total=l.stackTotal=q.total,l.percentage=q.total&&l.y/q.total*100,l.stackY=m,q.setOffset(this.pointXOffset||0,this.barW||0);l.yBottom=s(o)?e.translate(o,0,1,0,1):null;h&&(m=this.modifyValue(m,l));l.plotY=typeof m==="number"&&m!==Infinity?e.translate(m,0,1,0,1):u;l.clientX=j?c.translate(n,0,0,0,1):l.plotX;l.negative=l.y<(k||0);l.category=d&&d[l.x]!==u?d[l.x]:l.x}this.getSegments()},
animate:function(a){var b=this.chart,c=b.renderer,d;d=this.options.animation;var e=this.clipBox||b.clipBox,f=b.inverted,g;if(d&&!da(d))d=ca[this.type].animation;g=["_sharedClip",d.duration,d.easing,e.height].join(",");a?(a=b[g],d=b[g+"m"],a||(b[g]=a=c.clipRect(r(e,{width:0})),b[g+"m"]=d=c.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),this.group.clip(a),this.markerGroup.clip(d),this.sharedClipKey=g):((a=b[g])&&a.animate({width:b.plotSizeX},d),b[g+"m"]&&b[g+"m"].animate({width:b.plotSizeX+
99},d),this.animate=null)},afterAnimate:function(){var a=this.chart,b=this.sharedClipKey,c=this.group,d=this.clipBox;if(c&&this.options.clip!==!1){if(!b||!d)c.clip(d?a.renderer.clipRect(d):a.clipRect);this.markerGroup.clip()}I(this,"afterAnimate");setTimeout(function(){b&&a[b]&&(d||(a[b]=a[b].destroy()),a[b+"m"]&&(a[b+"m"]=a[b+"m"].destroy()))},100)},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,n=this.pointAttr[""],m,o,q,t=this.markerGroup,s=p(l.enabled,
!this.requireSorting||this.activePointCount<0.5*this.xAxis.len/l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=U(g.plotX),e=g.plotY,k=g.graphic,m=g.marker||{},o=!!g.marker,a=s&&m.enabled===u||m.enabled,q=c.isInsidePlot(v(d),e,c.inverted),a&&e!==u&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||n,h=a.r,i=p(m.symbol,this.symbol),j=i.indexOf("url")===0,k)k[q?"show":"hide"](!0).animate(r({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(q&&
(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,o?m:l).attr(a).add(t)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ca[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color;f={stroke:g,fill:g};var h=a.points||[],i,j=[],k,l=a.pointAttrToOptions;k=a.hasPointSpecificOptions;var n=b.negativeColor,m=
c.lineColor,o=c.fillColor;i=b.turboThreshold;var p;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):e.color=e.color||ya(e.color||g).brighten(e.brightness).get();j[""]=a.convertAttribs(c,f);q(["hover","select"],function(b){j[b]=a.convertAttribs(d[b],j[""])});a.pointAttr=j;g=h.length;if(!i||g<i||k)for(;g--;){i=h[g];if((c=i.options&&i.options.marker||i.options)&&c.enabled===!1)c.radius=0;if(i.negative&&n)i.color=i.fillColor=n;k=b.colorByPoint||
i.color;if(i.options)for(p in l)s(c[l[p]])&&(k=!0);if(k){c=c||{};k=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker)f.color=f.color||!i.options.color&&e.color||ya(i.color).brighten(f.brightness||e.brightness).get();f={color:i.color};if(!o)f.fillColor=i.color;if(!m)f.lineColor=i.color;k[""]=a.convertAttribs(r(f,c),j[""]);k.hover=a.convertAttribs(d.hover,j.hover,k[""]);k.select=a.convertAttribs(d.select,j.select,k[""])}else k=j;i.pointAttr=k}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(wa),
d,e,f=a.data||[],g,h,i;I(a,"destroy");X(a);q(a.axisTypes||[],function(b){if(i=a[b])la(i.series,a),i.isDirty=i.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(e=f.length;e--;)(g=f[e])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);q("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","),function(b){a[b]&&(d=c&&b==="group"?"hide":"destroy",a[b][d]())});if(b.hoverSeries===a)b.hoverSeries=null;la(b.series,a);for(h in a)delete a[h]},
getSegmentPath:function(a){var b=this,c=[],d=b.options.step;q(a,function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];q(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=
b},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color]],d=b.lineWidth,e=b.dashStyle,f=b.linecap!=="square",g=this.getGraphPath(),h=b.negativeColor;h&&c.push(["graphNeg",h]);q(c,function(c,h){var k=c[0],l=a[k];if(l)bb(l),l.animate({d:g});else if(d&&g.length)l={stroke:c[1],"stroke-width":d,fill:P,zIndex:1},e?l.dashstyle=e:f&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),a[k]=a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h&&b.shadow)})},clipNeg:function(){var a=
this.options,b=this.chart,c=b.renderer,d=a.negativeColor||a.negativeFillColor,e,f=this.graph,g=this.area,h=this.posClip,i=this.negClip;e=b.chartWidth;var j=b.chartHeight,k=t(e,j),l=this.yAxis;if(d&&(f||g)){d=v(l.toPixels(a.threshold||0,!0));d<0&&(k-=d);a={x:0,y:0,width:k,height:d};k={x:0,y:d,width:k,height:k};if(b.inverted)a.height=k.y=b.plotWidth-d,c.isVML&&(a={x:b.plotWidth-d-b.plotLeft,y:0,width:e,height:j},k={x:d+b.plotLeft-e,y:0,width:b.plotLeft+d,height:e});l.reversed?(b=k,e=a):(b=a,e=k);h?
(h.animate(b),i.animate(e)):(this.posClip=h=c.clipRect(b),this.negClip=i=c.clipRect(e),f&&this.graphNeg&&(f.clip(h),this.graphNeg.clip(i)),g&&(g.clip(h),this.areaNeg.clip(i)))}},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};q(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){X(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=
f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&p(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;
c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.clipNeg());q(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=
setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:p(d&&d.left,a.plotLeft),translateY:p(e&&e.top,a.plotTop)}));this.translate();this.setTooltipPoints&&this.setTooltipPoints(!0);this.render();b&&I(this,"updatedData")}};Gb.prototype={destroy:function(){Pa(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?Ja(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=this.isNegative,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,
f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};na.prototype.buildStacks=function(){var a=this.series,b=p(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};na.prototype.renderStackTotals=function(){var a=
this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};O.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.stack,e=e.stacking,h=this.stackKey,
i="-"+h,j=this.negStacks,k=this.yAxis,l=k.stacks,n=k.oldStacks,m,o,p,q,r,s;for(q=0;q<d;q++){r=a[q];s=b[q];p=this.index+","+q;o=(m=j&&s<f)?i:h;l[o]||(l[o]={});if(!l[o][r])n[o]&&n[o][r]?(l[o][r]=n[o][r],l[o][r].total=null):l[o][r]=new Gb(k,k.options.stackLabels,m,r,g);o=l[o][r];o.points[p]=[o.cum||0];e==="percent"?(m=m?h:i,j&&l[m]&&l[m][r]?(m=l[m][r],o.total=m.total=t(m.total,o.total)+Q(s)||0):o.total=ea(o.total+(Q(s)||0))):o.total=ea(o.total+(s||0));o.cum=(o.cum||0)+(s||0);o.points[p].push(o.cum);
c[q]=o.cum}if(e==="percent")k.usePercentage=!0;this.stackedYData=c;k.oldStacks={}}};O.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;q([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=ea(g[0]*h),g[1]=ea(g[1]*h),a.stackedYData[f]=g[1]})};r(Ya.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),I(e,"addSeries",{options:a},function(){d=e.initSeries(a);
e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new na(this,w(a,{index:this[e].length,isX:b}));f[e]=ra(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&B(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=$(Ka,{className:"highcharts-loading"},r(e.style,{zIndex:10,display:P}),
b.container),b.loadingSpan=$("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)B(d,{opacity:0,display:""}),jb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&jb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){B(b,{display:P})}});this.loadingShown=!1}});r(Fa.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(da(a)&&
!Ha(a))f.redraw=function(){if(h)a&&a.marker&&a.marker.symbol?f.graphic=h.destroy():h.attr(f.pointAttr[f.state||""]);if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);k.data[i]=f.options;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;k.legendType==="point"&&j.legend.destroyItem(f);b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,b=p(b,!0);d===!1?e():f.firePointEvent("update",
{options:a},e)},remove:function(a,b){var c=this,d=c.series,e=d.points,f=d.chart,g,h=d.data;Ra(b,f);a=p(a,!0);c.firePointEvent("remove",null,function(){g=Ma(c,h);h.length===e.length&&e.splice(g,1);h.splice(g,1);d.options.data.splice(g,1);d.updateParallelArrays(c,"splice",g,1);c.destroy();d.isDirty=!0;d.isDirtyData=!0;a&&f.redraw()})}});r(O.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.graph,h=this.area,i=this.chart,j=this.xAxis&&this.xAxis.names,k=g&&g.shift||0,l=e.data,
n,m=this.xData;Ra(d,i);c&&q([g,h,this.graphNeg,this.areaNeg],function(a){if(a)a.shift=k+1});if(h)h.isArea=!0;b=p(b,!0);d={series:this};this.pointClass.prototype.applyOptions.apply(d,[a]);g=d.x;h=m.length;if(this.requireSorting&&g<m[h-1])for(n=!0;h&&m[h-1]>g;)h--;this.updateParallelArrays(d,"splice",h,0,0);this.updateParallelArrays(d,h);if(j&&d.name)j[g]=d.name;l.splice(h,0,a);n&&(this.data.splice(h,0,null),this.processData());e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):
(f.shift(),this.updateParallelArrays(d,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&(this.getAttribs(),i.redraw())},remove:function(a,b){var c=this,d=c.chart,a=p(a,!0);if(!c.isRemoving)c.isRemoving=!0,I(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});c.isRemoving=!1},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=H[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;q(h,function(a){h[a]=c[a];delete c[a]});
a=w(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)g.hasOwnProperty(i)&&(this[i]=u);r(this,H[a.type||f].prototype);q(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});r(na.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this._addedPlotLB=u;this.init(c,r(a,{events:u}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=
this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);la(b.axes,this);la(b[c],this);b.options[c].splice(this.options.index,1);q(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});ia=ma(O);H.line=ia;ca.area=w(T,{threshold:0});var qa=ma(O,{type:"area",getSegments:function(){var a=this,b=[],c=[],d=[],e=this.xAxis,f=this.yAxis,g=f.stacks[this.stackKey],
h={},i,j,k=this.points,l=this.options.connectNulls,n,m;if(this.options.stacking&&!this.cropped){for(n=0;n<k.length;n++)h[k[n].x]=k[n];for(m in g)g[m].total!==null&&d.push(+m);d.sort(function(a,b){return a-b});q(d,function(b){var d=0,k;if(!l||h[b]&&h[b].y!==null)if(h[b])c.push(h[b]);else{for(n=a.index;n<=f.series.length;n++)if(k=g[b].points[n+","+b]){d=k[1];break}i=e.translate(b);j=f.toPixels(d,!0);c.push({y:null,plotX:i,clientX:i,plotY:j,yBottom:j,onMouseOver:sa})}});c.length&&b.push(c)}else O.prototype.getSegments.call(this),
b=this.segments;this.segments=b},getSegmentPath:function(a){var b=O.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=a.length-1;d>=0;d--)g=p(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,
c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];O.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=c.negativeColor,e=c.negativeFillColor,f=[["area",this.color,c.fillColor]];(d||e)&&f.push(["areaNeg",d,e]);q(f,function(d){var e=d[0],f=a[e];f?f.animate({d:b}):a[e]=a.chart.renderer.path(b).attr({fill:p(d[2],ya(d[1]).setOpacity(p(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:M.drawRectangle});H.area=qa;ca.spline=w(T);ia=ma(O,{type:"spline",
getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?(i=t(a,e),k=2*e-i):i<a&&i<e&&(i=L(a,e),k=2*e-i);k>g&&k>e?(k=t(g,e),i=2*e-k):k<g&&k<e&&(k=L(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});H.spline=
ia;ca.areaspline=w(ca.area);qa=qa.prototype;ia=ma(ia,{type:"areaspline",closedStacks:!0,getSegmentPath:qa.getSegmentPath,closeSegment:qa.closeSegment,drawGraph:qa.drawGraph,drawLegendSymbol:M.drawRectangle});H.areaspline=ia;ca.column=w(T,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,
verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});ia=ma(O,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){O.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===
!1?i=1:q(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===u&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=h});var c=L(Q(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=s(l)?(k-l)/2:k*b.pointPadding,l=p(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||0):a.columnIndex)||0)*k-c/2)*
(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.activePointCount>0.5*a.xAxis.len?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=t(i,1+2*d),k=a.pointXOffset=h.offset,l=-(d%2?0.5:0),n=d%2?0.5:1;b.renderer.isVML&&b.inverted&&(n+=1);c.pointPadding&&(j=La(j));O.prototype.translate.apply(a);q(a.points,function(c){var d=p(c.yBottom,f),h=L(t(-999-d,c.plotY),e.len+999+d),
q=c.plotX+k,r=j,s=L(h,d),u;u=t(h,d)-s;Q(u)<g&&g&&(u=g,s=v(Q(s-f)>g?d-g:f-(e.translate(c.y,0,1,0,1)<=f?g:0)));c.barX=q;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len-h,a.xAxis.len-q-r/2]:[q+r/2,h+e.pos-b.plotTop];r=v(q+r)+l;q=v(q)+l;r-=q;d=Q(s)<0.5;u=v(s+u)+n;s=v(s)+n;u-=s;d&&(s-=1,u+=1);c.shapeType="rect";c.shapeArgs={x:q,y:s,width:r,height:u}})},getSymbol:sa,drawLegendSymbol:M.drawRectangle,drawGraph:sa,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,
f,g;q(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==u&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=s(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],j?(bb(j),j.attr(i)[b.pointCount<e?"animate":"attr"](w(f))):h.graphic=d[h.shapeType](f).attr(g).attr(i).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ba)a?(e.scaleY=
0.001,a=L(b.pos+b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0});O.prototype.remove.apply(a,arguments)}});H.column=ia;ca.bar=w(ca.column);qa=ma(ia,{type:"bar",inverted:!0});H.bar=qa;ca.scatter=w(T,{lineWidth:0,tooltip:{headerFormat:'<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"},stickyTracking:!1});qa=ma(O,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,singularTooltips:!0,drawGraph:function(){this.options.lineWidth&&O.prototype.drawGraph.call(this)}});H.scatter=qa;ca.pie=w(T,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name}},
ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});T={type:"pie",isCartesian:!1,pointClass:ma(Fa,{init:function(){Fa.prototype.init.apply(this,arguments);var a=this,b;if(a.y<0)a.y=null;r(a,{visible:a.visible!==!1,name:p(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a){var b=this,c=b.series,
d=c.chart;b.visible=b.options.visible=a=a===u?!b.visible:a;c.options.data[Ma(b,c.data)]=b.options;q(["graphic","dataLabel","connector","shadowGroup"],function(c){if(b[c])b[c][a?"show":"hide"](!0)});b.legendItem&&d.legend.colorizeItem(b,a);if(!c.isDirty&&c.options.ignoreHiddenPoint)c.isDirty=!0,d.redraw()},slice:function(a,b,c){var d=this.series;Ra(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[Ma(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,
translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},singularTooltips:!0,
getColor:sa,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)q(c,function(a){var c=a.graphic,a=a.shapeArgs;c&&(c.attr({r:b.center[3]/2,start:d,end:d}),c.animate({r:a.r,start:a.start,end:a.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){O.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();p(b,!0)&&this.chart.redraw(c)},generatePoints:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;O.prototype.generatePoints.call(this);
c=this.points;d=c.length;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0?e.y/b*100:0,e.total=b},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=oa/180*(i-90),i=(this.endAngleRad=oa/180*(p(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,n,m=k.length,o;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=
V.asin(L((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*aa(h)*(a[2]/2+l)};for(n=0;n<m;n++){o=k[n];f=j+b*i;if(!c||o.visible)b+=o.percentage/100;g=j+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:v(f*1E3)/1E3,end:v(g*1E3)/1E3};h=(g+f)/2;h>1.5*oa?h-=2*oa:h<-oa/2&&(h+=2*oa);o.slicedTranslation={translateX:v(aa(h)*d),translateY:v(fa(h)*d)};f=aa(h)*a[2]/2;g=fa(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];o.half=h<-oa/2||h>oa/2?1:0;o.angle=h;e=L(e,l/2);o.labelPos=[a[0]+f+aa(h)*
l,a[1]+g+fa(h)*l,a[0]+f+aa(h)*e,a[1]+g+fa(h)*e,a[0]+f,a[1]+g,l<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);q(a.points,function(h){d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(r(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?
"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);h.visible!==void 0&&h.setVisible(h.visible)})},sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:M.drawRectangle,getCenter:Z.getCenter,getSymbol:sa};T=ma(O,T);H.pie=T;O.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),
j=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(j.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,q(e,function(b){var e,h=b.dataLabel,m,o,q=b.connector,t=!0;f=b.options&&b.options.dataLabels;e=p(f&&f.enabled,g.enabled);if(h&&!e)b.dataLabel=h.destroy();else if(e){d=w(g,f);e=d.rotation;m=b.getLabelConfig();i=d.format?Ja(d.format,m):d.formatter.call(m,d);d.style.color=
p(d.color,d.style.color,a.color,"black");if(h)if(s(i))h.attr({text:i}),t=!1;else{if(b.dataLabel=h=h.destroy(),q)b.connector=q.destroy()}else if(s(i)){h={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:e,padding:d.padding,zIndex:1};for(o in h)h[o]===u&&delete h[o];h=b.dataLabel=a.chart.renderer[e?"text":"label"](i,0,-999,null,null,null,d.useHTML).attr(h).css(r(d.style,c&&{cursor:c})).add(j).shadow(d.shadow)}h&&a.alignDataLabel(b,h,d,null,t)}})};
O.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-999),i=p(a.plotY,-999),j=b.getBBox();if(a=this.visible&&(a.series.forceDL||f.isInsidePlot(h,v(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)))d=r({x:g?f.plotWidth-i:h,y:v(g?f.plotHeight-h:i),width:0,height:0},d),r(c,{width:j.width,height:j.height}),c.rotation?b[e?"attr":"animate"]({x:d.x+c.x+d.width/2,y:d.y+c.y+d.height/2}).attr({align:c.align}):(b.align(c,null,d),g=b.alignAttr,p(c.overflow,"justify")===
"justify"?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(a=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)));if(!a)b.attr({y:-999}),b.placed=!1};O.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k;j=c.x;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height;if(j>g.plotHeight)i==="top"?
b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(H.pie)H.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=p(e.softConnector,!0),n=e.distance,m=a.center,o=m[2]/2,r=m[1],s=n>0,u,w,x,A=[[],[]],y,B,I,H,z,R=[0,0,0,0],N=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){O.prototype.drawDataLabels.apply(a);q(b,
function(a){a.dataLabel&&a.visible&&A[a.half].push(a)});for(H=2;H--;){var G=[],M=[],F=A[H],K=F.length,E;if(K){a.sortByAngle(F,H-0.5);for(z=b=0;!b&&F[z];)b=F[z]&&F[z].dataLabel&&(F[z].dataLabel.getBBox().height||21),z++;if(n>0){w=L(r+o+n,d.plotHeight);for(z=t(0,r-o-n);z<=w;z+=b)G.push(z);w=G.length;if(K>w){c=[].concat(F);c.sort(N);for(z=K;z--;)c[z].rank=z;for(z=K;z--;)F[z].rank>=w&&F.splice(z,1);K=F.length}for(z=0;z<K;z++){c=F[z];x=c.labelPos;c=9999;var S,P;for(P=0;P<w;P++)S=Q(G[P]-x[1]),S<c&&(c=S,
E=P);if(E<z&&G[z]!==null)E=z;else for(w<K-z+E&&G[z]!==null&&(E=w-K+z);G[E]===null;)E++;M.push({i:E,y:G[E]});G[E]=null}M.sort(N)}for(z=0;z<K;z++){c=F[z];x=c.labelPos;u=c.dataLabel;I=c.visible===!1?"hidden":"visible";c=x[1];if(n>0){if(w=M.pop(),E=w.i,B=w.y,c>B&&G[E+1]!==null||c<B&&G[E-1]!==null)B=L(t(0,c),d.plotHeight)}else B=c;y=e.justify?m[0]+(H?-1:1)*(o+n):a.getX(B===r-o-n||B===r+o+n?c:B,H);u._attr={visibility:I,align:x[6]};u._pos={x:y+e.x+({left:f,right:-f}[x[6]]||0),y:B+e.y-10};u.connX=y;u.connY=
B;if(this.options.size===null)w=u.width,y-w<f?R[3]=t(v(w-y+f),R[3]):y+w>h-f&&(R[1]=t(v(y+w-h+f),R[1])),B-b/2<0?R[0]=t(v(-B+b/2),R[0]):B+b/2>i&&(R[2]=t(v(B+b/2-i),R[2]))}}}if(Ca(R)===0||this.verifyDataLabelOverflow(R))this.placeDataLabels(),s&&g&&q(this.points,function(b){j=b.connector;x=b.labelPos;if((u=b.dataLabel)&&u._pos)I=u._attr.visibility,y=u.connX,B=u.connY,k=l?["M",y+(x[6]==="left"?5:-5),B,"C",y,B,2*x[2]-x[4],2*x[3]-x[5],x[2],x[3],"L",x[4],x[5]]:["M",y+(x[6]==="left"?5:-5),B,"L",x[2],x[3],
"L",x[4],x[5]],j?(j.animate({d:k}),j.attr("visibility",I)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:I}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},H.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},H.pie.prototype.alignDataLabel=sa,H.pie.prototype.verifyDataLabelOverflow=
function(a){var b=this.center,c=this.options,d=c.center,e=c=c.minSize||80,f;d[0]!==null?e=t(b[2]-t(a[1],a[3]),c):(e=t(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=t(L(e,b[2]-t(a[0],a[2])),c):(e=t(L(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),q(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f};if(H.column)H.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,
h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>p(this.translatedThreshold,f.plotSizeY),j=p(c.inside,!!this.options.stacking);if(h&&(d=w(h),g&&(d={x:f.plotWidth-d.y-d.height,y:f.plotHeight-d.x-d.width,width:d.height,height:d.width}),!j))g?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=p(c.align,!g||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,g||j?"middle":i?"top":"bottom");O.prototype.alignDataLabel.call(this,a,b,c,d,e)};T=K.TrackerMixin={drawTrackerPoint:function(){var a=
this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(c){var d=c.target,e;if(b.hoverSeries!==a)a.onMouseOver();for(;d&&!e;)e=d.point,d=d.parentNode;if(e!==u&&e!==b.hoverPoint)e.onMouseOver(c)};q(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)q(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),$a))a[b].on("touchstart",
f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,n,m=function(){if(f.hoverSeries!==a)a.onMouseOver()},o="rgba(192,192,192,"+(ba?1.0E-4:0.002)+")";if(e&&!c)for(n=e+1;n--;)d[n]==="M"&&d.splice(n+1,0,d[n+1]-i,d[n+2],"L"),(n&&d[n]==="M"||n===e)&&d.splice(n,0,"L",d[n-2]+i,d[n-1]);for(n=0;n<k.length;n++)e=
k[n],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:o,fill:c?o:P,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),q([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if($a)a.on("touchstart",m)}))}};if(H.column)ia.prototype.drawTracker=T.drawTrackerPoint;if(H.pie)H.pie.prototype.drawTracker=
T.drawTrackerPoint;if(H.scatter)qa.prototype.drawTracker=T.drawTrackerPoint;r(lb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):I(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=
$("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);N(a.checkbox,"click",function(b){I(a,"checkboxClick",{checked:b.target.checked},function(){a.select()})})}});E.legend.itemStyle.cursor="pointer";r(Ya.prototype,{showResetZoom:function(){var a=this,b=E.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},
d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;I(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?q(this.axes,function(a){b=a.zoom()}):q(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&
da(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&q(d,function(a){a.setState()});q(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),l=h.toValue(i-d,!0)+j,i=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j;h.series.length&&l>L(k.dataMin,k.min)&&i<t(k.dataMax,k.max)&&(h.setExtremes(l,
i,!1,!1,{trigger:"pan"}),e=!0);c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);B(c.container,{cursor:"move"})}});r(Fa.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ma(c,d.data)]=c.options;c.setState(a&&"select");b||q(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[Ma(a,d.data)]=a.options,a.setState(""),
a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,d=c.tooltip,e=c.hoverPoint;if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||Ma(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)N(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=ca[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},n=e.chart,m=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&
l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(w(o,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=n.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&n.isInsidePlot(c,d,n.inverted)?"show":"hide"]()}if((c=f[a]&&f[a].halo)&&c.size){if(!m)e.halo=m=n.renderer.path().add(e.seriesGroup);
m.attr(r({fill:ya(this.color||e.color).setOpacity(c.opacity).get()},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else m&&m.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)}});r(O.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&
I(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&I(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=this.graphNeg,e=b.states,b=b.lineWidth,a=a||"";if(this.state!==a)this.state=a,e[a]&&e[a].enabled===!1||(a&&(b=e[a].lineWidth||b+(e[a].lineWidthPlus||
0)),c&&!c.dashstyle&&(a={"stroke-width":b},c.attr(a),d&&d.attr(a)))},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===u?!h:a)?"show":"hide";q(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&q(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});q(c.linkedSeries,
function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();I(c,f)},setTooltipPoints:function(a){var b=[],c,d,e=this.xAxis,f=e&&e.getExtremes(),g=e?e.tooltipLen||e.len:this.chart.plotSizeX,h,i,j=[];if(!(this.options.enableMouseTracking===!1||this.singularTooltips)){if(a)this.tooltipPoints=null;q(this.segments||this.points,function(a){b=b.concat(a)});e&&e.reversed&&(b=b.reverse());this.orderTooltipPoints&&this.orderTooltipPoints(b);a=b.length;for(i=0;i<a;i++)if(e=b[i],c=e.x,c>=f.min&&
c<=f.max){h=b[i+1];c=d===u?0:d+1;for(d=b[i+1]?L(t(0,U((e.clientX+(h?h.wrappedClientX||h.clientX:g))/2)),g):g;c>=0&&c<=d;)j[c++]=e}this.tooltipPoints=j}},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===u?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;I(this,a?"select":"unselect")},drawTracker:T.drawTrackerGraph});r(K,{Axis:na,Chart:Ya,Color:ya,Point:Fa,Tick:Ta,Renderer:Za,Series:O,SVGElement:S,SVGRenderer:ta,arrayMin:Oa,arrayMax:Ca,
charts:W,dateFormat:cb,format:Ja,pathAnim:vb,getOptions:function(){return E},hasBidiBug:Ob,isTouchDevice:Ib,numberFormat:Ba,seriesTypes:H,setOptions:function(a){E=w(!0,E,a);Bb();return E},addEvent:N,removeEvent:X,createElement:$,discardElement:Qa,css:B,each:q,extend:r,map:Va,merge:w,pick:p,splat:ra,extendClass:ma,pInt:y,wrap:Na,svg:ba,canvas:ga,vml:!ba&&!ga,product:"Highcharts",version:"4.0.4"})})();
;/*
 Highcharts JS v4.0.4 (2014-09-02)
 Exporting module

 (c) 2010-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){var A=f.Chart,t=f.addEvent,B=f.removeEvent,l=f.createElement,o=f.discardElement,v=f.css,k=f.merge,r=f.each,p=f.extend,D=Math.max,j=document,C=window,E=f.isTouchDevice,F=f.Renderer.prototype.symbols,s=f.getOptions(),y;p(s.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});s.navigation={menuStyle:{border:"1px solid #A0A0A0",
background:"#FFFFFF",padding:"5px 0"},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030",fontSize:E?"14px":"11px"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{symbolFill:"#E0E0E0",symbolSize:14,symbolStroke:"#666",symbolStrokeWidth:3,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,theme:{fill:"white",stroke:"none"},verticalAlign:"top",width:24}};s.exporting={type:"image/png",url:"http://export.highcharts.com/",buttons:{contextButton:{menuClassName:"highcharts-contextmenu",
symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(b,a,d){var c,b=l("form",k({method:"post",
action:b,enctype:"multipart/form-data"},d),{display:"none"},j.body);for(c in a)l("input",{type:"hidden",name:c,value:a[c]},null,b);b.submit();o(b)};p(A.prototype,{getSVG:function(b){var a=this,d,c,z,h,g=k(a.options,b);if(!j.createElementNS)j.createElementNS=function(a,b){return j.createElement(b)};b=l("div",null,{position:"absolute",top:"-9999em",width:a.chartWidth+"px",height:a.chartHeight+"px"},j.body);c=a.renderTo.style.width;h=a.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||
/px$/.test(c)&&parseInt(c,10)||600;h=g.exporting.sourceHeight||g.chart.height||/px$/.test(h)&&parseInt(h,10)||400;p(g.chart,{animation:!1,renderTo:b,forExport:!0,width:c,height:h});g.exporting.enabled=!1;g.series=[];r(a.series,function(a){z=k(a.options,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});z.isInternal||g.series.push(z)});d=new f.Chart(g,a.callback);r(["xAxis","yAxis"],function(b){r(a[b],function(a,c){var g=d[b][c],f=a.getExtremes(),h=f.userMin,f=f.userMax;g&&(h!==
void 0||f!==void 0)&&g.setExtremes(h,f,!0,!1)})});c=d.container.innerHTML;g=null;d.destroy();o(b);c=c.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/\n/," ").replace(/<\/svg>.*?$/,"</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g,
" ").replace(/&shy;/g,"­").replace(/<IMG /g,"<image ").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()});return c=c.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'")},exportChart:function(b,a){var b=
b||{},d=this.options.exporting,d=this.getSVG(k({chart:{borderRadius:0}},d.chartOptions,a,{exporting:{sourceWidth:b.sourceWidth||d.sourceWidth,sourceHeight:b.sourceHeight||d.sourceHeight}})),b=k(this.options.exporting,b);f.post(b.url,{filename:b.filename||"chart",type:b.type,width:b.width||0,scale:b.scale||2,svg:d},b.formAttributes)},print:function(){var b=this,a=b.container,d=[],c=a.parentNode,f=j.body,h=f.childNodes;if(!b.isPrinting)b.isPrinting=!0,r(h,function(a,b){if(a.nodeType===1)d[b]=a.style.display,
a.style.display="none"}),f.appendChild(a),C.focus(),C.print(),setTimeout(function(){c.appendChild(a);r(h,function(a,b){if(a.nodeType===1)a.style.display=d[b]});b.isPrinting=!1},1E3)},contextMenu:function(b,a,d,c,f,h,g){var e=this,k=e.options.navigation,q=k.menuItemStyle,m=e.chartWidth,n=e.chartHeight,j="cache-"+b,i=e[j],u=D(f,h),w,x,o,s=function(a){e.pointer.inClass(a.target,b)||x()};if(!i)e[j]=i=l("div",{className:b},{position:"absolute",zIndex:1E3,padding:u+"px"},e.container),w=l("div",null,p({MozBoxShadow:"3px 3px 10px #888",
WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},k.menuStyle),i),x=function(){v(i,{display:"none"});g&&g.setState(0);e.openMenu=!1},t(i,"mouseleave",function(){o=setTimeout(x,500)}),t(i,"mouseenter",function(){clearTimeout(o)}),t(document,"mouseup",s),t(e,"destroy",function(){B(document,"mouseup",s)}),r(a,function(a){if(a){var b=a.separator?l("hr",null,null,w):l("div",{onmouseover:function(){v(this,k.menuItemHoverStyle)},onmouseout:function(){v(this,q)},onclick:function(){x();a.onclick.apply(e,
arguments)},innerHTML:a.text||e.options.lang[a.textKey]},p({cursor:"pointer"},q),w);e.exportDivElements.push(b)}}),e.exportDivElements.push(w,i),e.exportMenuWidth=i.offsetWidth,e.exportMenuHeight=i.offsetHeight;a={display:"block"};d+e.exportMenuWidth>m?a.right=m-d-f-u+"px":a.left=d-u+"px";c+h+e.exportMenuHeight>n&&g.alignOptions.verticalAlign!=="top"?a.bottom=n-c-u+"px":a.top=c+h-u+"px";v(i,a);e.openMenu=!0},addButton:function(b){var a=this,d=a.renderer,c=k(a.options.navigation.buttonOptions,b),j=
c.onclick,h=c.menuItems,g,e,l={stroke:c.symbolStroke,fill:c.symbolFill},q=c.symbolSize||12;if(!a.btnCount)a.btnCount=0;if(!a.exportDivElements)a.exportDivElements=[],a.exportSVGElements=[];if(c.enabled!==!1){var m=c.theme,n=m.states,o=n&&n.hover,n=n&&n.select,i;delete m.states;j?i=function(){j.apply(a,arguments)}:h&&(i=function(){a.contextMenu(e.menuClassName,h,e.translateX,e.translateY,e.width,e.height,e);e.setState(2)});c.text&&c.symbol?m.paddingLeft=f.pick(m.paddingLeft,25):c.text||p(m,{width:c.width,
height:c.height,padding:0});e=d.button(c.text,0,0,i,m,o,n).attr({title:a.options.lang[c._titleKey],"stroke-linecap":"round"});e.menuClassName=b.menuClassName||"highcharts-menu-"+a.btnCount++;c.symbol&&(g=d.symbol(c.symbol,c.symbolX-q/2,c.symbolY-q/2,q,q).attr(p(l,{"stroke-width":c.symbolStrokeWidth||1,zIndex:1})).add(e));e.add().align(p(c,{width:e.width,x:f.pick(c.x,y)}),!0,"spacingBox");y+=(e.width+c.buttonSpacing)*(c.align==="right"?-1:1);a.exportSVGElements.push(e,g)}},destroyExport:function(b){var b=
b.target,a,d;for(a=0;a<b.exportSVGElements.length;a++)if(d=b.exportSVGElements[a])d.onclick=d.ontouchstart=null,b.exportSVGElements[a]=d.destroy();for(a=0;a<b.exportDivElements.length;a++)d=b.exportDivElements[a],B(d,"mouseleave"),b.exportDivElements[a]=d.onmouseout=d.onmouseover=d.ontouchstart=d.onclick=null,o(d)}});F.menu=function(b,a,d,c){return["M",b,a+2.5,"L",b+d,a+2.5,"M",b,a+c/2+0.5,"L",b+d,a+c/2+0.5,"M",b,a+c-1.5,"L",b+d,a+c-1.5]};A.prototype.callbacks.push(function(b){var a,d=b.options.exporting,
c=d.buttons;y=0;if(d.enabled!==!1){for(a in c)b.addButton(c[a]);t(b,"destroy",b.destroyExport)}})})(Highcharts);
;/*
  Highcharts JS v4.0.4 (2014-09-02)
 Solid angular gauge module

 (c) 2010-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){var k=a.getOptions().plotOptions,q=a.pInt,r=a.pick,l=a.each,n;k.solidgauge=a.merge(k.gauge,{colorByPoint:!0});n={initDataClasses:function(b){var h=this,e=this.chart,c,m=0,f=this.options;this.dataClasses=c=[];l(b.dataClasses,function(g,d){var i,g=a.merge(g);c.push(g);if(!g.color)f.dataClassColor==="category"?(i=e.options.colors,g.color=i[m++],m===i.length&&(m=0)):g.color=h.tweenColors(a.Color(f.minColor),a.Color(f.maxColor),d/(b.dataClasses.length-1))})},initStops:function(b){this.stops=
b.stops||[[0,this.options.minColor],[1,this.options.maxColor]];l(this.stops,function(b){b.color=a.Color(b[1])})},toColor:function(b,h){var e,c=this.stops,a,f=this.dataClasses,g,d;if(f)for(d=f.length;d--;){if(g=f[d],a=g.from,c=g.to,(a===void 0||b>=a)&&(c===void 0||b<=c)){e=g.color;if(h)h.dataClass=d;break}}else{this.isLog&&(b=this.val2lin(b));e=1-(this.max-b)/(this.max-this.min);for(d=c.length;d--;)if(e>c[d][0])break;a=c[d]||c[d+1];c=c[d+1]||a;e=1-(c[0]-e)/(c[0]-a[0]||1);e=this.tweenColors(a.color,
c.color,e)}return e},tweenColors:function(b,a,e){var c=a.rgba[3]!==1||b.rgba[3]!==1;return b.rgba.length===0||a.rgba.length===0?"none":(c?"rgba(":"rgb(")+Math.round(a.rgba[0]+(b.rgba[0]-a.rgba[0])*(1-e))+","+Math.round(a.rgba[1]+(b.rgba[1]-a.rgba[1])*(1-e))+","+Math.round(a.rgba[2]+(b.rgba[2]-a.rgba[2])*(1-e))+(c?","+(a.rgba[3]+(b.rgba[3]-a.rgba[3])*(1-e)):"")+")"}};a.seriesTypes.solidgauge=a.extendClass(a.seriesTypes.gauge,{type:"solidgauge",bindAxes:function(){var b;a.seriesTypes.gauge.prototype.bindAxes.call(this);
b=this.yAxis;a.extend(b,n);b.options.dataClasses&&b.initDataClasses(b.options);b.initStops(b.options)},drawPoints:function(){var b=this,h=b.yAxis,e=h.center,c=b.options,m=b.chart.renderer;a.each(b.points,function(f){var g=f.graphic,d=h.startAngleRad+h.translate(f.y,null,null,null,!0),i=q(r(c.radius,100))*e[2]/200,o=q(r(c.innerRadius,60))*e[2]/200,p=h.toColor(f.y,f),k;if(p!=="none")k=f.color,f.color=p;c.wrap===!1&&(d=Math.max(h.startAngleRad,Math.min(h.endAngleRad,d)));var d=d*180/Math.PI,j=d/(180/
Math.PI),l=h.startAngleRad,d=Math.min(j,l),j=Math.max(j,l);j-d>2*Math.PI&&(j=d+2*Math.PI);i={x:e[0],y:e[1],r:i,innerR:o,start:d,end:j};g?(o=i.d,g.attr({fill:f.color}).animate(i,{step:function(b,c){g.attr("fill",n.tweenColors(a.Color(k),a.Color(p),c.pos))}}),i.d=o):f.graphic=m.arc(i).attr({stroke:c.borderColor||"none","stroke-width":c.borderWidth||0,fill:f.color,"sweep-flag":0}).add(b.group)})},animate:null})})(Highcharts);
;!function(a){a.Parse=a.Parse||{},a.Parse.VERSION="js1.3.4"}(this),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?void(this._wrapped=a):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.4.4";var y=x.each=x.forEach=function(a,b,d){if(null!=a)if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g in a)if(x.has(a,g)&&b.call(d,a[g],g,a)===c)return};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b]})},x.where=function(a,b,c){return x.isEmpty(b)?c?null:[]:x[c?"find":"filter"](a,function(a){for(var c in b)if(b[c]!==a[c])return!1;return!0})},x.findWhere=function(a,b){return x.where(a,b,!0)},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-1/0;var d={computed:-1/0,value:-1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!b&&x.isEmpty(a))return 1/0;var d={computed:1/0,value:1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d};var B=function(a){return x.isFunction(a)?a:function(b){return b[a]}};x.sortBy=function(a,b,c){var d=B(b);return x.pluck(x.map(a,function(a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")};var C=function(a,b,c,d){var e={},f=B(b||x.identity);return y(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};x.groupBy=function(a,b,c){return C(a,b,c,function(a,b,c){(x.has(a,b)?a[b]:a[b]=[]).push(c)})},x.countBy=function(a,b,c){return C(a,b,c,function(a,b){x.has(a,b)||(a[b]=0),a[b]++})},x.sortedIndex=function(a,b,c,d){c=null==c?x.identity:B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return y(a,function(a){x.isArray(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(i.apply(d,arguments))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=h.call(arguments),b=x.max(x.pluck(a,"length")),c=new Array(b),d=0;b>d;d++)c[d]=x.pluck(a,""+d);return c},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f},x.bind=function(a,b){if(a.bind===w&&w)return w.apply(a,h.call(arguments,1));var c=h.call(arguments,2);return function(){return a.apply(b,c.concat(h.call(arguments)))}},x.partial=function(a){var b=h.call(arguments,1);return function(){return a.apply(this,b.concat(h.call(arguments)))}},x.bindAll=function(a){var b=h.call(arguments,1);return 0===b.length&&(b=x.functions(a)),y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b){var c,d,e,f,g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)};return function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},x.debounce=function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return function(){var c=[a];return g.apply(c,arguments),b.apply(this,c)}},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return 0>=a?b():function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=v||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&(b[b.length]=c);return b},x.values=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push(a[c]);return b},x.pairs=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push([c,a[c]]);return b},x.invert=function(a){var b={};for(var c in a)x.has(a,c)&&(b[a[c]]=c);return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)null==a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var E=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;c.push(a),d.push(b);var g=0,h=!0;if("[object Array]"==e){if(g=a.length,h=g==b.length)for(;g--&&(h=E(a[g],b[g],c,d)););}else{var i=a.constructor,k=b.constructor;if(i!==k&&!(x.isFunction(i)&&i instanceof i&&x.isFunction(k)&&k instanceof k))return!1;for(var l in a)if(x.has(a,l)&&(g++,!(h=x.has(b,l)&&E(a[l],b[l],c,d))))break;if(h){for(l in b)if(x.has(b,l)&&!g--)break;h=!g}}return c.pop(),d.pop(),h};x.isEqual=function(a,b){return E(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.times=function(a,b,c){for(var d=Array(a),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var F={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};F.unescape=x.invert(F.escape);var G={escape:new RegExp("["+x.keys(F.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(F.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(G[a],function(b){return F[a][b]})}}),x.result=function(a,b){if(null==a)return null;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),L.call(this,c.apply(x,a))}})};var H=0;x.uniqueId=function(a){var b=++H+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},K=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||I).source,(c.interpolate||I).source,(c.evaluate||I).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(K,function(a){return"\\"+J[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var L=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],L.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return L.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;"undefined"!=typeof localStorage?b.localStorage=localStorage:"undefined"!=typeof require&&(b.localStorage=require("localStorage")),"undefined"!=typeof XMLHttpRequest?b.XMLHttpRequest=XMLHttpRequest:"undefined"!=typeof require&&(b.XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest),"undefined"!=typeof exports&&exports._?(b._=exports._.noConflict(),exports.Parse=b):b._=_.noConflict(),"undefined"!=typeof $&&(b.$=$);var c=function(){},d=function(a,d,e){var f;return f=d&&d.hasOwnProperty("constructor")?d.constructor:function(){a.apply(this,arguments)},b._.extend(f,a),c.prototype=a.prototype,f.prototype=new c,d&&b._.extend(f.prototype,d),e&&b._.extend(f,e),f.prototype.constructor=f,f.__super__=a.prototype,f};b.serverURL="https://api.parse.com","undefined"!=typeof process&&process.versions&&process.versions.node&&(b._isNode=!0),b.initialize=function(a,c,d){if(d)throw"Parse.initialize() was passed a Master Key, which is only allowed from within Node.js.";b._initialize(a,c)},b._initialize=function(a,c,d){b.applicationId=a,b.javaScriptKey=c,b.masterKey=d,b._useMasterKey=!1},b._isNode&&(b.initialize=b._initialize,b.Cloud=b.Cloud||{},b.Cloud.useMasterKey=function(){b._useMasterKey=!0}),b._getParsePath=function(a){if(!b.applicationId)throw"You need to call Parse.initialize before using Parse.";if(a||(a=""),!b._.isString(a))throw"Tried to get a localStorage path that wasn't a String.";return"/"===a[0]&&(a=a.substring(1)),"Parse/"+b.applicationId+"/"+a},b._installationId=null,b._getInstallationId=function(){if(b._installationId)return b._installationId;var a=b._getParsePath("installationId");if(b._installationId=b.localStorage.getItem(a),!b._installationId||""===b._installationId){var c=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};b._installationId=c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c(),b.localStorage.setItem(a,b._installationId)}return b._installationId},b._parseDate=function(a){var b=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),c=b.exec(a);if(!c)return null;var d=c[1]||0,e=(c[2]||1)-1,f=c[3]||0,g=c[4]||0,h=c[5]||0,i=c[6]||0,j=c[8]||0;return new Date(Date.UTC(d,e,f,g,h,i,j))},b._ajaxIE8=function(a,c,d){var e=new b.Promise,f=new XDomainRequest;return f.onload=function(){var a;try{a=JSON.parse(f.responseText)}catch(b){e.reject(b)}a&&e.resolve(a)},f.onerror=f.ontimeout=function(){var a={responseText:JSON.stringify({code:b.Error.X_DOMAIN_REQUEST,error:"IE's XDomainRequest does not supply error info."})};e.reject(a)},f.onprogress=function(){},f.open(a,c),f.send(d),e},b._useXDomainRequest=function(){return"undefined"!=typeof XDomainRequest?"withCredentials"in new XMLHttpRequest?!1:!0:!1},b._ajax=function(a,c,d,e,f){var g={success:e,error:f};if(b._useXDomainRequest())return b._ajaxIE8(a,c,d)._thenRunCallbacks(g);var h=new b.Promise,i=!1,j=new b.XMLHttpRequest;return j.onreadystatechange=function(){if(4===j.readyState){if(i)return;if(i=!0,j.status>=200&&j.status<300){var a;try{a=JSON.parse(j.responseText)}catch(b){h.reject(b)}a&&h.resolve(a,j.status,j)}else h.reject(j)}},j.open(a,c,!0),j.setRequestHeader("Content-Type","text/plain"),b._isNode&&j.setRequestHeader("User-Agent","Parse/"+b.VERSION+" (NodeJS "+process.versions.node+")"),j.send(d),h._thenRunCallbacks(g)},b._extend=function(a,b){var c=d(this,a,b);return c.extend=this.extend,c},b._request=function(a){var c=a.route,d=a.className,e=a.objectId,f=a.method,g=a.useMasterKey,h=a.sessionToken,i=a.data;if(!b.applicationId)throw"You must specify your applicationId using Parse.initialize.";if(!b.javaScriptKey&&!b.masterKey)throw"You must specify a key using Parse.initialize.";if(!h){var j=b.User.current();j&&j._sessionToken&&(h=j._sessionToken)}if("batch"!==c&&"classes"!==c&&"events"!==c&&"files"!==c&&"functions"!==c&&"login"!==c&&"push"!==c&&"requestPasswordReset"!==c&&"rest_verify_analytics"!==c&&"users"!==c&&"jobs"!==c&&"config"!==c)throw"Bad route: '"+c+"'.";var k=b.serverURL;"/"!==k.charAt(k.length-1)&&(k+="/"),k+="1/"+c,d&&(k+="/"+d),e&&(k+="/"+e),i=b._.clone(i||{}),"POST"!==f&&(i._method=f,f="POST"),b._.isUndefined(g)&&(g=b._useMasterKey),i._ApplicationId=b.applicationId,g?i._MasterKey=b.masterKey:i._JavaScriptKey=b.javaScriptKey,i._ClientVersion=b.VERSION,i._InstallationId=b._getInstallationId(),h&&(i._SessionToken=h);var l=JSON.stringify(i);return b._ajax(f,k,l).then(null,function(a){var c;if(a&&a.responseText)try{var d=JSON.parse(a.responseText);c=new b.Error(d.code,d.error)}catch(e){c=new b.Error(b.Error.INVALID_JSON,"Received an error with invalid JSON from Parse: "+a.responseText)}else c=new b.Error(b.Error.CONNECTION_FAILED,"XMLHttpRequest failed: "+JSON.stringify(a));return b.Promise.error(c)})},b._getValue=function(a,c){return a&&a[c]?b._.isFunction(a[c])?a[c]():a[c]:null},b._encode=function(a,c,d){var e=b._;if(a instanceof b.Object){if(d)throw"Parse.Objects not allowed here";if(!c||e.include(c,a)||!a._hasData)return a._toPointer();if(!a.dirty())return c=c.concat(a),b._encode(a._toFullJSON(c),c,d);throw"Tried to save an object with a pointer to a new, unsaved object."}if(a instanceof b.ACL)return a.toJSON();if(e.isDate(a))return{__type:"Date",iso:a.toJSON()};if(a instanceof b.GeoPoint)return a.toJSON();if(e.isArray(a))return e.map(a,function(a){return b._encode(a,c,d)});if(e.isRegExp(a))return a.source;if(a instanceof b.Relation)return a.toJSON();if(a instanceof b.Op)return a.toJSON();if(a instanceof b.File){if(!a.url())throw"Tried to save an object containing an unsaved file.";return{__type:"File",name:a.name(),url:a.url()}}if(e.isObject(a)){var f={};return b._objectEach(a,function(a,e){f[e]=b._encode(a,c,d)}),f}return a},b._decode=function(a,c){var d=b._;if(!d.isObject(c))return c;if(d.isArray(c))return b._arrayEach(c,function(a,d){c[d]=b._decode(d,a)}),c;if(c instanceof b.Object)return c;if(c instanceof b.File)return c;if(c instanceof b.Op)return c;if(c.__op)return b.Op._decode(c);if("Pointer"===c.__type&&c.className){var e=b.Object._create(c.className);return e._finishFetch({objectId:c.objectId},!1),e}if("Object"===c.__type&&c.className){var f=c.className;delete c.__type,delete c.className;var g=b.Object._create(f);return g._finishFetch(c,!0),g}if("Date"===c.__type)return b._parseDate(c.iso);if("GeoPoint"===c.__type)return new b.GeoPoint({latitude:c.latitude,longitude:c.longitude});if("ACL"===a)return c instanceof b.ACL?c:new b.ACL(c);if("Relation"===c.__type){var h=new b.Relation(null,a);return h.targetClassName=c.className,h}if("File"===c.__type){var i=new b.File(c.name);return i._url=c.url,i}return b._objectEach(c,function(a,d){c[d]=b._decode(d,a)}),c},b._arrayEach=b._.each,b._traverse=function(a,c,d){if(a instanceof b.Object){if(d=d||[],b._.indexOf(d,a)>=0)return;return d.push(a),b._traverse(a.attributes,c,d),c(a)}return a instanceof b.Relation||a instanceof b.File?c(a):b._.isArray(a)?(b._.each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):b._.isObject(a)?(b._each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):c(a)},b._objectEach=b._each=function(a,c){var d=b._;d.isObject(a)?d.each(d.keys(a),function(b){c(a[b],b)}):d.each(a,c)},b._isNullOrUndefined=function(a){return b._.isNull(a)||b._.isUndefined(a)}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Analytics=b.Analytics||{},c.extend(b.Analytics,{track:function(a,d,e){if(a=a||"",a=a.replace(/^\s*/,""),a=a.replace(/\s*$/,""),0===a.length)throw"A name for the custom event must be provided";return c.each(d,function(a,b){if(!c.isString(b)||!c.isString(a))throw'track() dimensions expects keys and values of type "string".'}),e=e||{},b._request({route:"events",className:a,method:"POST",data:{dimensions:d}})._thenRunCallbacks(e)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Config=function(){this.attributes={},this._escapedAttributes={}},b.Config.current=function(){if(b.Config._currentConfig)return b.Config._currentConfig;var a=b.localStorage.getItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY)),c=new b.Config;return a&&(c._finishFetch(JSON.parse(a)),b.Config._currentConfig=c),c},b.Config.get=function(a){a=a||{};var c=b._request({route:"config",method:"GET"});return c.then(function(a){if(!a||!a.params){var c=new b.Error(b.Error.INVALID_JSON,"Config JSON response invalid.");return b.Promise.error(c)}var d=new b.Config;return d._finishFetch(a),b.Config._currentConfig=d,d})._thenRunCallbacks(a)},b.Config.prototype={escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},get:function(a){return this.attributes[a]},_finishFetch:function(a){this.attributes=b._decode(null,c.clone(a.params)),b.localStorage.setItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY),JSON.stringify(a))}},b.Config._currentConfig=null,b.Config._CURRENT_CONFIG_KEY="currentConfig"}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Error=function(a,b){this.code=a,this.message=b},c.extend(b.Error,{OTHER_CAUSE:-1,INTERNAL_SERVER_ERROR:1,CONNECTION_FAILED:100,OBJECT_NOT_FOUND:101,INVALID_QUERY:102,INVALID_CLASS_NAME:103,MISSING_OBJECT_ID:104,INVALID_KEY_NAME:105,INVALID_POINTER:106,INVALID_JSON:107,COMMAND_UNAVAILABLE:108,NOT_INITIALIZED:109,INCORRECT_TYPE:111,INVALID_CHANNEL_NAME:112,PUSH_MISCONFIGURED:115,OBJECT_TOO_LARGE:116,OPERATION_FORBIDDEN:119,CACHE_MISS:120,INVALID_NESTED_KEY:121,INVALID_FILE_NAME:122,INVALID_ACL:123,TIMEOUT:124,INVALID_EMAIL_ADDRESS:125,MISSING_CONTENT_TYPE:126,MISSING_CONTENT_LENGTH:127,INVALID_CONTENT_LENGTH:128,FILE_TOO_LARGE:129,FILE_SAVE_ERROR:130,DUPLICATE_VALUE:137,INVALID_ROLE_NAME:139,EXCEEDED_QUOTA:140,SCRIPT_FAILED:141,VALIDATION_ERROR:142,INVALID_IMAGE_DATA:150,UNSAVED_FILE_ERROR:151,INVALID_PUSH_TIME_ERROR:152,FILE_DELETE_ERROR:153,REQUEST_LIMIT_EXCEEDED:155,INVALID_EVENT_NAME:160,USERNAME_MISSING:200,PASSWORD_MISSING:201,USERNAME_TAKEN:202,EMAIL_TAKEN:203,EMAIL_MISSING:204,EMAIL_NOT_FOUND:205,SESSION_MISSING:206,MUST_CREATE_USER_THROUGH_SIGNUP:207,ACCOUNT_ALREADY_LINKED:208,LINKED_ID_MISSING:250,INVALID_LINKED_SESSION:251,UNSUPPORTED_SERVICE:252,AGGREGATE_ERROR:600,FILE_READ_ERROR:601,X_DOMAIN_REQUEST:602})}(this),function(){var a=this,b=a.Parse||(a.Parse={}),c=/\s+/,d=Array.prototype.slice;b.Events={on:function(a,b,d){var e,f,g,h,i;if(!b)return this;for(a=a.split(c),e=this._callbacks||(this._callbacks={}),f=a.shift();f;)i=e[f],g=i?i.tail:{},g.next=h={},g.context=d,g.callback=b,e[f]={tail:h,next:i?i.next:g},f=a.shift();return this},off:function(a,b,d){var e,f,g,h,i,j;if(f=this._callbacks){if(!(a||b||d))return delete this._callbacks,this;for(a=a?a.split(c):_.keys(f),e=a.shift();e;)if(g=f[e],delete f[e],g&&(b||d)){for(h=g.tail,g=g.next;g!==h;)i=g.callback,j=g.context,(b&&i!==b||d&&j!==d)&&this.on(e,i,j),g=g.next;e=a.shift()}else e=a.shift();return this}},trigger:function(a){var b,e,f,g,h,i,j;if(!(f=this._callbacks))return this;for(i=f.all,a=a.split(c),j=d.call(arguments,1),b=a.shift();b;){if(e=f[b])for(g=e.tail;(e=e.next)!==g;)e.callback.apply(e.context||this,j);if(e=i)for(g=e.tail,h=[b].concat(j);(e=e.next)!==g;)e.callback.apply(e.context||this,h);b=a.shift()}return this}},b.Events.bind=b.Events.on,b.Events.unbind=b.Events.off}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.GeoPoint=function(a,d){c.isArray(a)?(b.GeoPoint._validate(a[0],a[1]),this.latitude=a[0],this.longitude=a[1]):c.isObject(a)?(b.GeoPoint._validate(a.latitude,a.longitude),this.latitude=a.latitude,this.longitude=a.longitude):c.isNumber(a)&&c.isNumber(d)?(b.GeoPoint._validate(a,d),this.latitude=a,this.longitude=d):(this.latitude=0,this.longitude=0);var e=this;this.__defineGetter__&&this.__defineSetter__&&(this._latitude=this.latitude,this._longitude=this.longitude,this.__defineGetter__("latitude",function(){return e._latitude}),this.__defineGetter__("longitude",function(){return e._longitude}),this.__defineSetter__("latitude",function(a){b.GeoPoint._validate(a,e.longitude),e._latitude=a}),this.__defineSetter__("longitude",function(a){b.GeoPoint._validate(e.latitude,a),e._longitude=a}))},b.GeoPoint._validate=function(a,b){if(-90>a)throw"Parse.GeoPoint latitude "+a+" < -90.0.";if(a>90)throw"Parse.GeoPoint latitude "+a+" > 90.0.";if(-180>b)throw"Parse.GeoPoint longitude "+b+" < -180.0.";if(b>180)throw"Parse.GeoPoint longitude "+b+" > 180.0."},b.GeoPoint.current=function(a){var c=new b.Promise;return navigator.geolocation.getCurrentPosition(function(a){c.resolve(new b.GeoPoint({latitude:a.coords.latitude,longitude:a.coords.longitude}))},function(a){c.reject(a)}),c._thenRunCallbacks(a)},b.GeoPoint.prototype={toJSON:function(){return b.GeoPoint._validate(this.latitude,this.longitude),{__type:"GeoPoint",latitude:this.latitude,longitude:this.longitude}},radiansTo:function(a){var b=Math.PI/180,c=this.latitude*b,d=this.longitude*b,e=a.latitude*b,f=a.longitude*b,g=c-e,h=d-f,i=Math.sin(g/2),j=Math.sin(h/2),k=i*i+Math.cos(c)*Math.cos(e)*j*j;return k=Math.min(1,k),2*Math.asin(Math.sqrt(k))},kilometersTo:function(a){return 6371*this.radiansTo(a)},milesTo:function(a){return 3958.8*this.radiansTo(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d="*";b.ACL=function(a){var d=this;if(d.permissionsById={},c.isObject(a))if(a instanceof b.User)d.setReadAccess(a,!0),d.setWriteAccess(a,!0);else{if(c.isFunction(a))throw"Parse.ACL() called with a function.  Did you forget ()?";b._objectEach(a,function(a,e){if(!c.isString(e))throw"Tried to create an ACL with an invalid userId.";d.permissionsById[e]={},b._objectEach(a,function(a,b){if("read"!==b&&"write"!==b)throw"Tried to create an ACL with an invalid permission type.";if(!c.isBoolean(a))throw"Tried to create an ACL with an invalid permission value.";d.permissionsById[e][b]=a})})}},b.ACL.prototype.toJSON=function(){return c.clone(this.permissionsById)},b.ACL.prototype._setAccess=function(a,d,e){if(d instanceof b.User?d=d.id:d instanceof b.Role&&(d="role:"+d.getName()),!c.isString(d))throw"userId must be a string.";if(!c.isBoolean(e))throw"allowed must be either true or false.";var f=this.permissionsById[d];if(!f){if(!e)return;f={},this.permissionsById[d]=f}e?this.permissionsById[d][a]=!0:(delete f[a],c.isEmpty(f)&&delete f[d])},b.ACL.prototype._getAccess=function(a,c){c instanceof b.User?c=c.id:c instanceof b.Role&&(c="role:"+c.getName());var d=this.permissionsById[c];return d&&d[a]?!0:!1},b.ACL.prototype.setReadAccess=function(a,b){this._setAccess("read",a,b)},b.ACL.prototype.getReadAccess=function(a){return this._getAccess("read",a)},b.ACL.prototype.setWriteAccess=function(a,b){this._setAccess("write",a,b)},b.ACL.prototype.getWriteAccess=function(a){return this._getAccess("write",a)},b.ACL.prototype.setPublicReadAccess=function(a){this.setReadAccess(d,a)},b.ACL.prototype.getPublicReadAccess=function(){return this.getReadAccess(d)},b.ACL.prototype.setPublicWriteAccess=function(a){this.setWriteAccess(d,a)},b.ACL.prototype.getPublicWriteAccess=function(){return this.getWriteAccess(d)},b.ACL.prototype.getRoleReadAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getReadAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.getRoleWriteAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getWriteAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleReadAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setReadAccess("role:"+a,d);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleWriteAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setWriteAccess("role:"+a,d);throw"role must be a Parse.Role or a String"}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Op=function(){this._initialize.apply(this,arguments)},b.Op.prototype={_initialize:function(){}},c.extend(b.Op,{_extend:b._extend,_opDecoderMap:{},_registerDecoder:function(a,c){b.Op._opDecoderMap[a]=c},_decode:function(a){var c=b.Op._opDecoderMap[a.__op];return c?c(a):void 0}}),b.Op._registerDecoder("Batch",function(a){var c=null;return b._arrayEach(a.ops,function(a){a=b.Op._decode(a),c=a._mergeWithPrevious(c)}),c}),b.Op.Set=b.Op._extend({_initialize:function(a){this._value=a},value:function(){return this._value},toJSON:function(){return b._encode(this.value())},_mergeWithPrevious:function(){return this},_estimate:function(){return this.value()}}),b.Op._UNSET={},b.Op.Unset=b.Op._extend({toJSON:function(){return{__op:"Delete"}},_mergeWithPrevious:function(){return this},_estimate:function(){return b.Op._UNSET}}),b.Op._registerDecoder("Delete",function(){return new b.Op.Unset}),b.Op.Increment=b.Op._extend({_initialize:function(a){this._amount=a},amount:function(){return this._amount},toJSON:function(){return{__op:"Increment",amount:this._amount}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.amount());if(a instanceof b.Op.Set)return new b.Op.Set(a.value()+this.amount());if(a instanceof b.Op.Increment)return new b.Op.Increment(this.amount()+a.amount());throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a+this.amount():this.amount()}}),b.Op._registerDecoder("Increment",function(a){return new b.Op.Increment(a.amount)}),b.Op.Add=b.Op._extend({_initialize:function(a){this._objects=a},objects:function(){return this._objects},toJSON:function(){return{__op:"Add",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Add)return new b.Op.Add(a.objects().concat(this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a.concat(this.objects()):c.clone(this.objects())}}),b.Op._registerDecoder("Add",function(a){return new b.Op.Add(b._decode(void 0,a.objects))}),b.Op.AddUnique=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"AddUnique",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.AddUnique)return new b.Op.AddUnique(this._estimate(a.objects()));
throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.clone(a);return b._arrayEach(this.objects(),function(a){if(a instanceof b.Object&&a.id){var e=c.find(d,function(c){return c instanceof b.Object&&c.id===a.id});if(e){var f=c.indexOf(d,e);d[f]=a}else d.push(a)}else c.contains(d,a)||d.push(a)}),d}return c.clone(this.objects())}}),b.Op._registerDecoder("AddUnique",function(a){return new b.Op.AddUnique(b._decode(void 0,a.objects))}),b.Op.Remove=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"Remove",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return a;if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Remove)return new b.Op.Remove(c.union(a.objects(),this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.difference(a,this.objects());return b._arrayEach(this.objects(),function(a){a instanceof b.Object&&a.id&&(d=c.reject(d,function(c){return c instanceof b.Object&&c.id===a.id}))}),d}return[]}}),b.Op._registerDecoder("Remove",function(a){return new b.Op.Remove(b._decode(void 0,a.objects))}),b.Op.Relation=b.Op._extend({_initialize:function(a,d){this._targetClassName=null;var e=this,f=function(a){if(a instanceof b.Object){if(!a.id)throw"You can't add an unsaved Parse.Object to a relation.";if(e._targetClassName||(e._targetClassName=a.className),e._targetClassName!==a.className)throw"Tried to create a Parse.Relation with 2 different types: "+e._targetClassName+" and "+a.className+".";return a.id}return a};this.relationsToAdd=c.uniq(c.map(a,f)),this.relationsToRemove=c.uniq(c.map(d,f))},added:function(){var a=this;return c.map(this.relationsToAdd,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},removed:function(){var a=this;return c.map(this.relationsToRemove,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},toJSON:function(){var a=null,b=null,d=this,e=function(a){return{__type:"Pointer",className:d._targetClassName,objectId:a}},f=null;return this.relationsToAdd.length>0&&(f=c.map(this.relationsToAdd,e),a={__op:"AddRelation",objects:f}),this.relationsToRemove.length>0&&(f=c.map(this.relationsToRemove,e),b={__op:"RemoveRelation",objects:f}),a&&b?{__op:"Batch",ops:[a,b]}:a||b||{}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)throw"You can't modify a relation after deleting it.";if(a instanceof b.Op.Relation){if(a._targetClassName&&a._targetClassName!==this._targetClassName)throw"Related object must be of class "+a._targetClassName+", but "+this._targetClassName+" was passed in.";var d=c.union(c.difference(a.relationsToAdd,this.relationsToRemove),this.relationsToAdd),e=c.union(c.difference(a.relationsToRemove,this.relationsToAdd),this.relationsToRemove),f=new b.Op.Relation(d,e);return f._targetClassName=this._targetClassName,f}throw"Op is invalid after previous op."}return this},_estimate:function(a,c,d){if(a){if(a instanceof b.Relation){if(this._targetClassName)if(a.targetClassName){if(a.targetClassName!==this._targetClassName)throw"Related object must be a "+a.targetClassName+", but a "+this._targetClassName+" was passed in."}else a.targetClassName=this._targetClassName;return a}throw"Op is invalid after previous op."}var e=new b.Relation(c,d);e.targetClassName=this._targetClassName}}),b.Op._registerDecoder("AddRelation",function(a){return new b.Op.Relation(b._decode(void 0,a.objects),[])}),b.Op._registerDecoder("RemoveRelation",function(a){return new b.Op.Relation([],b._decode(void 0,a.objects))})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Relation=function(a,b){this.parent=a,this.key=b,this.targetClassName=null},b.Relation.prototype={_ensureParentAndKey:function(a,b){if(this.parent=this.parent||a,this.key=this.key||b,this.parent!==a)throw"Internal Error. Relation retrieved from two different Objects.";if(this.key!==b)throw"Internal Error. Relation retrieved from two different keys."},add:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation(a,[]);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},remove:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation([],a);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},toJSON:function(){return{__type:"Relation",className:this.targetClassName}},query:function(){var a,c;return this.targetClassName?(a=b.Object._getSubclass(this.targetClassName),c=new b.Query(a)):(a=b.Object._getSubclass(this.parent.className),c=new b.Query(a),c._extraOptions.redirectClassNameForKey=this.key),c._addCondition("$relatedTo","object",this.parent._toPointer()),c._addCondition("$relatedTo","key",this.key),c}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Promise=function(){this._resolved=!1,this._rejected=!1,this._resolvedCallbacks=[],this._rejectedCallbacks=[]},c.extend(b.Promise,{_isPromisesAPlusCompliant:!1,is:function(a){return a&&a.then&&c.isFunction(a.then)},as:function(){var a=new b.Promise;return a.resolve.apply(a,arguments),a},error:function(){var a=new b.Promise;return a.reject.apply(a,arguments),a},when:function(a){var c;c=a&&b._isNullOrUndefined(a.length)?arguments:a;var d=c.length,e=!1,f=[],g=[];if(f.length=c.length,g.length=c.length,0===d)return b.Promise.as.apply(this,f);var h=new b.Promise,i=function(){d-=1,0===d&&(e?h.reject(g):h.resolve.apply(h,f))};return b._arrayEach(c,function(a,c){b.Promise.is(a)?a.then(function(a){f[c]=a,i()},function(a){g[c]=a,e=!0,i()}):(f[c]=a,i())}),h},_continueWhile:function(a,c){return a()?c().then(function(){return b.Promise._continueWhile(a,c)}):b.Promise.as()}}),c.extend(b.Promise.prototype,{resolve:function(){if(this._resolved||this._rejected)throw"A promise was resolved even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._resolved=!0,this._result=arguments;var a=arguments;b._arrayEach(this._resolvedCallbacks,function(b){b.apply(this,a)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},reject:function(a){if(this._resolved||this._rejected)throw"A promise was rejected even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._rejected=!0,this._error=a,b._arrayEach(this._rejectedCallbacks,function(b){b(a)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},then:function(a,c){var d=new b.Promise,e=function(){var c=arguments;if(a)if(b.Promise._isPromisesAPlusCompliant)try{c=[a.apply(this,c)]}catch(e){c=[b.Promise.error(e)]}else c=[a.apply(this,c)];1===c.length&&b.Promise.is(c[0])?c[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):d.resolve.apply(d,c)},f=function(a){var e=[];if(c){if(b.Promise._isPromisesAPlusCompliant)try{e=[c(a)]}catch(f){e=[b.Promise.error(f)]}else e=[c(a)];1===e.length&&b.Promise.is(e[0])?e[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):b.Promise._isPromisesAPlusCompliant?d.resolve.apply(d,e):d.reject(e[0])}else d.reject(a)},g=function(a){a.call()};b.Promise._isPromisesAPlusCompliant&&("undefined"!=typeof window&&window.setTimeout?g=function(a){window.setTimeout(a,0)}:"undefined"!=typeof process&&process.nextTick&&(g=function(a){process.nextTick(a)}));var h=this;return this._resolved?g(function(){e.apply(h,h._result)}):this._rejected?g(function(){f(h._error)}):(this._resolvedCallbacks.push(e),this._rejectedCallbacks.push(f)),d},always:function(a){return this.then(a,a)},done:function(a){return this.then(a)},fail:function(a){return this.then(null,a)},_thenRunCallbacks:function(a,d){var e;if(c.isFunction(a)){var f=a;e={success:function(a){f(a,null)},error:function(a){f(null,a)}}}else e=c.clone(a);return e=e||{},this.then(function(a){return e.success?e.success.apply(this,arguments):d&&d.trigger("sync",d,a,e),b.Promise.as.apply(b.Promise,arguments)},function(a){return e.error?c.isUndefined(d)?e.error(a):e.error(d,a):d&&d.trigger("error",d,a,e),b.Promise.error(a)})},_continueWith:function(a){return this.then(function(){return a(arguments,null)},function(b){return a(null,b)})}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d=function(a){if(26>a)return String.fromCharCode(65+a);if(52>a)return String.fromCharCode(97+(a-26));if(62>a)return String.fromCharCode(48+(a-52));if(62===a)return"+";if(63===a)return"/";throw"Tried to encode large digit "+a+" in base64."},e=function(a){var b=[];return b.length=Math.ceil(a.length/3),c.times(b.length,function(c){var e=a[3*c],f=a[3*c+1]||0,g=a[3*c+2]||0,h=3*c+1<a.length,i=3*c+2<a.length;b[c]=[d(e>>2&63),d(e<<4&48|f>>4&15),h?d(f<<2&60|g>>6&3):"=",i?d(63&g):"="].join("")}),b.join("")},f={ai:"application/postscript",aif:"audio/x-aiff",aifc:"audio/x-aiff",aiff:"audio/x-aiff",asc:"text/plain",atom:"application/atom+xml",au:"audio/basic",avi:"video/x-msvideo",bcpio:"application/x-bcpio",bin:"application/octet-stream",bmp:"image/bmp",cdf:"application/x-netcdf",cgm:"image/cgm","class":"application/octet-stream",cpio:"application/x-cpio",cpt:"application/mac-compactpro",csh:"application/x-csh",css:"text/css",dcr:"application/x-director",dif:"video/x-dv",dir:"application/x-director",djv:"image/vnd.djvu",djvu:"image/vnd.djvu",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",docm:"application/vnd.ms-word.document.macroEnabled.12",dotm:"application/vnd.ms-word.template.macroEnabled.12",dtd:"application/xml-dtd",dv:"video/x-dv",dvi:"application/x-dvi",dxr:"application/x-director",eps:"application/postscript",etx:"text/x-setext",exe:"application/octet-stream",ez:"application/andrew-inset",gif:"image/gif",gram:"application/srgs",grxml:"application/srgs+xml",gtar:"application/x-gtar",hdf:"application/x-hdf",hqx:"application/mac-binhex40",htm:"text/html",html:"text/html",ice:"x-conference/x-cooltalk",ico:"image/x-icon",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",jnlp:"application/x-java-jnlp-file",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/x-javascript",kar:"audio/midi",latex:"application/x-latex",lha:"application/octet-stream",lzh:"application/octet-stream",m3u:"audio/x-mpegurl",m4a:"audio/mp4a-latm",m4b:"audio/mp4a-latm",m4p:"audio/mp4a-latm",m4u:"video/vnd.mpegurl",m4v:"video/x-m4v",mac:"image/x-macpaint",man:"application/x-troff-man",mathml:"application/mathml+xml",me:"application/x-troff-me",mesh:"model/mesh",mid:"audio/midi",midi:"audio/midi",mif:"application/vnd.mif",mov:"video/quicktime",movie:"video/x-sgi-movie",mp2:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpga:"audio/mpeg",ms:"application/x-troff-ms",msh:"model/mesh",mxu:"video/vnd.mpegurl",nc:"application/x-netcdf",oda:"application/oda",ogg:"application/ogg",pbm:"image/x-portable-bitmap",pct:"image/pict",pdb:"chemical/x-pdb",pdf:"application/pdf",pgm:"image/x-portable-graymap",pgn:"application/x-chess-pgn",pic:"image/pict",pict:"image/pict",png:"image/png",pnm:"image/x-portable-anymap",pnt:"image/x-macpaint",pntg:"image/x-macpaint",ppm:"image/x-portable-pixmap",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",potx:"application/vnd.openxmlformats-officedocument.presentationml.template",ppsx:"application/vnd.openxmlformats-officedocument.presentationml.slideshow",ppam:"application/vnd.ms-powerpoint.addin.macroEnabled.12",pptm:"application/vnd.ms-powerpoint.presentation.macroEnabled.12",potm:"application/vnd.ms-powerpoint.template.macroEnabled.12",ppsm:"application/vnd.ms-powerpoint.slideshow.macroEnabled.12",ps:"application/postscript",qt:"video/quicktime",qti:"image/x-quicktime",qtif:"image/x-quicktime",ra:"audio/x-pn-realaudio",ram:"audio/x-pn-realaudio",ras:"image/x-cmu-raster",rdf:"application/rdf+xml",rgb:"image/x-rgb",rm:"application/vnd.rn-realmedia",roff:"application/x-troff",rtf:"text/rtf",rtx:"text/richtext",sgm:"text/sgml",sgml:"text/sgml",sh:"application/x-sh",shar:"application/x-shar",silo:"model/mesh",sit:"application/x-stuffit",skd:"application/x-koan",skm:"application/x-koan",skp:"application/x-koan",skt:"application/x-koan",smi:"application/smil",smil:"application/smil",snd:"audio/basic",so:"application/octet-stream",spl:"application/x-futuresplash",src:"application/x-wais-source",sv4cpio:"application/x-sv4cpio",sv4crc:"application/x-sv4crc",svg:"image/svg+xml",swf:"application/x-shockwave-flash",t:"application/x-troff",tar:"application/x-tar",tcl:"application/x-tcl",tex:"application/x-tex",texi:"application/x-texinfo",texinfo:"application/x-texinfo",tif:"image/tiff",tiff:"image/tiff",tr:"application/x-troff",tsv:"text/tab-separated-values",txt:"text/plain",ustar:"application/x-ustar",vcd:"application/x-cdlink",vrml:"model/vrml",vxml:"application/voicexml+xml",wav:"audio/x-wav",wbmp:"image/vnd.wap.wbmp",wbmxl:"application/vnd.wap.wbxml",wml:"text/vnd.wap.wml",wmlc:"application/vnd.wap.wmlc",wmls:"text/vnd.wap.wmlscript",wmlsc:"application/vnd.wap.wmlscriptc",wrl:"model/vrml",xbm:"image/x-xbitmap",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xls:"application/vnd.ms-excel",xml:"application/xml",xpm:"image/x-xpixmap",xsl:"application/xml",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.12",xltm:"application/vnd.ms-excel.template.macroEnabled.12",xlam:"application/vnd.ms-excel.addin.macroEnabled.12",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.12",xslt:"application/xslt+xml",xul:"application/vnd.mozilla.xul+xml",xwd:"image/x-xwindowdump",xyz:"chemical/x-xyz",zip:"application/zip"},g=function(a,c){var d=new b.Promise;if("undefined"==typeof FileReader)return b.Promise.error(new b.Error(b.Error.FILE_READ_ERROR,"Attempted to use a FileReader on an unsupported browser."));var e=new FileReader;return e.onloadend=function(){if(2!==e.readyState)return void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Error reading file."));var a=e.result,f=/^data:([^;]*);base64,(.*)$/.exec(a);return f?void d.resolve(f[2],c||f[1]):void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Unable to interpret data URL: "+a))},e.readAsDataURL(a),d};b.File=function(a,d,h){this._name=a;var i=/\.([^.]*)$/.exec(a);i&&(i=i[1].toLowerCase());var j=h||f[i]||"text/plain";if(c.isArray(d))this._source=b.Promise.as(e(d),j);else if(d&&d.base64){var k=/^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/,l=k.exec(d.base64);this._source=l&&l.length>0?b.Promise.as(4===l.length?l[3]:l[2],l[1]):b.Promise.as(d.base64,j)}else if("undefined"!=typeof File&&d instanceof File)this._source=g(d,h);else if(c.isString(d))throw"Creating a Parse.File from a String is not yet supported."},b.File.prototype={name:function(){return this._name},url:function(){return this._url},save:function(a){a=a||{};var c=this;return c._previousSave||(c._previousSave=c._source.then(function(d,e){var f={base64:d,_ContentType:e};return b._request({route:"files",className:c._name,method:"POST",data:f,useMasterKey:a.useMasterKey})}).then(function(a){return c._name=a.name,c._url=a.url,c})),c._previousSave._thenRunCallbacks(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Object=function(a,d){if(c.isString(a))return b.Object._create.apply(this,arguments);a=a||{},d&&d.parse&&(a=this.parse(a));var e=b._getValue(this,"defaults");if(e&&(a=c.extend({},e,a)),d&&d.collection&&(this.collection=d.collection),this._serverData={},this._opSetQueue=[{}],this.attributes={},this._hashedJSON={},this._escapedAttributes={},this.cid=c.uniqueId("c"),this.changed={},this._silent={},this._pending={},!this.set(a,{silent:!0}))throw new Error("Can't create an invalid Parse.Object");this.changed={},this._silent={},this._pending={},this._hasData=!0,this._previousAttributes=c.clone(this.attributes),this.initialize.apply(this,arguments)},b.Object.saveAll=function(a,c){return c=c||{},b.Object._deepSaveAsync(a,{useMasterKey:c.useMasterKey})._thenRunCallbacks(c)},b.Object.destroyAll=function(a,d){d=d||{};var e=function(a){a.trigger("destroy",a,a.collection,d)},f=[],g=function(a){var g=b.Promise.as();return a.length>0&&(g=g.then(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,data:{requests:c.map(a,function(a){return{method:"DELETE",path:"/1/classes/"+a.className+"/"+a.id}})}})}).then(function(c){b._arrayEach(a,function(a,g){if(c[g].success&&d.wait)e(a);else if(c[g].error){var h=new b.Error(c[g].error.code,c[g].error.error);h.object=a,f.push(h)}})})),g},h=b.Promise.as(),i=[];return b._arrayEach(a,function(b,c){if(b.id&&d.wait||e(b),b.id&&i.push(b),20===i.length||c+1===a.length){var f=i;i=[],h=h.then(function(){return g(f)})}}),h.then(function(){if(0===f.length)return!0;var a=new b.Error(b.Error.AGGREGATE_ERROR,"Error deleting an object in destroyAll");return a.errors=f,b.Promise.error(a)})._thenRunCallbacks(d)},b.Object.fetchAll=function(a,c){return b.Object._fetchAll(a,!0)._thenRunCallbacks(c)},b.Object.fetchAllIfNeeded=function(a,c){return b.Object._fetchAll(a,!1)._thenRunCallbacks(c)},c.extend(b.Object.prototype,b.Events,{_existed:!1,initialize:function(){},toJSON:function(){var a=this._toFullJSON();return b._arrayEach(["__type","className"],function(b){delete a[b]}),a},_toFullJSON:function(a){var d=c.clone(this.attributes);return b._objectEach(d,function(c,e){d[e]=b._encode(c,a)}),b._objectEach(this._operations,function(a,b){d[b]=a}),c.has(this,"id")&&(d.objectId=this.id),c.has(this,"createdAt")&&(d.createdAt=c.isDate(this.createdAt)?this.createdAt.toJSON():this.createdAt),c.has(this,"updatedAt")&&(d.updatedAt=c.isDate(this.updatedAt)?this.updatedAt.toJSON():this.updatedAt),d.__type="Object",d.className=this.className,d},_refreshCache:function(){var a=this;a._refreshingCache||(a._refreshingCache=!0,b._objectEach(this.attributes,function(d,e){d instanceof b.Object?d._refreshCache():c.isObject(d)&&a._resetCacheForKey(e)&&a.set(e,new b.Op.Set(d),{silent:!0})}),delete a._refreshingCache)},dirty:function(a){this._refreshCache();var b=c.last(this._opSetQueue);return a?b[a]?!0:!1:this.id?c.keys(b).length>0?!0:!1:!0},dirtyKeys:function(){return c.keys(c.last(this._opSetQueue))},_toPointer:function(){if(!this.id)throw new Error("Can't serialize an unsaved Parse.Object");return{__type:"Pointer",className:this.className,objectId:this.id}},get:function(a){return this.attributes[a]},relation:function(a){var c=this.get(a);if(c){if(!(c instanceof b.Relation))throw"Called relation() on non-relation field "+a;return c._ensureParentAndKey(this,a),c}return new b.Relation(this,a)},escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},has:function(a){return!b._isNullOrUndefined(this.attributes[a])},_mergeMagicFields:function(a){var d=this,e=["id","objectId","createdAt","updatedAt"];b._arrayEach(e,function(e){a[e]&&("objectId"===e?d.id=a[e]:d[e]="createdAt"!==e&&"updatedAt"!==e||c.isDate(a[e])?a[e]:b._parseDate(a[e]),delete a[e])})},_copyServerData:function(a){var c={};b._objectEach(a,function(a,d){c[d]=b._decode(d,a)}),this._serverData=c,this._rebuildAllEstimatedData(),this._refreshCache(),this._opSetQueue=[{}],this._rebuildAllEstimatedData()},_mergeFromObject:function(a){a&&(this.id=a.id,this.createdAt=a.createdAt,this.updatedAt=a.updatedAt,this._copyServerData(a._serverData),this._hasData=!0)},_startSave:function(){this._opSetQueue.push({})},_cancelSave:function(){var a=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue);var d=c.first(this._opSetQueue);b._objectEach(a,function(b,c){var e=a[c],f=d[c];e&&f?d[c]=f._mergeWithPrevious(e):e&&(d[c]=e)}),this._saving=this._saving-1},_finishSave:function(a){var d={};b._traverse(this.attributes,function(a){a instanceof b.Object&&a.id&&a._hasData&&(d[a.id]=a)});var e=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue),this._applyOpSet(e,this._serverData),this._mergeMagicFields(a);var f=this;b._objectEach(a,function(a,c){f._serverData[c]=b._decode(c,a);var e=b._traverse(f._serverData[c],function(a){return a instanceof b.Object&&d[a.id]?d[a.id]:void 0});e&&(f._serverData[c]=e)}),this._rebuildAllEstimatedData(),this._saving=this._saving-1},_finishFetch:function(a,b){this._opSetQueue=[{}],this._mergeMagicFields(a),this._copyServerData(a),this._hasData=b},_applyOpSet:function(a,c){var d=this;b._objectEach(a,function(a,e){c[e]=a._estimate(c[e],d,e),c[e]===b.Op._UNSET&&delete c[e]})},_resetCacheForKey:function(a){var d=this.attributes[a];if(!(!c.isObject(d)||d instanceof b.Object||d instanceof b.File)){d=d.toJSON?d.toJSON():d;var e=JSON.stringify(d);if(this._hashedJSON[a]!==e){var f=!!this._hashedJSON[a];return this._hashedJSON[a]=e,f}}return!1},_rebuildEstimatedDataForKey:function(a){var c=this;delete this.attributes[a],this._serverData[a]&&(this.attributes[a]=this._serverData[a]),b._arrayEach(this._opSetQueue,function(d){var e=d[a];e&&(c.attributes[a]=e._estimate(c.attributes[a],c,a),c.attributes[a]===b.Op._UNSET?delete c.attributes[a]:c._resetCacheForKey(a))})},_rebuildAllEstimatedData:function(){var a=this,d=c.clone(this.attributes);this.attributes=c.clone(this._serverData),b._arrayEach(this._opSetQueue,function(c){a._applyOpSet(c,a.attributes),b._objectEach(c,function(b,c){a._resetCacheForKey(c)})}),b._objectEach(d,function(b,c){a.attributes[c]!==b&&a.trigger("change:"+c,a,a.attributes[c],{})}),b._objectEach(this.attributes,function(b,e){c.has(d,e)||a.trigger("change:"+e,a,b,{})})},set:function(a,d,e){var f;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,b._objectEach(f,function(a,c){f[c]=b._decode(c,a)}),e=d):(f={},f[a]=b._decode(a,d)),e=e||{},!f)return this;f instanceof b.Object&&(f=f.attributes),e.unset&&b._objectEach(f,function(a,c){f[c]=new b.Op.Unset});var g=c.clone(f),h=this;if(b._objectEach(g,function(a,c){a instanceof b.Op&&(g[c]=a._estimate(h.attributes[c],h,c),g[c]===b.Op._UNSET&&delete g[c])}),!this._validate(f,e))return!1;this._mergeMagicFields(f),e.changes={};{var i=this._escapedAttributes;this._previousAttributes||{}}return b._arrayEach(c.keys(f),function(a){var d=f[a];d instanceof b.Relation&&(d.parent=h),d instanceof b.Op||(d=new b.Op.Set(d));var g=!0;d instanceof b.Op.Set&&c.isEqual(h.attributes[a],d.value)&&(g=!1),g&&(delete i[a],e.silent?h._silent[a]=!0:e.changes[a]=!0);var j=c.last(h._opSetQueue);j[a]=d._mergeWithPrevious(j[a]),h._rebuildEstimatedDataForKey(a),g?(h.changed[a]=h.attributes[a],e.silent||(h._pending[a]=!0)):(delete h.changed[a],delete h._pending[a])}),e.silent||this.change(e),this},unset:function(a,b){return b=b||{},b.unset=!0,this.set(a,null,b)},increment:function(a,d){return(c.isUndefined(d)||c.isNull(d))&&(d=1),this.set(a,new b.Op.Increment(d))},add:function(a,c){return this.set(a,new b.Op.Add([c]))},addUnique:function(a,c){return this.set(a,new b.Op.AddUnique([c]))},remove:function(a,c){return this.set(a,new b.Op.Remove([c]))},op:function(a){return c.last(this._opSetQueue)[a]},clear:function(a){a=a||{},a.unset=!0;var b=c.extend(this.attributes,this._operations);return this.set(b,a)},_getSaveJSON:function(){var a=c.clone(c.first(this._opSetQueue));return b._objectEach(a,function(b,c){a[c]=b.toJSON()}),a},_canBeSerialized:function(){return b.Object._canBeSerializedAsValue(this.attributes)},fetch:function(a){var c=this;a=a||{};var d=b._request({method:"GET",route:"classes",className:this.className,objectId:this.id,useMasterKey:a.useMasterKey});return d.then(function(a,b,d){return c._finishFetch(c.parse(a,b,d),!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g,h;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,h=d):(f={},f[a]=d,h=e),!h&&f){var i=c.reject(f,function(a,b){return c.include(["success","error","wait"],b)});if(0===i.length){var j=!0;if(c.has(f,"success")&&!c.isFunction(f.success)&&(j=!1),c.has(f,"error")&&!c.isFunction(f.error)&&(j=!1),j)return this.save(null,f)}}h=c.clone(h)||{},h.wait&&(g=c.clone(this.attributes));var k=c.clone(h)||{};k.wait&&(k.silent=!0);var l;if(k.error=function(a,b){l=b},f&&!this.set(f,k))return b.Promise.error(l)._thenRunCallbacks(h,this);var m=this;m._refreshCache();var n=[],o=[];return b.Object._findUnsavedChildren(m.attributes,n,o),n.length+o.length>0?b.Object._deepSaveAsync(this.attributes,{useMasterKey:h.useMasterKey}).then(function(){return m.save(null,h)},function(a){return b.Promise.error(a)._thenRunCallbacks(h,m)}):(this._startSave(),this._saving=(this._saving||0)+1,this._allPreviousSaves=this._allPreviousSaves||b.Promise.as(),this._allPreviousSaves=this._allPreviousSaves._continueWith(function(){var a=m.id?"PUT":"POST",d=m._getSaveJSON(),e="classes",i=m.className;"_User"!==m.className||m.id||(e="users",i=null);var j=b._request({route:e,className:i,objectId:m.id,method:a,useMasterKey:h.useMasterKey,data:d});return j=j.then(function(a,b,d){var e=m.parse(a,b,d);return h.wait&&(e=c.extend(f||{},e)),m._finishSave(e),h.wait&&m.set(g,k),m},function(a){return m._cancelSave(),b.Promise.error(a)})._thenRunCallbacks(h,m)}),this._allPreviousSaves)},destroy:function(a){a=a||{};var c=this,d=function(){c.trigger("destroy",c,c.collection,a)};if(!this.id)return d();a.wait||d();var e=b._request({route:"classes",className:this.className,objectId:this.id,method:"DELETE",useMasterKey:a.useMasterKey});return e.then(function(){return a.wait&&d(),c})._thenRunCallbacks(a,this)},parse:function(a,d){var e=c.clone(a);return c(["createdAt","updatedAt"]).each(function(a){e[a]&&(e[a]=b._parseDate(e[a]))}),e.updatedAt||(e.updatedAt=e.createdAt),d&&(this._existed=201!==d),e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.id},change:function(a){a=a||{};var d=this._changing;this._changing=!0;var e=this;b._objectEach(this._silent,function(a){e._pending[a]=!0});var f=c.extend({},a.changes,this._silent);if(this._silent={},b._objectEach(f,function(b,c){e.trigger("change:"+c,e,e.get(c),a)}),d)return this;for(var g=function(a,b){e._pending[b]||e._silent[b]||delete e.changed[b]};!c.isEmpty(this._pending);)this._pending={},this.trigger("change",this,a),b._objectEach(this.changed,g),e._previousAttributes=c.clone(this.attributes);return this._changing=!1,this},existed:function(){return this._existed},hasChanged:function(a){return arguments.length?this.changed&&c.has(this.changed,a):!c.isEmpty(this.changed)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var d={},e=this._previousAttributes;return b._objectEach(a,function(a,b){c.isEqual(e[b],a)||(d[b]=a)}),d},previous:function(a){return arguments.length&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},validate:function(a){if(c.has(a,"ACL")&&!(a.ACL instanceof b.ACL))return new b.Error(b.Error.OTHER_CAUSE,"ACL must be a Parse.ACL.");var d=!0;return b._objectEach(a,function(a,b){/^[A-Za-z][0-9A-Za-z_]*$/.test(b)||(d=!1)}),d?!1:new b.Error(b.Error.INVALID_KEY_NAME)},_validate:function(a,b){if(b.silent||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validate(a,b);return d?(b&&b.error?b.error(this,d,b):this.trigger("error",this,d,b),!1):!0},getACL:function(){return this.get("ACL")},setACL:function(a,b){return this.set("ACL",a,b)}}),b.Object._getSubclass=function(a){if(!c.isString(a))throw"Parse.Object._getSubclass requires a string argument.";var d=b.Object._classMap[a];return d||(d=b.Object.extend(a),b.Object._classMap[a]=d),d},b.Object._create=function(a,c,d){var e=b.Object._getSubclass(a);return new e(c,d)},b.Object._toObjectIdArray=function(a,c){if(0===a.length)return b.Promise.as(a);for(var d,e=a[0].className,f=[],g=0;g<a.length;g++){var h=a[g];if(e!==h.className)return d=new b.Error(b.Error.INVALID_CLASS_NAME,"All objects should be of the same class"),b.Promise.error(d);if(!h.id)return d=new b.Error(b.Error.MISSING_OBJECT_ID,"All objects must have an ID"),b.Promise.error(d);c&&h._hasData||f.push(h.id)}return b.Promise.as(f)},b.Object._updateWithFetchedResults=function(a,c,d){var e={};b._arrayEach(c,function(a){e[a.id]=a});for(var f=0;f<a.length;f++){var g=a[f],h=e[g.id];if(!h&&d){var i=new b.Error(b.Error.OBJECT_NOT_FOUND,"All objects must exist on the server");return b.Promise.error(i)}g._mergeFromObject(h)}return b.Promise.as(a)},b.Object._fetchAll=function(a,c){if(0===a.length)return b.Promise.as(a);var d=!c;return b.Object._toObjectIdArray(a,d).then(function(c){var d=a[0].className,e=new b.Query(d);return e.containedIn("objectId",c),e.limit=c.length,e.find()}).then(function(d){return b.Object._updateWithFetchedResults(a,d,c)})},b.Object._classMap={},b.Object._extend=b._extend,b.Object.extend=function(a,d,e){if(!c.isString(a)){if(a&&c.has(a,"className"))return b.Object.extend(a.className,a,d);throw new Error("Parse.Object.extend's first argument should be the className.")}"User"===a&&b.User._performUserRewrite&&(a="_User"),d=d||{},d.className=a;var f=null;if(c.has(b.Object._classMap,a)){var g=b.Object._classMap[a];f=g._extend(d,e)}else f=this._extend(d,e);return f.extend=function(d){if(c.isString(d)||d&&c.has(d,"className"))return b.Object.extend.apply(f,arguments);var e=[a].concat(b._.toArray(arguments));return b.Object.extend.apply(f,e)},b.Object._classMap[a]=f,f},b.Object._findUnsavedChildren=function(a,c,d){b._traverse(a,function(a){return a instanceof b.Object?(a._refreshCache(),void(a.dirty()&&c.push(a))):a instanceof b.File?void(a.url()||d.push(a)):void 0})},b.Object._canBeSerializedAsValue=function(a){if(a instanceof b.Object)return!!a.id;if(a instanceof b.File)return!0;var d=!0;return c.isArray(a)?b._arrayEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}):c.isObject(a)&&b._objectEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}),d},b.Object._deepSaveAsync=function(a,d){var e=[],f=[];b.Object._findUnsavedChildren(a,e,f);var g=b.Promise.as();c.each(f,function(a){g=g.then(function(){return a.save(d)})});var h=c.uniq(e),i=c.uniq(h);return g.then(function(){return b.Promise._continueWhile(function(){return i.length>0},function(){var a=[],e=[];if(b._arrayEach(i,function(b){return a.length>20?void e.push(b):void(b._canBeSerialized()?a.push(b):e.push(b))}),i=e,0===a.length)return b.Promise.error(new b.Error(b.Error.OTHER_CAUSE,"Tried to save a batch with a cycle."));var f=b.Promise.when(c.map(a,function(a){return a._allPreviousSaves||b.Promise.as()})),g=new b.Promise;return b._arrayEach(a,function(a){a._allPreviousSaves=g}),f._continueWith(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,data:{requests:c.map(a,function(a){var b=a._getSaveJSON(),c="POST",d="/1/classes/"+a.className;return a.id&&(d=d+"/"+a.id,c="PUT"),a._startSave(),{method:c,path:d,body:b}})}}).then(function(c,d,e){var f;return b._arrayEach(a,function(a,b){c[b].success?a._finishSave(a.parse(c[b].success,d,e)):(f=f||c[b].error,a._cancelSave())}),f?b.Promise.error(new b.Error(f.code,f.error)):void 0}).then(function(a){return g.resolve(a),a},function(a){return g.reject(a),b.Promise.error(a)})})})}).then(function(){return a})}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Role=b.Object.extend("_Role",{constructor:function(a,d){c.isString(a)&&d instanceof b.ACL?(b.Object.prototype.constructor.call(this,null,null),this.setName(a),this.setACL(d)):b.Object.prototype.constructor.call(this,a,d)},getName:function(){return this.get("name")},setName:function(a,b){return this.set("name",a,b)},getUsers:function(){return this.relation("users")},getRoles:function(){return this.relation("roles")},validate:function(a,d){if("name"in a&&a.name!==this.getName()){var e=a.name;if(this.id&&this.id!==a.objectId)return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only be set before it has been saved.");
if(!c.isString(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name must be a String.");if(!/^[0-9a-zA-Z\-_ ]+$/.test(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _, -, and spaces.")}return b.Object.prototype.validate?b.Object.prototype.validate.call(this,a,d):!1}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Collection=function(a,b){b=b||{},b.comparator&&(this.comparator=b.comparator),b.model&&(this.model=b.model),b.query&&(this.query=b.query),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,{silent:!0,parse:b.parse})},c.extend(b.Collection.prototype,b.Events,{model:b.Object,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,d){var e,f,g,h,i,j,k={},l={};for(d=d||{},a=c.isArray(a)?a.slice():[a],e=0,g=a.length;g>e;e++){if(a[e]=this._prepareModel(a[e],d),h=a[e],!h)throw new Error("Can't add an invalid model to a collection");if(i=h.cid,k[i]||this._byCid[i])throw new Error("Duplicate cid: can't add the same model to a collection twice");if(j=h.id,!b._isNullOrUndefined(j)&&(l[j]||this._byId[j]))throw new Error("Duplicate id: can't add the same model to a collection twice");l[j]=h,k[i]=h}for(e=0;g>e;e++)(h=a[e]).on("all",this._onModelEvent,this),this._byCid[h.cid]=h,h.id&&(this._byId[h.id]=h);if(this.length+=g,f=b._isNullOrUndefined(d.at)?this.models.length:d.at,this.models.splice.apply(this.models,[f,0].concat(a)),this.comparator&&this.sort({silent:!0}),d.silent)return this;for(e=0,g=this.models.length;g>e;e++)h=this.models[e],k[h.cid]&&(d.index=e,h.trigger("add",h,this,d));return this},remove:function(a,b){var d,e,f,g;for(b=b||{},a=c.isArray(a)?a.slice():[a],d=0,e=a.length;e>d;d++)g=this.getByCid(a[d])||this.get(a[d]),g&&(delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g));return this},get:function(a){return a&&this._byId[a.id||a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){if(a=a||{},!this.comparator)throw new Error("Cannot sort a set without a comparator");var b=c.bind(this.comparator,this);return 1===this.comparator.length?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return c.map(this.models,function(b){return b.get(a)})},reset:function(a,c){var d=this;return a=a||[],c=c||{},b._arrayEach(this.models,function(a){d._removeReference(a)}),this._reset(),this.add(a,{silent:!0,parse:c.parse}),c.silent||this.trigger("reset",this,c),this},fetch:function(a){a=c.clone(a)||{},void 0===a.parse&&(a.parse=!0);var d=this,e=this.query||new b.Query(this.model);return e.find({useMasterKey:a.useMasterKey}).then(function(b){return a.add?d.add(b,a):d.reset(b,a),d})._thenRunCallbacks(a,this)},create:function(a,b){var d=this;if(b=b?c.clone(b):{},a=this._prepareModel(a,b),!a)return!1;b.wait||d.add(a,b);var e=b.success;return b.success=function(c,f){b.wait&&d.add(c,b),e?e(c,f):c.trigger("sync",a,f,b)},a.save(null,b),a},parse:function(a){return a},chain:function(){return c(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,c){if(a instanceof b.Object)a.collection||(a.collection=this);else{var d=a;c.collection=this,a=new this.model(d,c),a._validate(a.attributes,c)||(a=!1)}return a},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&"change:objectId"===a&&(delete this._byId[b.previous("objectId")],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});var d=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];b._arrayEach(d,function(a){b.Collection.prototype[a]=function(){return c[a].apply(c,[this.models].concat(c.toArray(arguments)))}}),b.Collection.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.View=function(a){this.cid=c.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()};var d=/^(\S+)\s*(.*)$/,e=["model","collection","el","id","attributes","className","tagName"];c.extend(b.View.prototype,b.Events,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(a,c,d){var e=document.createElement(a);return c&&b.$(e).attr(c),d&&b.$(e).html(d),e},setElement:function(a,c){return this.$el=b.$(a),this.el=this.$el[0],c!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(a=a||b._getValue(this,"events")){this.undelegateEvents();var e=this;b._objectEach(a,function(b,f){if(c.isFunction(b)||(b=e[a[f]]),!b)throw new Error('Event "'+a[f]+'" does not exist');var g=f.match(d),h=g[1],i=g[2];b=c.bind(b,e),h+=".delegateEvents"+e.cid,""===i?e.$el.bind(h,b):e.$el.delegate(i,h,b)})}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=c.extend({},this.options,a));var b=this;c.each(e,function(c){a[c]&&(b[c]=a[c])}),this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var a=b._getValue(this,"attributes")||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.setElement(this.make(this.tagName,a),!1)}}}),b.View.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.User=b.Object.extend("_User",{_isCurrentUser:!1,_mergeFromObject:function(a){a.getSessionToken()&&(this._sessionToken=a.getSessionToken()),b.User.__super__._mergeFromObject.call(this,a)},_mergeMagicFields:function(a){a.sessionToken&&(this._sessionToken=a.sessionToken,delete a.sessionToken),b.User.__super__._mergeMagicFields.call(this,a)},_cleanupAuthData:function(){if(this.isCurrent()){var a=this.get("authData");a&&b._objectEach(this.get("authData"),function(b,c){a[c]||delete a[c]})}},_synchronizeAllAuthData:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._synchronizeAuthData(b)})}},_synchronizeAuthData:function(a){if(this.isCurrent()){var d;c.isString(a)?(d=a,a=b.User._authProviders[d]):d=a.getAuthType();var e=this.get("authData");if(e&&a){var f=a.restoreAuthentication(e[d]);f||this._unlinkFrom(a)}}},_handleSaveResult:function(a){a&&(this._isCurrentUser=!0),this._cleanupAuthData(),this._synchronizeAllAuthData(),delete this._serverData.password,this._rebuildEstimatedDataForKey("password"),this._refreshCache(),(a||this.isCurrent())&&b.User._saveCurrentUser(this)},_linkWith:function(a,d){var e;if(c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType(),c.has(d,"authData")){var f=this.get("authData")||{};f[e]=d.authData,this.set("authData",f);var g=c.clone(d)||{};return g.success=function(a){a._handleSaveResult(!0),d.success&&d.success.apply(this,arguments)},this.save({authData:f},g)}var h=this,i=new b.Promise;return a.authenticate({success:function(a,b){h._linkWith(a,{authData:b,success:d.success,error:d.error}).then(function(){i.resolve(h)})},error:function(a,b){d.error&&d.error(h,b),i.reject(b)}}),i},_unlinkFrom:function(a,d){var e;c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType();var f=c.clone(d),g=this;return f.authData=null,f.success=function(){g._synchronizeAuthData(a),d.success&&d.success.apply(this,arguments)},this._linkWith(a,f)},_isLinked:function(a){var b;b=c.isString(a)?a:a.getAuthType();var d=this.get("authData")||{};return!!d[b]},_logOutWithAll:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._logOutWith(b)})}},_logOutWith:function(a){this.isCurrent()&&(c.isString(a)&&(a=b.User._authProviders[a]),a&&a.deauthenticate&&a.deauthenticate())},signUp:function(a,d){var e;d=d||{};var f=a&&a.username||this.get("username");if(!f||""===f)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty name."),d&&d.error&&d.error(this,e),b.Promise.error(e);var g=a&&a.password||this.get("password");if(!g||""===g)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty password."),d&&d.error&&d.error(this,e),b.Promise.error(e);var h=c.clone(d);return h.success=function(a){a._handleSaveResult(!0),d.success&&d.success.apply(this,arguments)},this.save(a,h)},logIn:function(a){var c=this;a=a||{};var d=b._request({route:"login",method:"GET",useMasterKey:a.useMasterKey,data:this.toJSON()});return d.then(function(a,b,d){var e=c.parse(a,b,d);return c._finishFetch(e),c._handleSaveResult(!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g;c.isObject(a)||c.isNull(a)||c.isUndefined(a)?(f=a,g=d):(f={},f[a]=d,g=e),g=g||{};var h=c.clone(g);return h.success=function(a){a._handleSaveResult(!1),g.success&&g.success.apply(this,arguments)},b.Object.prototype.save.call(this,f,h)},fetch:function(a){var d=a?c.clone(a):{};return d.success=function(b){b._handleSaveResult(!1),a&&a.success&&a.success.apply(this,arguments)},b.Object.prototype.fetch.call(this,d)},isCurrent:function(){return this._isCurrentUser},getUsername:function(){return this.get("username")},setUsername:function(a,b){return this.set("username",a,b)},setPassword:function(a,b){return this.set("password",a,b)},getEmail:function(){return this.get("email")},setEmail:function(a,b){return this.set("email",a,b)},authenticated:function(){return!!this._sessionToken&&b.User.current()&&b.User.current().id===this.id},getSessionToken:function(){return this._sessionToken}},{_currentUser:null,_currentUserMatchesDisk:!1,_CURRENT_USER_KEY:"currentUser",_authProviders:{},_performUserRewrite:!0,signUp:function(a,c,d,e){d=d||{},d.username=a,d.password=c;var f=b.Object._create("_User");return f.signUp(d,e)},logIn:function(a,c,d){var e=b.Object._create("_User");return e._finishFetch({username:a,password:c}),e.logIn(d)},become:function(a,c){c=c||{};var d=b.Object._create("_User");return b._request({route:"users",className:"me",method:"GET",useMasterKey:c.useMasterKey,sessionToken:a}).then(function(a,b,c){var e=d.parse(a,b,c);return d._finishFetch(e),d._handleSaveResult(!0),d})._thenRunCallbacks(c,d)},logOut:function(){null!==b.User._currentUser&&(b.User._currentUser._logOutWithAll(),b.User._currentUser._isCurrentUser=!1),b.User._currentUserMatchesDisk=!0,b.User._currentUser=null,b.localStorage.removeItem(b._getParsePath(b.User._CURRENT_USER_KEY))},requestPasswordReset:function(a,c){c=c||{};var d=b._request({route:"requestPasswordReset",method:"POST",useMasterKey:c.useMasterKey,data:{email:a}});return d._thenRunCallbacks(c)},current:function(){if(b.User._currentUser)return b.User._currentUser;if(b.User._currentUserMatchesDisk)return b.User._currentUser;b.User._currentUserMatchesDisk=!0;var a=b.localStorage.getItem(b._getParsePath(b.User._CURRENT_USER_KEY));if(!a)return null;b.User._currentUser=b.Object._create("_User"),b.User._currentUser._isCurrentUser=!0;var c=JSON.parse(a);return b.User._currentUser.id=c._id,delete c._id,b.User._currentUser._sessionToken=c._sessionToken,delete c._sessionToken,b.User._currentUser._finishFetch(c),b.User._currentUser._synchronizeAllAuthData(),b.User._currentUser._refreshCache(),b.User._currentUser._opSetQueue=[{}],b.User._currentUser},allowCustomUserClass:function(a){this._performUserRewrite=!a},_saveCurrentUser:function(a){b.User._currentUser!==a&&b.User.logOut(),a._isCurrentUser=!0,b.User._currentUser=a,b.User._currentUserMatchesDisk=!0;var c=a.toJSON();c._id=a.id,c._sessionToken=a._sessionToken,b.localStorage.setItem(b._getParsePath(b.User._CURRENT_USER_KEY),JSON.stringify(c))},_registerAuthenticationProvider:function(a){b.User._authProviders[a.getAuthType()]=a,b.User.current()&&b.User.current()._synchronizeAuthData(a.getAuthType())},_logInWith:function(a,c){var d=b.Object._create("_User");return d._linkWith(a,c)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Query=function(a){c.isString(a)&&(a=b.Object._getSubclass(a)),this.objectClass=a,this.className=a.prototype.className,this._where={},this._include=[],this._limit=-1,this._skip=0,this._extraOptions={}},b.Query.or=function(){var a=c.toArray(arguments),d=null;b._arrayEach(a,function(a){if(c.isNull(d)&&(d=a.className),d!==a.className)throw"All queries must be for the same class"});var e=new b.Query(d);return e._orQuery(a),e},b.Query.prototype={get:function(a,d){var e=this;e.equalTo("objectId",a);var f={};return d&&c.has(d,"useMasterKey")&&(f={useMasterKey:d.useMasterKey}),e.first(f).then(function(a){if(a)return a;var c=new b.Error(b.Error.OBJECT_NOT_FOUND,"Object not found.");return b.Promise.error(c)})._thenRunCallbacks(d,null)},toJSON:function(){var a={where:this._where};return this._include.length>0&&(a.include=this._include.join(",")),this._select&&(a.keys=this._select.join(",")),this._limit>=0&&(a.limit=this._limit),this._skip>0&&(a.skip=this._skip),void 0!==this._order&&(a.order=this._order.join(",")),b._objectEach(this._extraOptions,function(b,c){a[c]=b}),a},find:function(a){var d=this;a=a||{};var e=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,data:this.toJSON()});return e.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})})._thenRunCallbacks(a)},count:function(a){var c=this;a=a||{};var d=this.toJSON();d.limit=0,d.count=1;var e=b._request({route:"classes",className:c.className,method:"GET",useMasterKey:a.useMasterKey,data:d});return e.then(function(a){return a.count})._thenRunCallbacks(a)},first:function(a){var d=this;a=a||{};var e=this.toJSON();e.limit=1;var f=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,data:e});return f.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})[0]})._thenRunCallbacks(a)},collection:function(a,d){return d=d||{},new b.Collection(a,c.extend(d,{model:this.objectClass,query:this}))},skip:function(a){return this._skip=a,this},limit:function(a){return this._limit=a,this},equalTo:function(a,d){return c.isUndefined(d)?this.doesNotExist(a):(this._where[a]=b._encode(d),this)},_addCondition:function(a,c,d){return this._where[a]||(this._where[a]={}),this._where[a][c]=b._encode(d),this},notEqualTo:function(a,b){return this._addCondition(a,"$ne",b),this},lessThan:function(a,b){return this._addCondition(a,"$lt",b),this},greaterThan:function(a,b){return this._addCondition(a,"$gt",b),this},lessThanOrEqualTo:function(a,b){return this._addCondition(a,"$lte",b),this},greaterThanOrEqualTo:function(a,b){return this._addCondition(a,"$gte",b),this},containedIn:function(a,b){return this._addCondition(a,"$in",b),this},notContainedIn:function(a,b){return this._addCondition(a,"$nin",b),this},containsAll:function(a,b){return this._addCondition(a,"$all",b),this},exists:function(a){return this._addCondition(a,"$exists",!0),this},doesNotExist:function(a){return this._addCondition(a,"$exists",!1),this},matches:function(a,b,c){return this._addCondition(a,"$regex",b),c||(c=""),b.ignoreCase&&(c+="i"),b.multiline&&(c+="m"),c&&c.length&&this._addCondition(a,"$options",c),this},matchesQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$inQuery",c),this},doesNotMatchQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$notInQuery",c),this},matchesKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$select",{key:b,query:d}),this},doesNotMatchKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$dontSelect",{key:b,query:d}),this},_orQuery:function(a){var b=c.map(a,function(a){return a.toJSON().where});return this._where.$or=b,this},_quote:function(a){return"\\Q"+a.replace("\\E","\\E\\\\E\\Q")+"\\E"},contains:function(a,b){return this._addCondition(a,"$regex",this._quote(b)),this},startsWith:function(a,b){return this._addCondition(a,"$regex","^"+this._quote(b)),this},endsWith:function(a,b){return this._addCondition(a,"$regex",this._quote(b)+"$"),this},ascending:function(){return this._order=[],this.addAscending.apply(this,arguments)},addAscending:function(){var a=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(b){Array.isArray(b)&&(b=b.join()),a._order=a._order.concat(b.replace(/\s/g,"").split(","))}),this},descending:function(){return this._order=[],this.addDescending.apply(this,arguments)},addDescending:function(){var a=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(b){Array.isArray(b)&&(b=b.join()),a._order=a._order.concat(c.map(b.replace(/\s/g,"").split(","),function(a){return"-"+a}))}),this},near:function(a,c){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),this._addCondition(a,"$nearSphere",c),this},withinRadians:function(a,b,c){return this.near(a,b),this._addCondition(a,"$maxDistance",c),this},withinMiles:function(a,b,c){return this.withinRadians(a,b,c/3958.8)},withinKilometers:function(a,b,c){return this.withinRadians(a,b,c/6371)},withinGeoBox:function(a,c,d){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),d instanceof b.GeoPoint||(d=new b.GeoPoint(d)),this._addCondition(a,"$within",{$box:[c,d]}),this},include:function(){var a=this;return b._arrayEach(arguments,function(b){c.isArray(b)?a._include=a._include.concat(b):a._include.push(b)}),this},select:function(){var a=this;return this._select=this._select||[],b._arrayEach(arguments,function(b){c.isArray(b)?a._select=a._select.concat(b):a._select.push(b)}),this},each:function(a,d){if(d=d||{},this._order||this._skip||this._limit>=0){var e="Cannot iterate on a query with sort, skip, or limit.";return b.Promise.error(e)._thenRunCallbacks(d)}var f=(new b.Promise,new b.Query(this.objectClass));f._limit=d.batchSize||100,f._where=c.clone(this._where),f._include=c.clone(this._include),f.ascending("objectId");var g={};c.has(d,"useMasterKey")&&(g.useMasterKey=d.useMasterKey);var h=!1;return b.Promise._continueWhile(function(){return!h},function(){return f.find(g).then(function(c){var d=b.Promise.as();return b._.each(c,function(b){d=d.then(function(){return a(b)})}),d.then(function(){c.length>=f._limit?f.greaterThan("objectId",c[c.length-1].id):h=!0})})})._thenRunCallbacks(d)}}}(this),function(a){a.Parse=a.Parse||{};var b,c,d=a.Parse,e=d._,f=!1,g={authenticate:function(a){var c=this;FB.login(function(b){b.authResponse?a.success&&a.success(c,{id:b.authResponse.userID,access_token:b.authResponse.accessToken,expiration_date:new Date(1e3*b.authResponse.expiresIn+(new Date).getTime()).toJSON()}):a.error&&a.error(c,b)},{scope:b})},restoreAuthentication:function(a){if(a){var b={userID:a.id,accessToken:a.access_token,expiresIn:(d._parseDate(a.expiration_date).getTime()-(new Date).getTime())/1e3},f=e.clone(c);f.authResponse=b,f.status=!1;var g=FB.getAuthResponse();g&&g.userID!==b.userID&&FB.logout(),FB.init(f)}return!0},getAuthType:function(){return"facebook"},deauthenticate:function(){this.restoreAuthentication(null)}};d.FacebookUtils={init:function(a){if("undefined"==typeof FB)throw"The Facebook JavaScript SDK must be loaded before calling init.";if(c=e.clone(a)||{},c.status&&"undefined"!=typeof console){var b=console.warn||console.log||function(){};b.call(console,"The 'status' flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.")}c.status=!1,FB.init(c),d.User._registerAuthenticationProvider(g),f=!0},isLinked:function(a){return a._isLinked("facebook")},logIn:function(a,c){if(!a||e.isString(a)){if(!f)throw"You must initialize FacebookUtils before calling logIn.";return b=a,d.User._logInWith("facebook",c)}var g=e.clone(c)||{};return g.authData=a,d.User._logInWith("facebook",g)},link:function(a,c,d){if(!c||e.isString(c)){if(!f)throw"You must initialize FacebookUtils before calling link.";return b=c,a._linkWith("facebook",d)}var g=e.clone(d)||{};return g.authData=c,a._linkWith("facebook",g)},unlink:function(a,b){if(!f)throw"You must initialize FacebookUtils before calling unlink.";return a._unlinkFrom("facebook",b)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl")};var d=/^[#\/]/,e=/msie [\w.]+/;b.History.started=!1,c.extend(b.History.prototype,b.Events,{interval:50,getHash:function(a){var b=a?a.location:window.location,c=b.href.match(/#(.*)$/);return c?c[1]:""},getFragment:function(a,c){if(b._isNullOrUndefined(a))if(this._hasPushState||c){a=window.location.pathname;var e=window.location.search;e&&(a+=e)}else a=this.getHash();return a.indexOf(this.options.root)||(a=a.substr(this.options.root.length)),a.replace(d,"")},start:function(a){if(b.History.started)throw new Error("Parse.history has already been started");b.History.started=!0,this.options=c.extend({},{root:"/"},this.options,a),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var f=this.getFragment(),g=document.documentMode,h=e.exec(navigator.userAgent.toLowerCase())&&(!g||7>=g);h&&(this.iframe=b.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(f)),this._hasPushState?b.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!h?b.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=window.setInterval(this.checkUrl,this.interval)),this.fragment=f;var i=window.location,j=i.pathname===this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!j?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&j&&i.hash&&(this.fragment=this.getHash().replace(d,""),window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){b.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),window.clearInterval(this._checkUrlInterval),b.History.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();return a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe))),a===this.fragment?!1:(this.iframe&&this.navigate(a),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(a){var b=this.fragment=this.getFragment(a),d=c.any(this.handlers,function(a){return a.route.test(b)?(a.callback(b),!0):void 0});return d},navigate:function(a,c){if(!b.History.started)return!1;c&&c!==!0||(c={trigger:c});var e=(a||"").replace(d,"");if(this.fragment!==e){if(this._hasPushState){0!==e.indexOf(this.options.root)&&(e=this.options.root+e),this.fragment=e;var f=c.replace?"replaceState":"pushState";window.history[f]({},document.title,e)}else this._wantsHashChange?(this.fragment=e,this._updateHash(window.location,e,c.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(c.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,c.replace))):window.location.assign(this.options.root+a);c.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){if(c){var d=a.toString().replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash=b}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Router=function(a){a=a||{},a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var d=/:\w+/g,e=/\*\w+/g,f=/[\-\[\]{}()+?.,\\\^\$\|#\s]/g;c.extend(b.Router.prototype,b.Events,{initialize:function(){},route:function(a,d,e){return b.history=b.history||new b.History,c.isRegExp(a)||(a=this._routeToRegExp(a)),e||(e=this[d]),b.history.route(a,c.bind(function(c){var f=this._extractParameters(a,c);e&&e.apply(this,f),this.trigger.apply(this,["route:"+d].concat(f)),b.history.trigger("route",this,d,f)},this)),this},navigate:function(a,c){b.history.navigate(a,c)},_bindRoutes:function(){if(this.routes){var a=[];for(var b in this.routes)this.routes.hasOwnProperty(b)&&a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;d>c;c++)this.route(a[c][0],a[c][1],this[a[c][1]])}},_routeToRegExp:function(a){return a=a.replace(f,"\\$&").replace(d,"([^/]+)").replace(e,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}}),b.Router.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Cloud=b.Cloud||{},c.extend(b.Cloud,{run:function(a,c,d){d=d||{};var e=b._request({route:"functions",className:a,method:"POST",useMasterKey:d.useMasterKey,data:b._encode(c,null,!0)});return e.then(function(a){return b._decode(null,a).result})._thenRunCallbacks(d)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;b.Installation=b.Object.extend("_Installation"),b.Push=b.Push||{},b.Push.send=function(a,c){if(c=c||{},a.where&&(a.where=a.where.toJSON().where),a.push_time&&(a.push_time=a.push_time.toJSON()),a.expiration_time&&(a.expiration_time=a.expiration_time.toJSON()),a.expiration_time&&a.expiration_interval)throw"Both expiration_time and expiration_interval can't be set";var d=b._request({route:"push",method:"POST",data:a,useMasterKey:c.useMasterKey});return d._thenRunCallbacks(c)}}(this);;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});;/*
* MIXITUP - A CSS3 & JQuery Filter and Sort Plugin
* Version: 1.4.0
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, All Rights Reserved
* FREE FOR NON-COMMERCIAL USE
* http://www.mixitup.io
*/
(function(e){function m(d,b,h,c,a){function j(){k.unbind();b&&v(b,h,c,a);a.startOrder=[];a.newOrder=[];a.origSort=[];a.checkSort=[];u.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");window.atob||u.css({display:"none",opacity:"0"});k.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+(a.resizeContainer?"height":""));"list"==a.layoutMode?
(q.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(q.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid);a.origLayout=a.layoutMode;setTimeout(function(){u.removeStyle(a.prefix+"transition, transition");a.mixing=!1;if("function"==typeof a.onMixEnd){var b=a.onMixEnd.call(this,a);a=b?b:a}})}clearInterval(a.failsafe);a.mixing=!0;if("function"==typeof a.onMixStart){var f=a.onMixStart.call(this,a);a=f?f:a}for(var g=a.transitionSpeed,f=0;2>
f;f++){var n=0==f?n=a.prefix:"";a.transition[n+"transition"]="all "+g+"ms linear";a.transition[n+"transform"]=n+"translate3d(0,0,0)";a.perspective[n+"perspective"]=a.perspectiveDistance+"px";a.perspective[n+"perspective-origin"]=a.perspectiveOrigin}var r=a.targetSelector,u=c.find(r);u.each(function(){this.data={}});var k=u.parent();k.css(a.perspective);a.easingFallback="ease-in-out";"smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)");"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)");
"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)");"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");f="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects;Array.prototype.indexOf&&(a.fade=-1<f.indexOf("fade")?"0":"",a.scale=-1<f.indexOf("scale")?"scale(.01)":"",a.rotateZ=-1<f.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<
f.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<f.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<f.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<f.indexOf("grayscale")?"grayscale(100%)":"");d=d.replace(/\s|\//g,".");var q=e(),s=e();if("or"==a.filterLogic){var m=d.split(".");!0==a.multiFilter&&""==m[0]&&m.shift();1>m.length?s=s.add(c.find(r+":visible")):u.each(function(){for(var a=0,b=e(this),c=0;c<m.length;c++)b.hasClass(m[c])&&(q=q.add(b),a++);0==a&&(s=s.add(b))})}else q=q.add(k.find(r+"."+
d)),s=s.add(k.find(r+":not(."+d+"):visible"));d=q.length;var t=e(),p=e(),l=e();s.each(function(){var a=e(this);"none"!=a.css("display")&&(t=t.add(a),l=l.add(a))});if(q.filter(":visible").length==d&&!t.length&&!b){if(a.origLayout==a.layoutMode)return j(),!1;if(1==q.length)return"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass),l.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),l.css("display",a.targetDisplayGrid)),j(),!1}a.origHeight=k.height();
if(q.length){c.removeClass(a.failClass);q.each(function(){var a=e(this);"none"==a.css("display")?p=p.add(a):l=l.add(a)});if(a.origLayout!=a.layoutMode&&!1==a.animateGridList)return"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass),l.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),l.css("display",a.targetDisplayGrid)),j(),!1;if(!window.atob)return j(),!1;u.css(a.clean);l.each(function(){this.data.origPos=e(this).offset()});"list"==a.layoutMode?
(c.addClass(a.listClass),c.removeClass(a.gridClass),p.css("display",a.targetDisplayList)):(c.addClass(a.gridClass),c.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));p.each(function(){this.data.showInterPos=e(this).offset()});t.each(function(){this.data.hideInterPos=e(this).offset()});l.each(function(){this.data.preInterPos=e(this).offset()});"list"==a.layoutMode?l.css("display",a.targetDisplayList):l.css("display",a.targetDisplayGrid);b&&v(b,h,c,a);if(b&&a.origSort.compare(a.checkSort))return j(),
!1;t.hide();p.each(function(){this.data.finalPos=e(this).offset()});l.each(function(){this.data.finalPrePos=e(this).offset()});a.newHeight=k.height();b&&v("reset",null,c,a);p.hide();l.css("display",a.origDisplay);"block"==a.origDisplay?(c.addClass(a.listClass),p.css("display",a.targetDisplayList)):(c.removeClass(a.listClass),p.css("display",a.targetDisplayGrid));a.resizeContainer&&k.css("height",a.origHeight+"px");d={};for(f=0;2>f;f++)n=0==f?n=a.prefix:"",d[n+"transform"]=a.scale+" "+a.rotateX+" "+
a.rotateY+" "+a.rotateZ,d[n+"filter"]=a.blur+" "+a.grayscale;p.css(d);l.each(function(){var b=this.data,c=e(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},g=0;2>g;g++){var f=0==g?f=a.prefix:"";d[f+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)});"list"==a.layoutMode?(c.addClass(a.listClass),c.removeClass(a.gridClass)):
(c.addClass(a.gridClass),c.removeClass(a.listClass));setTimeout(function(){if(a.resizeContainer){for(var b={},c=0;2>c;c++){var d=0==c?d=a.prefix:"";b[d+"transition"]="all "+g+"ms ease-in-out";b.height=a.newHeight+"px"}k.css(b)}t.css("opacity",a.fade);p.css("opacity",1);p.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left;b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition-property"]=f+"transform, "+f+"filter, opacity";c[f+
"transition-timing-function"]=a.easing+", linear, linear";c[f+"transition-duration"]=g+"ms";c[f+"transition-delay"]="0";c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)";c[f+"filter"]="none"}e(this).css("-webkit-transition","all "+g+"ms "+a.easingFallback).css(c)});l.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0;b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;2>d;d++){var f=0==d?f=a.prefix:"";c[f+"transition"]=
"all "+g+"ms "+a.easing;c[f+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}e(this).css("-webkit-transition","all "+g+"ms "+a.easingFallback).css(c)});b={};for(c=0;2>c;c++)d=0==c?d=a.prefix:"",b[d+"transition"]="all "+g+"ms "+a.easing+", "+d+"filter "+g+"ms linear, opacity "+g+"ms linear",b[d+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[d+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;t.css(b);k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){if(-1<
a.originalEvent.propertyName.indexOf("transform")||-1<a.originalEvent.propertyName.indexOf("opacity"))-1<r.indexOf(".")?e(a.target).hasClass(r.replace(".",""))&&j():e(a.target).is(r)&&j()})},10);a.failsafe=setTimeout(function(){a.mixing&&j()},g+400)}else{a.resizeContainer&&k.css("height",a.origHeight+"px");if(!window.atob)return j(),!1;t=s;setTimeout(function(){k.css(a.perspective);if(a.resizeContainer){for(var b={},d=0;2>d;d++){var e=0==d?e=a.prefix:"";b[e+"transition"]="height "+g+"ms ease-in-out";
b.height=a.minHeight+"px"}k.css(b)}u.css(a.transition);if(s.length){b={};for(d=0;2>d;d++)e=0==d?e=a.prefix:"",b[e+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,b[e+"filter"]=a.blur+" "+a.grayscale,b.opacity=a.fade;t.css(b);k.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){if(-1<b.originalEvent.propertyName.indexOf("transform")||-1<b.originalEvent.propertyName.indexOf("opacity"))c.addClass(a.failClass),j()})}else a.mixing=!1},10)}}function v(d,b,
h,c){function a(a,b){return 1*a.attr(d).toLowerCase()<1*b.attr(d).toLowerCase()?-1:1*a.attr(d).toLowerCase()>1*b.attr(d).toLowerCase()?1:0}function j(a){"asc"==b?f.prepend(a).prepend(" \
	"):f.append(a).append(" \
	")}h.find(c.targetSelector).wrapAll('<div class="mix_sorter"/>');var f=h.find(".mix_sorter");c.origSort.length||f.find(c.targetSelector+":visible").each(function(){e(this).wrap("<s/>");c.origSort.push(e(this).parent().html().replace(/\s+/g,""));e(this).unwrap()});f.empty();if("reset"==d)e.each(c.startOrder,
function(){f.append(this).append(" \
	")});else if("default"==d)e.each(c.origOrder,function(){j(this)});else if("random"==d){if(!c.newOrder.length){for(var g=c.startOrder.slice(),n=g.length,r=n;r--;){var m=parseInt(Math.random()*n),k=g[r];g[r]=g[m];g[m]=k}c.newOrder=g}e.each(c.newOrder,function(){f.append(this).append(" \
	")})}else"custom"==d?e.each(b,function(){j(this)}):("undefined"===typeof c.origOrder[0].attr(d)&&console.log("No such attribute found. Terminating"),c.newOrder.length||(e.each(c.origOrder,
function(){c.newOrder.push(e(this))}),c.newOrder.sort(a)),e.each(c.newOrder,function(){j(this)}));c.checkSort=[];f.find(c.targetSelector+":visible").each(function(a){var b=e(this);0==a&&b.attr("data-checksum","1");b.wrap("<s/>");c.checkSort.push(b.parent().html().replace(/\s+/g,""));b.unwrap()});h.find(c.targetSelector).unwrap()}var w={init:function(d){return this.each(function(){var b={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],
listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,
newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};d&&e.extend(b,d);this.config=b;e.support.touch="ontouchend"in document;e.support.touch&&(b.isTouch=!0,b.resetDelay=350);b.container=e(this);var h=b.container,c;a:{c=h[0];for(var a=["Webkit","Moz","O","ms"],j=0;j<a.length;j++)if(a[j]+"Transition"in c.style){c=a[j];break a}c="transition"in c.style?"":!1}b.prefix=
c;b.prefix=b.prefix?"-"+b.prefix.toLowerCase()+"-":"";h.find(b.targetSelector).each(function(){b.origOrder.push(e(this))});for(c=0;2>c;c++)a=0==c?a=b.prefix:"",b.transition[a+"transition"]="all "+b.transitionSpeed+"ms ease-in-out",b.perspective[a+"perspective"]=b.perspectiveDistance+"px",b.perspective[a+"perspective-origin"]=b.perspectiveOrigin;for(c=0;2>c;c++)a=0==c?a=b.prefix:"",b.clean[a+"transition"]="none";"list"==b.layoutMode?(h.addClass(b.listClass),b.origDisplay=b.targetDisplayList):(h.addClass(b.gridClass),
b.origDisplay=b.targetDisplayGrid);b.origLayout=b.layoutMode;c=b.showOnLoad.split(" ");e.each(c,function(){e(b.filterSelector+'[data-filter="'+this+'"]').addClass("active")});h.find(b.targetSelector).addClass("mix_all");"all"==c[0]&&(c[0]="mix_all",b.showOnLoad="mix_all");var f=e();e.each(c,function(){f=f.add(e("."+this))});f.each(function(){var a=e(this);"list"==b.layoutMode?a.css("display",b.targetDisplayList):a.css("display",b.targetDisplayGrid);a.css(b.transition)});setTimeout(function(){b.mixing=
!0;f.css("opacity","1");setTimeout(function(){"list"==b.layoutMode?f.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayList,opacity:1}):f.removeStyle(b.prefix+"transition, transition").css({display:b.targetDisplayGrid,opacity:1});b.mixing=!1;if("function"==typeof b.onMixLoad){var a=b.onMixLoad.call(this,b);b=a?a:b}},b.transitionSpeed)},10);b.filter=b.showOnLoad;e(b.sortSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this),c=a.attr("data-sort"),d=a.attr("data-order");
if(a.hasClass("active")){if("random"!=c)return!1}else e(b.sortSelector).removeClass("active"),a.addClass("active");h.find(b.targetSelector).each(function(){b.startOrder.push(e(this))});m(b.filter,c,d,h,b)}});e(b.filterSelector).bind(b.buttonEvent,function(){if(!b.mixing){var a=e(this);if(!1==b.multiFilter)e(b.filterSelector).removeClass("active"),a.addClass("active"),b.filter=a.attr("data-filter"),e(b.filterSelector+'[data-filter="'+b.filter+'"]').addClass("active"),"all"==b.filter&&(b.filter="mix_all");
else{var c=a.attr("data-filter");"all"==c&&(c="mix_all");a.hasClass("active")?(a.removeClass("active"),b.filter=b.filter.replace(RegExp("(\\s|^)"+c),"")):(a.addClass("active"),b.filter=b.filter+" "+c)}m(b.filter,null,null,h,b)}})})},toGrid:function(){return this.each(function(){var d=this.config;"grid"!=d.layoutMode&&(d.layoutMode="grid",m(d.filter,null,null,e(this),d))})},toList:function(){return this.each(function(){var d=this.config;"list"!=d.layoutMode&&(d.layoutMode="list",m(d.filter,null,null,
e(this),d))})},filter:function(d){return this.each(function(){var b=this.config;e(b.filterSelector).removeClass("active");e(b.filterSelector+'[data-filter="'+d+'"]').addClass("active");"all"==d&&(d="mix_all");b.mixing||(b.filter=d,m(d,null,null,e(this),b))})},sort:function(d){return this.each(function(){var b=this.config;if(e.isArray(d))var h=d[0],c=d[1];else h=d,c="desc";b.mixing||(e(this).find(b.targetSelector).each(function(){b.startOrder.push(e(this))}),m(b.filter,h,c,e(this),b))})}};e.fn.mixitup=
function(d,b){if(w[d])return w[d].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof d||!d)return w.init.apply(this,arguments)};e.fn.removeStyle=function(d){return this.each(function(){var b=e(this);d=d.replace(/\s+/g,"");var h=d.split(",");e.each(h,function(){var c=RegExp(this.toString()+"[^;]+;?","g");b.attr("style",function(a,b){if(b)return b.replace(c,"")})})})};Array.prototype.compare=function(d){if(this.length!=d.length)return!1;for(var b=0;b<d.length;b++)if(this[b].compare&&
!this[b].compare(d[b])||this[b]!==d[b])return!1;return!0}})(jQuery);