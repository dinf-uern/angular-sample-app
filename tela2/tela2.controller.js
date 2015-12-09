angular.module('app.tela2')
    .controller('Tela2Ctrl', ['$scope', '$stateParams', 'Restangular', 'dfNotify', 'posts', function($scope, $stateParams, Restangular, dfNotify, posts){

        $scope.posts = [];
        $scope.count = 1;
        
        $scope.filters = angular.copy($stateParams);

        var page = 0;
        var limit = 15;

        $scope.loadData = function(page){
            $scope.loading = true;

            var params = _.extend($stateParams, {
                _limit: limit,
                _start: page * limit
            });

            Restangular.all('posts').getList(params).then(function(response){
                $scope.loading = false;

                $scope.count = response.headers('X-Total-Count');

                _.forEach(response.data, function(post){
                    $scope.posts.push(post);
                });

                if ($scope.posts.length > 0)
                    dfNotify.show('Exibindo ' + $scope.posts.length + ' de ' + $scope.count + ' itens');
            });
        }

        $scope.loadMore = function(){
            if ((page + 1) * limit < $scope.count) {
                page += 1;
                $scope.loadData(page);
            }
        }

        $scope.loadData(page);

        $scope.$on('scroll.reached-end', function(){
           $scope.loadMore();
        });

    }]);