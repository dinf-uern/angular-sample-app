angular.module('app.tela1')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('main.tela1', {
        url: "/tela1",
        data: {
          title: 'Tela 1',
          leftSidenavPartialOnLarge: 'tela1/tela1.filters.html',
          leftSidenavFixedOnLarge: true,
          rightSidenavPartialOnSmall: 'tela1/tela1.filters.html',
          floatingButtons: [
            {
              caption: 'Criar novo',
              icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/content/svg/production/ic_content_copy_24px.svg',
              action: {exec: function(){ window.alert('do some action') }}
            },
          ]

        },
        templateUrl: 'tela1/tela1.view.html',
        controller: 'Tela1Ctrl'
      });
  }]);