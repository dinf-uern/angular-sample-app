angular.module('app.tela1')
    .controller('Tela1FiltersCtrl', ['$scope', function($scope){
        $scope.doSomething = function(){
            window.alert('something has been done!');
        }
    }]);