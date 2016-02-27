pprModController.controller('EnsayoJarrasIndexController', [
                                                        '$scope', 
                                                        '$location',
    function ($scope, $location) {

    	$scope.tabs = [
		    { title:'Dynamic Title 1', content:'Dynamic content 1' },
		    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
		  ];

		  $scope.alertMe = function() {
		    setTimeout(function() {
		      $window.alert('You\'ve selected the alert tab!');
		    });
		  };

		  $scope.model = {
		    name: 'Tabs'
		  };

    	var datos = [];
    	$scope.gridOptions = {};
    	var myDate = new Date();
    	$scope.datos = [];

    	$scope.gridOptions = {
			enableColumnMenus: false,
			enableFiltering: true,
			enableRowSelection: true,
			enableCellEditOnFocus: true,
			columnDefs: [
			  {field: 'id', enableCellEdit: false, visible: false},
			  {field: 'FechaRegistro',enableCellEditOnFocus:false, displayName: 'Fecha Registro'},
			  {field: 'vasoNumero', enableCellEdit: true, displayName: 'Vaso'},
			  {field: 'planta',enableCellEdit: true, displayName: 'Planta'},
			  {field: 'color', enableCellEdit: true, displayName: 'Color (UPC)'},
			  {field: 'turbiedad', enableCellEdit: true, displayName: 'Turbiedad (UNT)'},
			  {field: 'cuagulante', enableCellEdit: true, displayName: 'Cuagulante'},
			  {field: 'suatancia', enableCellEdit: true, displayName: 'Sustancia'},
			  {field: 'ayudanteCuagulante', enableCellEdit: true, displayName: 'Ayudante de Coagulación'},
			  {field: 'tiempoFormacion',
			        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
			          if (grid.getCellValue(row,col) >= 10) {
			            return 'red';
			          }
			        }, displayName: 'Tiempo de Formación'},
			  {field: 'indiceWilcomb', enableCellEdit: true, displayName: 'Indice de Wilcomb'},
			  {field: 'tiempoSedimentacion', enableCellEdit: true, displayName: 'Tiempo de Sedimentacion (min)'},
			  {field: 'dosis', enableCellEdit: true, displayName: 'Dosis'}
			  ]
      	};

      	for (var i = 0; i < 6; i++) {
	      	$scope.datos[i] = {
	            'id': i,
	            'FechaRegistro': myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear(),
	            'vasoNumero': '',
	            'planta': '',
	            'color': '',
	            'turbiedad': '',
	            'cuagulante': '',
	            'suatancia': '',
	            'ayudanteCuagulante': '',
	            'tiempoFormacion': '',
	            'indiceWilcomb': '',
	            'tiempoSedimentacion': '',
	            'dosis': ''
	            
	        }
      	}
		$scope.gridOptions.data = $scope.datos;

}]);