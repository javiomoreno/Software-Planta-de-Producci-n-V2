appExpuestas.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/ensayoJarras', {
	        templateUrl: 'Js/Planta Portico/Ensayo de Jarras/HTML/index.html',
	        controller: 'EnsayoJarrasIndexController'
      	})
		.otherwise({
			redirectTo: '/'
		});

  }]);