appExpuestas.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/estacionPortico/ensayoJarras', {
	        templateUrl: 'Js/EstacionPortico/Ensayo de Jarras/Html/inicio.html',
	        controller: 'EstacionPorticoEnsayoJarrasIndexController'
      	})
      	.when('/estacionPonchala/ensayoJarras', {
	        templateUrl: 'Js/EstacionPonchala/Ensayo de Jarras/Html/inicio.html',
	        controller: 'EstacionPonchalaEnsayoJarrasIndexController'
      	})
		.otherwise({
			redirectTo: '/'
		});

  }]);