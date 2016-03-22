pprModController.controller('EliminarEnsayoController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      $scope.Eliminar = function(){
        if($rootScope.gridTonchalaJarras.gridOptions.data.length > 0){
          if($rootScope.gridTonchalaJarras.gridOptions.data.length <= 12){
            $rootScope.tamanoTabla = parseInt($scope.tamanoTabla) - 190;
          }
          var n = $rootScope.gridTonchalaJarras.gridOptions.data.length;
          $rootScope.gridTonchalaJarras.gridOptions.data.splice(n-6,n);
        }
        $uibModalInstance.close();
      }

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
