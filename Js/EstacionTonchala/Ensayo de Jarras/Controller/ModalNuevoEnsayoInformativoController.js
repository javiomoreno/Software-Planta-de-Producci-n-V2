pprModController.controller('ModalNuevoEnsayoInformativoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var fechaNuevo = new Date();
      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length >= 6 && $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length < 12){
            $rootScope.tamanoTablaInformativo = parseInt($rootScope.tamanoTablaInformativo) + 190;
          }
          var n = $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length;
          var consecutivo = n / 6;

          for (var i = 0; i < 6; i++) {
            var registro = {
              id: i + n,
              enjacons: consecutivo,
              enjatipo: 2,
              estado: 2,
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
            $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.push(registro);
            $rootScope.registroEnsayoJarras.push(registro);
            $rootScope.banderaCantidadRegistrosInformativo = true;
          }
          $uibModalInstance.close();
        }
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
