pprModController.controller('EstacionTonchalaEnsayoJarrasIndexController', [
                                                        '$scope',
                                                        '$rootScope',
                                                        '$location',
                                                        '$uibModal',
                                                        '$route',
    function ($scope, $rootScope, $location, $uibModal, $route) {

      if ($rootScope.fechaBusqueda !== undefined) {
        $rootScope.myDate = new Date($rootScope.fechaBusqueda);
      }
      else{
        $rootScope.myDate = new Date();
      }

      $scope.a = {};
      $scope.a.fechaVista = '';
      var datos = [];
      $rootScope.tamanoTabla = "295";
      $scope.botonEditarFila = false;
      $scope.gridOptions = {};
    	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    	$scope.datos = [];
    	$rootScope.fecha = dias[new Date($rootScope.myDate).getDay()];
    	$rootScope.fecha = $rootScope.fecha +" "+ new Date($rootScope.myDate).getDate();
      $rootScope.fecha = $rootScope.fecha +", "+ meses[new Date($rootScope.myDate).getMonth()];
      $rootScope.fecha = $rootScope.fecha+" de "+new Date($rootScope.myDate).getFullYear();

    	$rootScope.registro = {};
      $rootScope.gridTonchalaJarras = {};

    	$rootScope.plantasTonchala = [
    		{id: 1, planta: 'P1'}];

    	$rootScope.sustancias = [
    		{id: 1, sustancia: 'Hidroxiclururo'},
    		{id: 2, sustancia: 'Sulfato'}];

		  $rootScope.dosiss = [
    		{id: 1, dosis: 'N/A'},
    		{id: 2, dosis: 'Dosis Aplicar'},
    		{id: 3, dosis: 'Dosis Optima'}];

      var ValidarEntero = "<div><form name=\"inputForm\"><input step=\"any\" type=\"NUMBER\" ng-class=\"'colt' + col.uid\" ui-grid-editor ng-model=\"MODEL_COL_FIELD\"  minlength=1 maxlength=10 required></form></div>";

      $rootScope.gridTonchalaJarras.gridOptions = {
        enableColumnMenus: false,
        enableFiltering: true,
        enableRowSelection: true,
        paginationPageSizes: [6, 12, 24, 30, 60],
        paginationPageSize: 60,
        columnDefs: [
          {field: 'id',  visible: false},
          {field: 'fechaRegistro', enableCellEdit: false, displayName: 'Fecha Registro', width: "10%", type: 'date', cellFilter: 'date:"dd/MM/yyyy"'},
          {field: 'vasoNumero', enableCellEdit: false, displayName: 'Vaso', width: "5%"},
          {field: 'planta', enableCellEdit: false, displayName: 'Planta', width: "10%", editableCellTemplate: 'ui-grid/dropdownEditor',
              cellFilter: 'mapPlanta', editDropdownValueLabel: 'planta', editDropdownOptionsArray: $rootScope.plantas},
          {field: 'color', width: "10%", displayName: 'Color (UPC)', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'turbiedad', width: "15%", displayName: 'Turbiedad (UNT)', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'cuagulante', width: "10%", displayName: 'Cuagulante', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'sustancia', width: "10%", displayName: 'Sustancia', editableCellTemplate: 'ui-grid/dropdownEditor',
              cellFilter: 'mapSustancia', editDropdownValueLabel: 'sustancia', editDropdownOptionsArray: $rootScope.sustancias},
          {field: 'ayudanteCuagulante', width: "18%", displayName: 'Ayudante de Coagulación'},
          {field: 'tiempoFormacion', width: "15%", enableColumnMenu: false, editableCellTemplate: ValidarEntero,
                cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                  if (grid.getCellValue(row,col) >= 10) {
                    return 'red';
                  }
                }, displayName: 'Tiempo de Formación'},
          {field: 'indiceWilcomb', width: "15%", displayName: 'Indice de Wilcomb', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'tiempoSedimentacion', width: "20%", displayName: 'Tiempo de Sedimentacion (min)', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'dosis', width: "10%", displayName: 'Dosis' ,editableCellTemplate: 'ui-grid/dropdownEditor',
              cellFilter: 'mapDosiss', editDropdownValueLabel: 'dosis', editDropdownOptionsArray: $rootScope.dosiss,  enableColumnMenu: false,
              cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == 2) {
                  return 'green';
                }
                else if(grid.getCellValue(row,col) == 3){
                  return 'blue';
                }
              }
            },
          {field: 'observacion', width: "15%", displayName: 'Observación'}
         ]
      };

    	for (var i = 0; i < 6; i++) {
      	$scope.datos[i] = {
            'id': i,
            'fechaRegistro': new Date($rootScope.myDate),
            'vasoNumero': i + 1,
            'planta': 1,
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
        }
    	}
		  $rootScope.gridTonchalaJarras.gridOptions.data = $scope.datos;

  		$scope.selectRow = function(){
  			if ($scope.gridApi.selection.getSelectedRows().length === 1) {
  				$rootScope.registro = $scope.gridApi.selection.getSelectedRows()[0];
  		    	$scope.openModal('md');
  		    }
  		};

    	$rootScope.gridTonchalaJarras.gridOptions.onRegisterApi = function(gridApi){
	      $scope.gridApi = gridApi;
	    };

       $scope.nuevoEnsayo = function() {
        if($rootScope.gridTonchalaJarras.gridOptions.data.length < 12){
          $scope.tamanoTabla = parseInt($scope.tamanoTabla) + 190;
        }
         var n = $rootScope.gridTonchalaJarras.gridOptions.data.length + 1;
        for (var i = 0; i < 6; i++) {
          $rootScope.gridTonchalaJarras.gridOptions.data.push({
              'id': i + n,
              'fechaRegistro': new Date(myDate),
              'vasoNumero': i + 1,
              'planta': '',
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
      };

      $scope.eliminarEnsayo = function() {
        if($rootScope.gridTonchalaJarras.gridOptions.data.length > 0){
          if($rootScope.gridTonchalaJarras.gridOptions.data.length <= 12){
            $rootScope.tamanoTabla = parseInt($scope.tamanoTabla) - 190;
          }
          var n = $rootScope.gridTonchalaJarras.gridOptions.data.length;
          $rootScope.gridTonchalaJarras.gridOptions.data.splice(n-6,n);
        }
      };

      $scope.exportarCSV = function() {
        var myElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
        $scope.gridApi.exporter.csvExport( 'all', 'all', myElement );
      };

      $scope.exportarPDF = function() {
        $scope.gridApi.exporter.pdfExport( 'all', 'all' );
      };


	    $scope.animationsEnabled = true;

    	$scope.openModal = function (size) {
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/modalAgregarExamenJarras.html',
          controller: 'EstacionTonchalaModalAgregarExamenJarrasController',
          size: size
        });
    	};

      $scope.openModalNuevo = function (size){
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/modalNuevoEnsayo.html',
          controller: 'EstacionTonchalaModalNuevoEnsayoJarrasController',
          size: size
        });
      };

      $scope.buscarFecha = function(){
        $rootScope.fechaBusqueda = $scope.a.fechaVista;
        $route.reload();
      };

      $scope.today = function() {
          $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function () {
          $scope.dt = null;
      };

      // Disable weekend selection
      $scope.disabled = function(date, mode) {
          return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
      };

      $scope.toggleMin = function() {
          $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();
      $scope.maxDate = new Date(2020, 5, 22);

      $scope.open = function($event) {
          $scope.status.opened = true;
      };

      $scope.setDate = function(year, month, day) {
          $scope.dt = new Date(year, month, day);
      };

      $scope.dateOptions = {
          formatYear: 'yy',
          startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

      $scope.status = {
          opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
          [
              {
                  date: tomorrow,
                  status: 'full'
              },
              {
                  date: afterTomorrow,
                  status: 'partially'
              }
          ];

      $scope.getDayClass = function(date, mode) {
          if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i=0;i<$scope.events.length;i++){
                  var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                  if (dayToCheck === currentDay) {
                      return $scope.events[i].status;
                  }
              }
          }

          return '';
      };

      $scope.mytime = new Date();

      $scope.hstep = 1;
      $scope.mstep = 1;
      $scope.ismeridian = true;
}])

.filter('mapVaso', function() {
  var genderHash = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6'
  };
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
})

.filter('mapPlanta', function() {
  var genderHash = {
    1: 'P1'
  };
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
})

.filter('mapSustancia', function() {
  var genderHash = {
    1: 'Hidroxiclururo',
    2: 'Sulfato'
  };
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
})

.filter('mapDosiss', function() {
  var genderHash = {
    1: 'N/A',
    2: 'Dosis Aplicar',
    3: 'Dosis Optima'
  };
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
})
