pprModDirective.directive('menuAdmin', function () {
      return {
        restrict: 'E',
        templateUrl: 'Js/Usuario/Html/menu-admin.html'
      };
    });

pprModDirective.directive('submenuAdmin', 
  function () {
      return {
        restrict: 'E',
        templateUrl: 'Js/Usuario/Html/submenu-admin.html'
      };
    });