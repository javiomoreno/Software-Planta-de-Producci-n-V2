pprModController.controller('EP-ModalNuevoEnsayoInformativoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var fechaNuevo = new Date();
      var conseMax = 0;
      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridPorticoJarrasInformativo.gridOptions.data.length >= 6 && $rootScope.gridPorticoJarrasInformativo.gridOptions.data.length < 12){
            $rootScope.tamanoTablaInformativo = parseInt($rootScope.tamanoTablaInformativo) + 190;
          }
          else if ($rootScope.gridPorticoJarrasInformativo.gridOptions.data.length === 0) {
            $rootScope.tamanoTablaInformativo = "260";
          }
          var n = $rootScope.gridPorticoJarrasInformativo.gridOptions.data.length;
          var consecutivo = n / 6;
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            if ($rootScope.registroEnsayoJarras[i].enjacons > conseMax) {
              conseMax = $rootScope.registroEnsayoJarras[i].enjacons;
            }
          }

          for (var i = 0; i < 6; i++) {
            var registro = {
              id: i + n,
              enjacons: conseMax + 1,
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
            $rootScope.gridPorticoJarrasInformativo.gridOptions.data.push(registro);
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
