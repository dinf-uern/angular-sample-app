angular.module('app.admin')
    .controller('AdminFiltersCtrl', ['$scope', function($scope){
        $scope.doSomething = function(){
            window.alert('something has been done!');
        }
    }]);