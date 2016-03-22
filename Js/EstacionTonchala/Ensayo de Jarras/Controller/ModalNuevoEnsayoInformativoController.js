pprModController.controller('ModalNuevoEnsayoInformativoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length < 12){
            $rootScope.tamanoTablaInformativo = parseInt($rootScope.tamanoTablaInformativo) + 190;
          }
           var n = $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length;
          for (var i = 0; i < 6; i++) {
            $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.push({
                'id': i + n,
                'fechaRegistro': new Date($rootScope.myDateInformativo),
                'vasoNumero': i + 1,
                'planta': $scope.planta,
                'color': '',
                'turbiedad': '',
                'cuagulante': '',
                'sustancia': '',
                'ayudanteCuagulante': '',
                'tiempoFormacion': '',
                'indiceWilcomb': '',
                'tiempoSedimentacion': '',
                'dosis': '',
                'observacion': ''
              });
          }
          $uibModalInstance.close();
        }
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
