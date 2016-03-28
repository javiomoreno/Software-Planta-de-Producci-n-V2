pprModController.controller('ModalNuevoEnsayoJarrasController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      $scope.Aceptar = function () {
        if($scope.planta !== undefined){
          if($rootScope.gridTonchalaJarras.gridOptions.data.length < 12){
            $rootScope.tamanoTabla = parseInt($rootScope.tamanoTabla) + 190;
          }
          var n = $rootScope.gridTonchalaJarras.gridOptions.data.length;
          for (var i = 0; i < 6; i++) {
            $rootScope.registroEnsayoJarras.push({
                'id': i + n,
                'fechaRegistro': new Date($rootScope.myDate),
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
          console.log($rootScope.registroEnsayoJarras);
          $uibModalInstance.close();
        }
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
