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

    return $resource('https://api.parse.com/1/classes/FastTech/:id/:params:format', {
        id: '@id',
        params: '@params'
    }, {
        update: {
            method: 'PUT'
        },
        grab: {
            method: 'GET',
            cache: true
        },
        find: {
            method: 'GET',
            isArray: false,
            params: {
                objectId: 'LtET4bS9h4'
            }
        },
        nab: {
            method: 'GET',
            isArray: false
        }
    });
}])