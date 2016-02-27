pprModDirective.directive('menuAdmin', function () {
      return {
        restrict: 'E',
        templateUrl: 'Js/Usuario/HTML/menu-admin.html'
      };
    });

pprModDirective.directive('submenuAdmin', 
  function () {
      return {
        restrict: 'E',
        templateUrl: 'Js/Usuario/HTML/submenu-admin.html'
      };
    });