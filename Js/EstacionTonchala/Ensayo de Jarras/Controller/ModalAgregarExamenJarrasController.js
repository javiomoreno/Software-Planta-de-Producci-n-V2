pprModController.controller('ModalAgregarExamenJarrasController', [
                                                          '$scope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $uibModalInstance, $location){

      $scope.Agregar = function () {
        console.log("hola");
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
