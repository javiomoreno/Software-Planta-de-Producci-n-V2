pprModController.controller('EnsayoJarrasIndexController', [
                                                        '$scope', 
                                                        '$location',
    function ($scope, $location) {

    	var datos = [];
    	$scope.gridOptions = {};
    	var myDate = new Date();

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
			  {field: 'suatancia', enableCellEdit: true, displayName: 'Sustancia'}]
      	};

      	for (var i = 0; i < 6; i++) {
	      	datos[i] = {
	            'id': i,
	            'FechaRegistro': myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear(),
	            'vasoNumero': '',
	            'planta': '',
	            'color': '',
	            'turbiedad': '',
	            'cuagulante': '',
	            'suatancia': ''
	        }
      	}
		$scope.gridOptions.data = datos;

}]);