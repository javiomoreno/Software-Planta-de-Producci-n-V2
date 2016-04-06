pprModController.controller('EP-ModalNuevoEnsayoJarrasController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var conseMax = 0;
      var fechaNuevo = new Date();
      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridPorticoJarras.gridOptions.data.length >= 6 && $rootScope.gridPorticoJarras.gridOptions.data.length < 12){
            $rootScope.tamanoTabla = parseInt($rootScope.tamanoTabla) + 190;
          }
          else if ($rootScope.gridPorticoJarras.gridOptions.data.length === 0) {
            $rootScope.tamanoTabla = "260";
          }
          var n = $rootScope.gridPorticoJarras.gridOptions.data.length;
          var consecutivo = n / 6;
          var fecha = new Date( new Date(fechaNuevo).getFullYear(), new Date(fechaNuevo).getMonth(), new Date(fechaNuevo).getDate());
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
            if (new Date(fecha2).getTime() == new Date(fecha).getTime() && $rootScope.registroEnsayoJarras[i].enjatipo === 1 && ($rootScope.registroEnsayoJarras[i].planta === 2 || $rootScope.registroEnsayoJarras[i].planta === 3 || $rootScope.registroEnsayoJarras[i].planta === 4)) {
              $rootScope.registroEnsayoJarras[i].estado = 2;
            }
            if ($rootScope.registroEnsayoJarras[i].enjacons > conseMax) {
              conseMax = $rootScope.registroEnsayoJarras[i].enjacons;
            }
          }
          for (var i = 0; i < $rootScope.gridPorticoJarras.gridOptions.data.length; i++) {
            $rootScope.gridPorticoJarras.gridOptions.data[i].estado = 2;
          }
          for (var i = 0; i < 6; i++) {
            var registro = {
              id: i + n,
              enjacons: conseMax + 1,
              enjatipo: 1,
              estado: 1,
              fechaRegistro: new Date(fechaNuevo),
              vasoNumero: i + 1,
              planta: $scope.planta,
              color: '',
              turbiedad: '',
              cuagulante: '',
              sustancia: '',
              ayudanteCuagulante: '',
              tiempoFormacion: '',
              indiceWilcomb: '',
              tiempoSedimentacion: '',
              dosis: '',
              observacion: ''
            };
            $rootScope.gridPorticoJarras.gridOptions.data.push(registro);
            $rootScope.registroEnsayoJarras.push(registro);
            $rootScope.banderaCantidadRegistros = true;
          }
          $uibModalInstance.close();
        }
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
