///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// APLICACIONES EXPUESTAS ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
var appExpuestas = angular.module('AppExp',
                                [
                                  'ngTouch',
                                  'ngRoute',
                                  'ngResource',
                                  'ngAnimate',
                                  //DEPENDENCIA BOOTSTRAP
                                  'ui.bootstrap',
                                  //DEPENDENCIAS UI-GRID
                                  'ui.grid',
                                  'ui.grid.edit',
                                  'ui.grid.autoResize',
                                  'ui.grid.pagination',
                                  'ui.grid.exporter',
                                  'ui.grid.rowEdit',
                                  // MODULES CALENDARIO VIRTUAL
                                  'pprModules',
                                  // MODULES LOCALSTORAGE
                                  'LocalStorageModule',
                                ]);

appExpuestas.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ppr');
}]);

appExpuestas.constant('baseURL', 'http://pruebas.akc.co:8089/appexp/servlet/');
