angular.module('app.tela1')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('main.admin', {
        url: "/admin",
        data: {
          title: 'Admin area',
          leftSidenavPartialOnLarge: 'admin/admin.filters.html',
          leftSidenavFixedOnLarge: true,
          rightSidenavPartialOnSmall: 'admin/admin.filters.html',
          floatingButtons: [
            {
              caption: 'Criar novo',
              icon: 'https://raw.githubusercontent.com/google/material-design-icons/master/content/svg/production/ic_content_copy_24px.svg',
              action: {exec: function(){ window.alert('do some action') }}
            },
          ],
          roles: ['admin']
        },
        templateUrl: 'admin/admin.view.html',
        controller: 'AdminCtrl'
      });
  }]);