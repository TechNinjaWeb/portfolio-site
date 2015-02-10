app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
});