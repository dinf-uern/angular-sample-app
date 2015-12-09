angular.module('app.home')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('main.home', {
                url: "/",
                data: {
                    title: 'Home',
                    rightButtons: [],
                    leftSidenavFixedOnLarge: false
                },
                templateUrl: 'home/home.view.html',
                controller: 'HomeCtrl'
            });
    }]);
