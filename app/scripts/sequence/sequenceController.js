(function () {
    'use strict';
    angular.module('app')
        .controller('sequenceController', ['$scope', CustomerController]);

    function CustomerController($scope) {
        // Replaces the {{ greeting }} text in editor.html with the text 'Hola!'. Try changin this text and watch it change after you re-run the program.
        $scope.greeting = 'Hola!';

        // The default number of times the paragraph function should be repeated.
        $scope.count = 2;

        // A function within Angular that will create an array that the ng-repeat feature can loop over. 
        $scope.getNumber = function() {
          return new Array($scope.count)
        }
    }

})();
