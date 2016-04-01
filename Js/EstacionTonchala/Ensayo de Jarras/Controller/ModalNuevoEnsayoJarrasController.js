pprModController.controller('ModalNuevoEnsayoJarrasController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var fechaNuevo = new Date();
      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridTonchalaJarras.gridOptions.data.length >= 6 && $rootScope.gridTonchalaJarras.gridOptions.data.length < 12){
            $rootScope.tamanoTabla = parseInt($rootScope.tamanoTabla) + 190;
          }
          var n = $rootScope.gridTonchalaJarras.gridOptions.data.length;
          var consecutivo = n / 6;
          var fecha = new Date( new Date(fechaNuevo).getFullYear(), new Date(fechaNuevo).getMonth(), new Date(fechaNuevo).getDate());
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
            if (new Date(fecha2).getTime() == new Date(fecha).getTime() && $rootScope.registroEnsayoJarras.enjatipo === 1) {
              $rootScope.registroEnsayoJarras[i].estado = 2;
            }
          }
          for (var i = 0; i < 6; i++) {
            var registro = {
              id: i + n,
              enjacons: consecutivo,
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
            $rootScope.gridTonchalaJarras.gridOptions.data.push(registro);
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
