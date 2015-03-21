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
        .state('home.service', {
            url: '/service',
            views: {
                'body@': {
                    templateUrl: "./template/html/service/service.html",
                    controller: "ServiceCtrl"
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
                'profile@messages': {
                    templateUrl: "./template/html/profile/profile.main.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages', {
            url: '/messages',
            views: {
                'profile@messages': {
                    templateUrl: "./template/html/profile/profile.messages.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.text', {
            url: '/text',
            views: {
                'profile@text': {
                    templateUrl: "./template/html/profile/profile.messages.text.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.talk', {
            url: '/talk',
            views: {
                'profile@talk': {
                    templateUrl: "./template/html/profile/profile.messages.talk.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.messages.video', {
            url: '/video',
            views: {
                'profile@video': {
                    templateUrl: "./template/html/profile/profile.messages.video.html",
                    controller: "ProfileCtrl"
                }
            }
        })


        .state('profile.support', {
            url: '/support',
            views: {
                'profile@support': {
                    templateUrl: "./template/layout/profile/profile.support.layout.html",
                    controller: "SupportTicketCtrl",
                    resolve: {
                        objectId: ['$stateParams', function($stateParams) {
                          return $stateParams;
                        }]
                    }
                }
            }
        })
        .state('profile.support.tickets', {
            url: '/ticket/:objectId',
            views: {
                'support@tickets': {
                    templateUrl: "./template/html/profile/profile.support.ticket.html",
                    controller: "SupportTicketDetailsCtrl"
                }
            }
        })
        // .state('profile.support.tickets.details', {
        //     url: '/:objectId',
        //     views: {
        //         'support@tickets': {
        //             templateUrl: "./template/layout/profile/profile.support.ticket.details.html",
        //             controller: "SupportTicketDetailsCtrl"
        //         }
        //     }
        // })



        .state('profile.todos', {
            url: '/todos',
            views: {
                'profile@todos': {
                    templateUrl: "./template/html/profile/profile.todos.html",
                    controller: "ProfileCtrl"
                }
            }
        })
        .state('profile.settings', {
            url: '/settings',
            views: {
                'profile@settings': {
                    templateUrl: "./template/html/profile/profile.settings.html",
                    controller: "ProfileCtrl"
                }
            }
        })

        .state('products', {
              url: '/products',
              views: {
                  '@': {
                      templateUrl: "./template/test/partial.products.html",
                      controller: 'ProductsCtrl',
                      resolve: {
                          objectId: ['$stateParams', function($stateParams) {
                              return $stateParams;
                          }]
                      },
                  }
              }
          })
          .state('products.details', {
              url: '/details/:objectId',
              views: {
                  '@': {
                      templateUrl: "./template/test/partial.products.details.html",
                      controller: 'ItemDetailsCtrl'
                  }
              }
          })


          .state('home.laws', {
              url: '/laws',
              views: {
                  'body@': {
                      templateUrl: "./template/html/laws/laws.html",
                      controller: ''
                  }
              }
          });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('#');
});