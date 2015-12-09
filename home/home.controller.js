angular.module('app.home')
    .controller('HomeCtrl', ['$scope', 'dfNotify', '$mdMedia', 'dfAuth', function($scope, dfNotify, $mdMedia, dfAuth){
        $scope.$mdMedia = $mdMedia;

        $scope.notify = function(){
            dfNotify.show('this is a notify!');
        }

        $scope.fazerLogin = function(){
            dfAuth.login('luisinweb@gmail.com', 'somepass');
        }

        $scope.fazerLogout = function(){
            dfAuth.logout();
        }

    }]);