pprModController.controller('ModalFiltrarController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      $scope.a = {};
      $scope.a.filtro = "";

      $scope.Filtrar = function () {
        $rootScope.datoFiltrar = $scope.a.filtro;
        console.log($rootScope.datoFiltrar);
        $uibModalInstance.close();
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
