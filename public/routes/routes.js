app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '',
            abstract: true,
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation/navigation.html",
                    controller: "NavCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('home.index', {
            url: '/',
            views: {
                'body@': {
                    templateUrl: "./template/html/home/home.html",
                    controller: "HomeCtrl"
                }
            }
        })
        .state('home.about', {
            url: '/about',
            views: {
                'body@': {
                    templateUrl: "./template/html/about/about.html",
                    controller: "AboutCtrl"
                }
            }
        })
        .state('home.contact', {
            url: '/contact',
            views: {
                'body@': {
                    templateUrl: "./template/html/contact/contact.html",
                    controller: "ContactCtrl"
                }
            }
        })
        .state('home.portfolio', {
            url: '/portfolio',
            views: {
                'body@': {
                    templateUrl: "./template/html/portfolio/portfolio.html",
                    controller: "PortfolioCtrl"
                }
            }
        })
        .state('home.support', {
            url: '/support',
            views: {
                'body@': {
                    templateUrl: "./template/html/support/support.html",
                    controller: "SupportCtrl"
                }
            }
        })
        .state('home.login', {
            url: '/login',
            views: {
                'body@': {
                    templateUrl: "./template/html/login/login.html",
                    controller: "LoginCtrl"
                }
            }
        })
        .state('home.login.create', {
            url: '/create',
            views: {
                'body@': {
                    templateUrl: "./template/html/login/login.create.html",
                    controller: "LoginCtrl"
                }
            }
        })
        .state('profile', {
            url: '/profile',
            abstract: true,
            views: {
                'navigation@': {
                    templateUrl: "./template/layout/navigation/navigation.html",
                    controller: "NavCtrl"
                },
                'body@': {
                    templateUrl: "./template/layout/profile/profile.layout.html",
                    controller: "ProfileCtrl"
                },
                'footer@': {
                    templateUrl: "./template/layout/footer/footer.html",
                    controller: "FooterCtrl"
                },
                'copyright@': {
                    templateUrl: "./template/layout/copyright/copyright.html",
                    controller: "CopyrightCtrl"
                }
            }
        })
        .state('profile.main', {
            url: '',
            views: {
                'body@messages': {
                    templateUrl: "./template/html/profile/profile.main.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages', {
            url: '/messages',
            views: {
                'body@messages': {
                    templateUrl: "./template/html/profile/profile.messages.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.text', {
            url: '/text',
            views: {
                'body@text': {
                    templateUrl: "./template/html/profile/profile.messages.text.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.talk', {
            url: '/talk',
            views: {
                'body@talk': {
                    templateUrl: "./template/html/profile/profile.messages.talk.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.video', {
            url: '/video',
            views: {
                'body@video': {
                    templateUrl: "./template/html/profile/profile.messages.video.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.support', {
            url: '/support',
            views: {
                'body@support': {
                    templateUrl: "./template/html/profile/profile.support.html",
                    controller: "ProfileCtrl"
                }
            }
        }).state('profile.todos', {
            url: '/todos',
            views: {
                'body@todos': {
                    templateUrl: "./template/html/profile/profile.todos.html",
                    controller: "ProfileCtrl"
                }
            }
        }).state('profile.settings', {
            url: '/settings',
            views: {
                'body@settings': {
                    templateUrl: "./template/html/profile/profile.settings.html",
                    controller: "ProfileCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});