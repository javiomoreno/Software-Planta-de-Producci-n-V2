pprModController.controller('EP-InicioPorticoController', [
                                              '$scope',
                                              '$rootScope',
    function ($scope, $rootScope) {
      if($rootScope.pesatana === undefined){
        $rootScope.pesatana = {};
        $rootScope.pesatana.ensayo = true;
        $rootScope.pesatana.informativo = false;
      }
}]);
