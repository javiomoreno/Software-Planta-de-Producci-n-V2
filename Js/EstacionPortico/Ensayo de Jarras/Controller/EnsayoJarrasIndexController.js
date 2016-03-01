pprModController.controller('EnsayoJarrasIndexController', [
                                                        '$scope', 
                                                        '$rootScope',
                                                        '$location',
                                                        '$uibModal',
    function ($scope, $rootScope, $location, $uibModal) {

    	var datos = [];
    	$scope.gridOptions = {};
    	var myDate = new Date();
    	var dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    	$scope.datos = [];
    	$scope.fecha = dias[new Date(myDate).getDay()];
    	$scope.fecha = $scope.fecha +" "+ new Date(myDate).getDate();
        $scope.fecha = $scope.fecha +", "+ meses[new Date(myDate).getMonth()];
        $scope.fecha = $scope.fecha+" de "+new Date(myDate).getFullYear();

    	$rootScope.registro = {};

    	$rootScope.vasos = [
    		{id: 1, vasoNumero: 1},
    		{id: 2, vasoNumero: 2},
    		{id: 3, vasoNumero: 3},
    		{id: 4, vasoNumero: 4},
    		{id: 5, vasoNumero: 5},
    		{id: 6, vasoNumero: 6}];

    	$rootScope.plantas = [
    		{id: 1, planta: 'P1'},
    		{id: 2, planta: 'P2'},
    		{id: 3, planta: 'P1/P2'}];

    	$rootScope.sustancias = [
    		{id: 1, sustancia: 'Hidroxiclururo'},
    		{id: 2, sustancia: 'Sulfato'}];

		$rootScope.dosiss = [
    		{id: 1, dosis: 'N/A'},
    		{id: 2, dosis: 'Dosis Aplicar'},
    		{id: 3, dosis: 'Dosis Optima'}];

    	$scope.gridOptions = {
			enableColumnMenus: false,
			enableFiltering: true,
			enableRowSelection: true,
			columnDefs: [
			  {field: 'id',  visible: false},
			  {field: 'fechaRegistro', displayName: 'Fecha Registro', type: 'date', cellFilter: 'date:"dd/MM/yyyy"'},
			  {field: 'vasoNumero', displayName: 'Vaso', editableCellTemplate: 'ui-grid/dropdownEditor',
			      cellFilter: 'mapVaso', editDropdownValueLabel: 'vasoNumero', editDropdownOptionsArray: $rootScope.vasos},
			  {field: 'planta',displayName: 'Planta', editableCellTemplate: 'ui-grid/dropdownEditor',
			      cellFilter: 'mapPlanta', editDropdownValueLabel: 'planta', editDropdownOptionsArray: $rootScope.plantas},
			  {field: 'color', displayName: 'Color (UPC)'},
			  {field: 'turbiedad', displayName: 'Turbiedad (UNT)'},
			  {field: 'cuagulante', displayName: 'Cuagulante'},
			  {field: 'sustancia', displayName: 'Sustancia', editableCellTemplate: 'ui-grid/dropdownEditor',
			      cellFilter: 'mapSustancia', editDropdownValueLabel: 'sustancia', editDropdownOptionsArray: $rootScope.sustancias},
			  {field: 'ayudanteCuagulante', displayName: 'Ayudante de Coagulación'},
			  {field: 'tiempoFormacion',
			        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
			          if (grid.getCellValue(row,col) >= 10) {
			            return 'red';
			          }
			        }, displayName: 'Tiempo de Formación'},
			  {field: 'indiceWilcomb', displayName: 'Indice de Wilcomb'},
			  {field: 'tiempoSedimentacion', displayName: 'Tiempo de Sedimentacion (min)'},
			  {field: 'dosis', displayName: 'Dosis' ,editableCellTemplate: 'ui-grid/dropdownEditor',
			      cellFilter: 'mapDosiss', editDropdownValueLabel: 'dosis', editDropdownOptionsArray: $rootScope.dosiss},
			  {field: 'observacion', displayName: 'Observación'}]
      	};

      	for (var i = 0; i < 6; i++) {
	      	$scope.datos[i] = {
	            'id': i,
	            'fechaRegistro': new Date(myDate),
	            'vasoNumero': '',
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
	            
	        }
      	}
		$scope.gridOptions.data = $scope.datos;

		$scope.selectRow = function(){
			if ($scope.gridApi.selection.getSelectedRows().length === 1) {
				$rootScope.registro = $scope.gridApi.selection.getSelectedRows()[0];
		    	$scope.openModal('md');
		    }
		};

    	$scope.gridOptions.onRegisterApi = function(gridApi){
	      $scope.gridApi = gridApi;
	    };

	    $scope.animationsEnabled = true;

      	$scope.openModal = function (size) {
	        var modalInstance = $uibModal.open({
	          animation: $scope.animationsEnabled,
	          templateUrl: 'Js/Planta Portico/Ensayo de Jarras/Html/modalAgregarExamenJarras.html',
	          controller: 'ModalAgregarExamenJarrasController',
	          size: size
	        });
      	};

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
    1: 'P1',
    2: 'P2',
    3: 'P1/P2'
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
    2: 'Dosis Optima'
  };
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
})