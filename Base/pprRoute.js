appExpuestas.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/ensayoJarras', {
	        templateUrl: 'Js/Planta Portico/Ensayo de Jarras/Html/inicio.html',
	        controller: 'EnsayoJarrasIndexController'
      	})
		.otherwise({
			redirectTo: '/'
		});

  }]);