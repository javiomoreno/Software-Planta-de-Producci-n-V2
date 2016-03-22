pprModController.controller('EliminarEnsayoInformativoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      $scope.Eliminar = function(){
        if($rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length > 0){
          if($rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length <= 12){
            $rootScope.tamanoTablaInformativo = parseInt($scope.tamanoTablaInformativo) - 190;
          }
          var n = $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.length;
          $rootScope.gridTonchalaJarrasInformativo.gridOptions.data.splice(n-6,n);
        }
        $uibModalInstance.close();
      }

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
