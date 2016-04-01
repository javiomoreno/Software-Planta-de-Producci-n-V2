pprModController.controller('ModalAgregarExamenJarrasController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
    function ($scope, $rootScope, $uibModalInstance, $location){

      var fecha = new Date();
      var fecha = new Date( new Date(fecha).getFullYear(), new Date(fecha).getMonth(), new Date(fecha).getDate());

      if ($rootScope.registro.estado === 1) {
        $scope.checkboxModel = {
				   value : true
			 	};
			}
			else{
				$scope.checkboxModel = {
				   value : false
			 	};
      }

      $scope.cambiarEstado = function() {
        if($rootScope.registro.estado === 1){
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
            if(new Date(fecha2).getTime() == new Date(fecha).getTime() && $rootScope.registroEnsayoJarras[i].enjatipo === 1){
              if ($rootScope.registroEnsayoJarras[i].enjacons === $rootScope.registro.enjacons) {
                $rootScope.registroEnsayoJarras[i].estado = 2;
              }
              else {
                $rootScope.registroEnsayoJarras[i].estado = 1;
              }
            }
          }
          for (var i = 0; i < $rootScope.gridTonchalaJarras.gridOptions.data.length; i++) {
            if ( $rootScope.gridTonchalaJarras.gridOptions.data[i].enjacons === $rootScope.registro.enjacons) {
              $rootScope.gridTonchalaJarras.gridOptions.data[i].estado = 2;
            }
            else {
              $rootScope.gridTonchalaJarras.gridOptions.data[i].estado = 1;
            }
          }
        }
        else{
          for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
            var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
            if(new Date(fecha2).getTime() == new Date(fecha).getTime() && $rootScope.registroEnsayoJarras[i].enjatipo === 1){
              if ($rootScope.registroEnsayoJarras[i].enjacons === $rootScope.registro.enjacons) {
                $rootScope.registroEnsayoJarras[i].estado = 1;
              }
              else {
                $rootScope.registroEnsayoJarras[i].estado = 2;
              }
            }
          }
          for (var i = 0; i < $rootScope.gridTonchalaJarras.gridOptions.data.length; i++) {
            if ( $rootScope.gridTonchalaJarras.gridOptions.data[i].enjacons === $rootScope.registro.enjacons) {
               $rootScope.gridTonchalaJarras.gridOptions.data[i].estado = 1;
            }
            else {
              $rootScope.gridTonchalaJarras.gridOptions.data[i].estado = 2;
            }
          }
        }
    	}

      $scope.Agregar = function () {
        console.log("hola");
      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };
}]);
