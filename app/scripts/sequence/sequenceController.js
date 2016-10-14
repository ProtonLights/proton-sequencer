(function () {
    'use strict';
    angular.module('app')
        .controller('sequenceController', ['$scope', CustomerController]);

    function CustomerController($scope) {
        $scope.greeting = 'Hola!';

        $scope.count = 2;

        $scope.getNumber = function() {
          return new Array($scope.count)
        }
    }

})();
