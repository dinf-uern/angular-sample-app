angular.module('app.tela2')
    .controller('Tela2FiltersCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
        $scope.filters = angular.copy($stateParams);

        $scope.limpar = function(){
            var params = {
                q: ''
            };

            $state.go('main.tela2', params);
        }
    }]);