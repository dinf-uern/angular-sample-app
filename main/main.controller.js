angular.module('app.main')
    .controller('MainCtrl', ['$rootScope', '$scope', '$state', 'dfSidenav', 'dfAuth', 'dfNotify', function($rootScope, $scope, $state, dfSidenav, dfAuth, dfNotify){

        $scope.getTitle = function(){
            return $state.current.data.title;
        }
        
        $scope.getLeftSidenavPartialOnLarge = function(){
            return $state.current.data.leftSidenavPartialOnLarge;
        }
        
        $scope.getLeftSidenavPartialOnSmall = function(){
            return $state.current.data.leftSidenavPartialOnSmall;
        }
        
        $scope.getLeftSidenavFixedOnSmall = function(){
            return $state.current.data.leftSidenavFixedOnSmall;
        }
        
        $scope.getLeftSidenavFixedOnLarge = function(){
            return $state.current.data.leftSidenavFixedOnLarge;
        }

        $scope.getRightSidenavPartialOnLarge = function(){
            return $state.current.data.rightSidenavPartialOnLarge;
        }

        $scope.getRightSidenavPartialOnSmall = function(){
            return $state.current.data.rightSidenavPartialOnSmall;
        }

        $scope.getRightSidenavFixedOnSmall = function(){
            return $state.current.data.rightSidenavFixedOnSmall;
        }

        $scope.getRightSidenavFixedOnLarge = function(){
            return $state.current.data.rightSidenavFixedOnLarge;
        }

        $scope.getLeftButtons = function(){
            return $state.current.data.leftButtons;
        }

        $scope.getRightButtons = function(){
            return $state.current.data.rightButtons;
        }

        $scope.getFloatingButtons = function(){
            return $state.current.data.floatingButtons;
        }


        $scope.$on('left-sidenav.toggle', function(){
            dfSidenav.toggle('left');
        });

        $scope.$on('right-sidenav.toggle', function(){
            dfSidenav.toggle('right');
        });

        $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
           if (toState.data.roles && !dfAuth.hasRole(toState.data.roles)){
               dfNotify.show('Acesso negado!');
               event.preventDefault();
           }
        });

        $scope.scrollReachedEnd = function(){
            console.log('reached end');
            $rootScope.$broadcast('scroll.reached-end');
        }


    }]);