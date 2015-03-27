angular.module('tnApp.services')
    .factory('TicketService', ['$http', '$q', '$resource', '$templateCache', function($http, $q, $resource, $templateCache) {
    // 'use strict';

    var deferred = $q.defer();

    $http.defaults.transformRequest.push(function(data, headersGetter) {
        headersGetter()['X-Parse-Application-Id'] = 'XFukCIc6giByefQZjvKjvRQdyaID0OqseAdLYGE4';
        headersGetter()['X-Parse-REST-API-Key'] = 'MzBDFQGOZfhMe0Md3WksUPGbpzTzoJlqe8WAVtIc';
        headersGetter()['Accept'] = 'application/json';
        headersGetter()['Content-Type'] = 'application/json';
        return data;
    });

    return $resource('https://api.parse.com/1/classes/SupportTickets/:objectId/:userName/:reply:format', {
        objectId: '@objectId',
        userName: '@userName',
        reply: '@reply'
    }, {
        update: {
            method: 'PUT'
        },
        getAllTickets: {
            method: 'GET',
            cache: true
        },
        post: {
            method: 'POST'
        },
        find: {
            method: 'GET',
            isArray: false
        },
        nab: {
            method: 'GET',
            isArray: false
        },
        reply: {
            method: 'PUT'
        }
    });
}])