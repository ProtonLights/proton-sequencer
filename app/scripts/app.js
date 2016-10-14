// This is the basis of all user side interactivity.

// This is where you would implement specfic client side behavior.

(function () {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {

            // Connects the editor.html file with the sequenceController on the main directory.
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/sequence/editor.html' ,
                controller: 'sequenceController',
                controllerAs: '_ctrl'
            });

            // Here is an example on how to create additional pages or interfaces within the application.
            // $routeProvider.when('/path/to/new/window', {
            //     templateUrl: _templateBase + '/path/to/html/template' ,
            //     controller: 'controllerName',
            //     controllerAs: '_ctrl'
            // });

            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);



})();
