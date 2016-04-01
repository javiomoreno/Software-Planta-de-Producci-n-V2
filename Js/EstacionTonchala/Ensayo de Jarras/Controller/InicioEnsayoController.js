pprModController.controller('InicioEnsayoController', [
                                                        '$scope',
                                                        '$rootScope',
                                                        '$location',
                                                        '$uibModal',
                                                        '$route',
                                                        'uiGridConstants',
                                                        'localStorageService',
    function ($scope, $rootScope, $location, $uibModal, $route, uiGridConstants, localStorageService) {

      $rootScope.datoFiltrar = ""
      $scope.datos = [];
      $rootScope.banderaCantidadRegistros = false;
      var fecha = {};
      var cantidadRegistros = 0;

      var todosInStore = localStorageService.get('ensayoJarras');

      $rootScope.registroEnsayoJarras = todosInStore || [];

      $scope.$watch('registroEnsayoJarras', function(){
        localStorageService.add('ensayoJarras', $rootScope.registroEnsayoJarras);
      }, true);

      if ($rootScope.fechaBusqueda !== undefined) {
        $rootScope.myDate = new Date($rootScope.fechaBusqueda);
        fecha = new Date( new Date($rootScope.myDate).getFullYear(), new Date($rootScope.myDate).getMonth(), new Date($rootScope.myDate).getDate());
      }
      else{
        $rootScope.myDate = new Date();
        fecha = new Date( new Date($rootScope.myDate).getFullYear(), new Date($rootScope.myDate).getMonth(), new Date($rootScope.myDate).getDate());
      }

      for (var i = 0; i < $rootScope.registroEnsayoJarras.length; i++) {
        var fecha2 = new Date( new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getFullYear(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getMonth(), new Date($rootScope.registroEnsayoJarras[i].fechaRegistro).getDate());
        if (new Date(fecha2).getTime() == new Date(fecha).getTime() && $rootScope.registroEnsayoJarras[i].enjatipo == 1) {
          $scope.datos.push($rootScope.registroEnsayoJarras[i]);
          $rootScope.banderaCantidadRegistros = true;
          cantidadRegistros ++;
        }
      }

      $scope.a = {};
      $scope.a.fechaVista = '';
      if (cantidadRegistros > 6) {
        $rootScope.tamanoTabla = "455";
      }
      else {
        $rootScope.tamanoTabla = "260";
      }
      $scope.botonEditarFila = false;
    	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    	$rootScope.fecha = dias[new Date($rootScope.myDate).getDay()];
    	$rootScope.fecha = $rootScope.fecha +" "+ new Date($rootScope.myDate).getDate();
      $rootScope.fecha = $rootScope.fecha +", "+ meses[new Date($rootScope.myDate).getMonth()];
      $rootScope.fecha = $rootScope.fecha+" de "+new Date($rootScope.myDate).getFullYear();

    	$rootScope.registro = {};
      $rootScope.gridTonchalaJarras = {};

    	$rootScope.plantasTonchala = [
    		{id: 1, planta: 'P1'}];

      $rootScope.estados = [
      		{id: 1, estado: 'Activo'},
          {id: 2, estado: 'Inactivo'}];

    	$rootScope.sustancias = [
    		{id: 1, sustancia: 'Hidroxiclururo'},
    		{id: 2, sustancia: 'Sulfato'}];

		  $rootScope.dosiss = [
    		{id: 1, dosis: 'N/A'},
    		{id: 2, dosis: 'Dosis Aplicar'},
    		{id: 3, dosis: 'Dosis Optima'}];

      var ValidarEntero = "<div><form name=\"inputForm\"><input step=\"any\" type=\"NUMBER\" ng-class=\"'colt' + col.uid\" ui-grid-editor ng-model=\"MODEL_COL_FIELD\"  minlength=1 maxlength=10 required></form></div>";

      $rootScope.gridTonchalaJarras.gridOptions = {
        enableColumnMenus: true,
        enableFiltering: true,
        paginationPageSizes: [6, 12, 24, 30, 60],
        paginationPageSize: 60,
        enableSorting: true,
        columnDefs: [
          {field: 'id', displayName: '', enableColumnMenu: false, enableSorting: false, cellEditableCondition: false, enableFiltering: false,
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (parImpar(grid.getCellValue(row,col)/6) === "par") {
                return 'primero';
              }
              else {
                return 'segundo';
              }
            },
            cellTemplate: '<div style="text-align: center;padding-top: 5px;"><a style="color:#307ecc" href ng-click="grid.appScope.generateReport(row)"><i class="ace-icon fa fa-pencil bigger-130"></i></a></div>' },
          {field: 'estado', enableHiding: false, enableFiltering: false, enableCellEdit: false, enableHiding: false, displayName: 'Estado', width: "10%", editableCellTemplate: 'ui-grid/dropdownEditor',
                cellFilter: 'mapEstados', editDropdownValueLabel: 'estado', editDropdownOptionsArray: $rootScope.estados},
          {field: 'fechaRegistro', enableHiding: false, enableFiltering: false, enableCellEdit: false, displayName: 'Fecha Registro', width: "10%",
            type: 'date', cellFilter: 'date:"dd/MM/yyyy"',
            sort: {
              direction: uiGridConstants.DESC,
              priority: 1
            }
           },
          {field: 'vasoNumero', enableHiding: false, enableFiltering: false, enableCellEdit: false, displayName: 'Vaso', width: "5%"},
          {field: 'planta', enableHiding: false, enableFiltering: false, enableCellEdit: false, displayName: 'Planta', width: "10%", editableCellTemplate: 'ui-grid/dropdownEditor',
              cellFilter: 'mapPlanta', editDropdownValueLabel: 'planta', editDropdownOptionsArray: $rootScope.plantas},
          {field: 'color', enableHiding: false, enableFiltering: false, width: "10%", displayName: 'Color (UPC)', enableColumnMenu: true, editableCellTemplate: ValidarEntero},
          {field: 'turbiedad', enableHiding: false, enableFiltering: false, width: "15%", displayName: 'Turbiedad (UNT)', enableColumnMenu: true, editableCellTemplate: ValidarEntero},
          {field: 'cuagulante', enableHiding: false, enableFiltering: false, width: "10%", displayName: 'Cuagulante', enableColumnMenu: true, editableCellTemplate: ValidarEntero},
          {field: 'sustancia', enableHiding: false, enableFiltering: false, width: "10%", displayName: 'Sustancia', editableCellTemplate: 'ui-grid/dropdownEditor',
              cellFilter: 'mapSustancia', editDropdownValueLabel: 'sustancia', editDropdownOptionsArray: $rootScope.sustancias},
          {field: 'ayudanteCuagulante', enableHiding: false, enableFiltering: false, width: "18%", displayName: 'Ayudante de Coagulación'},
          {field: 'tiempoFormacion', enableHiding: false, enableFiltering: false, width: "15%", enableColumnMenu: false, editableCellTemplate: ValidarEntero,
                cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                  if (grid.getCellValue(row,col) >= 10) {
                    return 'red';
                  }
                }, displayName: 'Tiempo de Formación'},
          {field: 'indiceWilcomb', enableHiding: false, enableFiltering: false, width: "15%", displayName: 'Indice de Wilcomb', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'tiempoSedimentacion', enableHiding: false, enableFiltering: false, width: "20%", displayName: 'Tiempo de Sedimentacion (min)', enableColumnMenu: false, editableCellTemplate: ValidarEntero},
          {field: 'dosis', enableFiltering: false, width: "10%", displayName: 'Dosis' ,editableCellTemplate: 'ui-grid/dropdownEditor',
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
          {field: 'observacion', enableHiding: false, enableFiltering: false,  width: "15%", displayName: 'Observación',
            filter: {
                noTerm: true,
                condition: function(searchTerm, cellValue) {
                  return cellValue.indexOf($rootScope.datoFiltrar) >= 0;
                }
              } , menuItems:
              [
                {
                    title: 'Filtrar',
                    action: function ($event) {
                      $scope.openModalFiltrar('sm');
                    }
                }
              ]
            }
        ]
      };

		  $rootScope.gridTonchalaJarras.gridOptions.data = $scope.datos;

      $scope.generateReport = function(row) {
          $rootScope.registro = row.entity;
          $scope.openModal('md');
      };

    	$rootScope.gridTonchalaJarras.gridOptions.onRegisterApi = function(gridApi){
	      $scope.gridApi = gridApi;
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
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/vistas/ensayo/modalAgregarExamenJarras.html',
          controller: 'ModalAgregarExamenJarrasController',
          size: size
        });
    	};

      $scope.openModalNuevo = function (size){
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/vistas/ensayo/modalNuevoEnsayo.html',
          controller: 'ModalNuevoEnsayoJarrasController',
          size: size
        });
      };

      $scope.openModalEliminar = function (size){
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/vistas/ensayo/modalEliminarEnsayo.html',
          controller: 'EliminarEnsayoController',
          size: size
        });
      };

      $scope.openModalFiltrar = function (size) {
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/partes/modal-filtrar.html',
          controller: 'ModalFiltrarController',
          size: size
        });
    	};

      $scope.buscarFecha = function(){
        $rootScope.fechaBusqueda = $scope.a.fechaVista;
        $rootScope.pesatana.ensayo = true;
        $rootScope.pesatana.informativo = false;
        $route.reload();
      };

      function parImpar(numero) {
        if(parseInt(numero) % 2 == 0) {
          return "par";
        }
        else {
          return "impar";
        }
      }

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

.filter('mapEstados', function() {
  var genderHash = {
    1: 'Activo',
    2: 'Inactivo'
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
