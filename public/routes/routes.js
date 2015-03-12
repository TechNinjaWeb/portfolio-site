app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
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
        .state('home.index', {
            url: '/',
            views: {
                'body@': {
                    templateUrl: "./template/html/home.html",
                    controller: "HomeCtrl"
                }
            }
        })
        .state('home.about', {
            url: '/about',
            views: {
                'body@': {
                    templateUrl: "./template/html/about.html",
                    controller: "AboutCtrl"
                }
            }
        })
        .state('home.contact', {
            url: '/contact',
            views: {
                'body@': {
                    templateUrl: "./template/html/contact.html",
                    controller: "ContactCtrl"
                }
            }
        })
        .state('home.portfolio', {
            url: '/portfolio',
            views: {
                'body@': {
                    templateUrl: "./template/html/portfolio.html",
                    controller: "PortfolioCtrl"
                }
            }
        })
        .state('home.support', {
            url: '/support',
            views: {
                'body@': {
                    templateUrl: "./template/html/support.html",
                    controller: "SupportCtrl"
                }
            }
        })
        .state('home.login', {
            url: '/login',
            views: {
                'body@': {
                    templateUrl: "./template/html/login.html",
                    controller: "LoginCtrl"
                }
            }
        })
        .state('home.login.create', {
            url: '/create',
            views: {
                'body@': {
                    templateUrl: "./template/html/login.create.html",
                    controller: "LoginCtrl"
                }
            }
        })
        .state('user', {
            url: '',
            abstract: true,
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation.html",
                    controller: "NavCtrl"
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
        .state('user.profile', {
            url: '/profile',
            views: {
                'body@': {
                    templateUrl: "./template/html/profile.html",
                    controller: "ProfileCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});