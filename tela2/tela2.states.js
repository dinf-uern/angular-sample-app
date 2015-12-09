angular.module('app.tela2')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('main.tela2', {
        url: "/tela2?:q",
        params: {
          q:""
        },
        data: {
          title: 'Tela 2',
          leftSidenavPartialOnLarge: 'tela2/tela2.filters.html',
          leftSidenavFixedOnLarge: true,
          rightSidenavPartialOnSmall: 'tela2/tela2.filters.html',
          floatingButtons: [
            {
              caption: 'Criar novo',
              icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/content/svg/production/ic_create_24px.svg',
              action: {exec: function(){ window.alert('do some action') }}
            },
            {
              caption: 'Excluir',
              icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/content/svg/production/ic_inbox_24px.svg',
              action: {exec: function(){ window.alert('exclui o modelo') }}
            }
          ]
        },
        resolve: {
          posts: function(Restangular, $stateParams){
            return [];


            var params = {
              _start: parseInt($stateParams.start),
              _limit: parseInt($stateParams.limit),
              q: $stateParams.q
            };

            return Restangular.all('posts').getList(params);
          }
        },
        templateUrl: 'tela2/tela2.view.html',
        controller: 'Tela2Ctrl'
      });
  }]);
