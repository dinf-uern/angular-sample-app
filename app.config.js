var app = angular.module('app', [
    'df.shell',
    'ngMaterial',
    'ui.router',
    'restangular',
    'lrInfiniteScroll',
    'app.main',
    'app.home',
    'app.tela1',
    'app.tela2',
    'app.admin'
]);

    app.config(['$urlRouterProvider','$mdThemingProvider', 'dfMainMenuProvider', 'RestangularProvider', function($urlRouterProvider, $mdThemingProvider, dfMainMenuProvider, RestangularProvider) {

        $mdThemingProvider
            .theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('orange')
            .warnPalette('deep-orange');

        //$mdThemingProvider.setDefaultTheme('myTheme');

        $urlRouterProvider.otherwise("/");


        var menuItems = [
            { caption: 'home', action: {state: 'main.home'} },
            { caption: 'tela1', action: {state: 'main.tela1'} },
            { caption: 'tela2', action: {state: 'main.tela2'} },
            { caption: 'admin', action: {state: 'main.admin'}, roles: ['admin'] }
        ];

        menuItems.forEach(dfMainMenuProvider.addItem);

        RestangularProvider.setBaseUrl('http://localhost:3000/');
        RestangularProvider.setFullResponse(true);

    }]);