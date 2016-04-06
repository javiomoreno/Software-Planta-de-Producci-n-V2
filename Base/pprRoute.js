appExpuestas.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/estacionPortico/ensayoJarras', {
	        templateUrl: 'Js/EstacionPortico/Ensayo de Jarras/Html/vistas/inicio.html',
	        controller: 'EP-InicioPorticoController'
      	})
      	.when('/estacionTonchala/ensayoJarras', {
	        templateUrl: 'Js/EstacionTonchala/Ensayo de Jarras/Html/vistas/inicio.html',
	        controller: 'InicioTonchalaController'
      	})
		.otherwise({
			redirectTo: '/'
		});

  }]);
