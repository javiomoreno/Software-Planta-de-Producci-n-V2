pprModController.controller('EP-EliminarEnsayoInformativoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var fecha = new Date();
      var idEliminar = 0;
      $scope.Eliminar = function(){
        if($rootScope.gridPorticoJarrasInformativo.gridOptions.data.length > 0){
          if($rootScope.gridPorticoJarrasInformativo.gridOptions.data.length <= 12){
            $rootScope.tamanoTablaInformativo = parseInt($scope.tamanoTablaInformativo) - 190;
          }
          var n = $rootScope.gridPorticoJarrasInformativo.gridOptions.data.length;
          $rootScope.gridPorticoJarrasInformativo.gridOptions.data.splice(n-6,n);
          if ($rootScope.gridPorticoJarrasInformativo.gridOptions.data.length === 0) {
            $rootScope.banderaCantidadRegistrosInformativo = false;
          }
          fecha = new Date( new Date(fecha).getFullYear(), new Date(fecha).getMonth(), new Date(fecha).getDate());
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
              if (new Date(fecha).getTime() == new Date(fecha2).getTime() && $rootScope.registroEnsayoJarras[i].enjatipo === 2) {
                if ($rootScope.registroEnsayoJarras[i].enjacons > idEliminar) {
                  idEliminar = $rootScope.registroEnsayoJarras[i].enjacons;
                }
              }
          }

          for (var i = ($rootScope.registroEnsayoJarras.length - 1); i >= 0 ; i--) {
            if ($rootScope.registroEnsayoJarras[i].enjacons === idEliminar && $rootScope.registroEnsayoJarras[i].enjatipo === 2) {
              $rootScope.registroEnsayoJarras.splice(i,1);
            }
          }
        }
        $uibModalInstance.close();
      }

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
