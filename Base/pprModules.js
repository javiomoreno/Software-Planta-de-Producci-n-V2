var pprModules = angular.module('pprModules', [
										'pprModController', 
										'pprModService', 
										'pprModFactory',
										'pprModDirective'
										]);
var pprModController = angular.module('pprModController', []);
var pprModService = angular.module('pprModService', []);
var pprModFactory = angular.module('pprModFactory', []);
var pprModDirective = angular.module('pprModDirective', [])