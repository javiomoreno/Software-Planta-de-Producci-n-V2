pprModController.controller('ModalAgregarExamenJarrasController', [
                                                          '$scope',
                                                          '$rootScope',
                                                          '$uibModalInstance',
                                                          '$location',
                                                          'uiGridConstants',
    function ($scope, $rootScope, $uibModalInstance, $location, uiGridConstants){

      $scope.datosRegisto = clone($rootScope.registro);

      function clone( obj ) {
          if ( obj === null || typeof obj  !== 'object' ) {
              return obj;
          }

          var temp = obj.constructor();
          for ( var key in obj ) {
              temp[ key ] = clone( obj[ key ] );
          }

          return temp;
      }

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

      $scope.Guardar = function () {
        var banderaGuardo = true;
        if ($scope.isValidarCampos()) {
          if ($scope.datosRegisto.dosis !== 1) {
            var banderaDA = false;
            var banderaDO = false;
            for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
              if ($rootScope.registroEnsayoJarras[i].id !== $scope.datosRegisto.id) {
                if ($rootScope.registroEnsayoJarras[i].enjacons === $scope.datosRegisto.enjacons) {
                  if ($rootScope.registroEnsayoJarras[i].dosis === 2) {
                    banderaDA = true;
                  }
                  else if ($rootScope.registroEnsayoJarras[i].dosis === 3) {
                    banderaDO = true;
                  }
                }
              }
            }
            if (banderaDA && $scope.datosRegisto.dosis === 2) {
              $scope.datosRegisto.dosis = '';
              alert('Ya existe una Dosis a Aplicar');
              banderaGuardo = false;
            }
            else if (banderaDO && $scope.datosRegisto.dosis === 3) {
              $scope.datosRegisto.dosis = '';
              alert('Ya existe una Dosis Optima');
              banderaGuardo = false;
            }
          }
          if (banderaGuardo) {
            for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
              if ($rootScope.registroEnsayoJarras[i].enjacons === $scope.datosRegisto.enjacons && new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getTime() === new Date($scope.datosRegisto.fechaRegistro).getTime() && $rootScope.registroEnsayoJarras[i].id === $scope.datosRegisto.id) {
                $rootScope.registroEnsayoJarras[i] = $scope.datosRegisto;
              }
            }
            for (var i = 0; i < $rootScope.gridTonchalaJarras.gridOptions.data.length; i++) {
              if ($rootScope.gridTonchalaJarras.gridOptions.data[i].id === $scope.datosRegisto.id) {
                $rootScope.gridTonchalaJarras.gridOptions.data[i].color = $scope.datosRegisto.color;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].turbiedad = $scope.datosRegisto.turbiedad;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].cuagulante = $scope.datosRegisto.cuagulante;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].sustancia = $scope.datosRegisto.sustancia;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].ayudanteCuagulante = $scope.datosRegisto.ayudanteCuagulante;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].tiempoFormacion = $scope.datosRegisto.tiempoFormacion;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].indiceWilcomb = $scope.datosRegisto.indiceWilcomb;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].tiempoSedimentacion = $scope.datosRegisto.tiempoSedimentacion;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].dosis = $scope.datosRegisto.dosis;
                $rootScope.gridTonchalaJarras.gridOptions.data[i].observacion = $scope.datosRegisto.observacion;
              }
            }
            $rootScope.gridApiTonchala.core.refresh();
            $rootScope.gridApiTonchala.core.notifyDataChange( uiGridConstants.dataChange.ALL );
            $uibModalInstance.close();
          }
        }
        else {
          console.log("chao");
        }

      };

      $scope.Cancelar = function () {
          $uibModalInstance.dismiss('no');
      };

      $scope.isValidarCampos = function(){
        if( angular.isUndefined($scope.datosRegisto.color) ||
          angular.isUndefined($scope.datosRegisto.turbiedad) ||
          angular.isUndefined($scope.datosRegisto.cuagulante) ||
          angular.isUndefined($scope.datosRegisto.sustancia) ||
          angular.isUndefined($scope.datosRegisto.ayudanteCuagulante) ||
          angular.isUndefined($scope.datosRegisto.tiempoFormacion) ||
          angular.isUndefined($scope.datosRegisto.indiceWilcomb) ||
          angular.isUndefined($scope.datosRegisto.tiempoSedimentacion) ||
          angular.isUndefined($scope.datosRegisto.dosis) ||
          angular.isUndefined($scope.datosRegisto.observacion) ||
          $scope.datosRegisto.color == null ||
          $scope.datosRegisto.turbiedad == null ||
          $scope.datosRegisto.cuagulante == null ||
          $scope.datosRegisto.sustancia == null ||
          $scope.datosRegisto.ayudanteCuagulante == null ||
          $scope.datosRegisto.tiempoFormacion == null ||
          $scope.datosRegisto.indiceWilcomb == null ||
          $scope.datosRegisto.tiempoSedimentacion == null ||
          $scope.datosRegisto.dosis == null ||
          $scope.datosRegisto.observacion == null ||
          $scope.datosRegisto.color == '' ||
          $scope.datosRegisto.turbiedad == '' ||
          $scope.datosRegisto.cuagulante == '' ||
          $scope.datosRegisto.sustancia == '' ||
          $scope.datosRegisto.ayudanteCuagulante == '' ||
          $scope.datosRegisto.tiempoFormacion == '' ||
          $scope.datosRegisto.indiceWilcomb == '' ||
          $scope.datosRegisto.tiempoSedimentacion == '' ||
          $scope.datosRegisto.dosis == '' ||
          $scope.datosRegisto.observacion == ''
        ){
          return false;
        }
        else{
          return true;
        }
      }
}]);
