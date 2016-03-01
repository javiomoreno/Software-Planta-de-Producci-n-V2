///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// APLICACIONES EXPUESTAS ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
var appExpuestas = angular.module('AppExp', 
                                [
                                  'ngTouch',
                                  'ngRoute',
                                  'ngResource',
                                  //DEPENDENCIA BOOTSTRAP
                                  'ui.bootstrap', 
                                  //DEPENDENCIAS UI-GRID
                                  'ui.grid', 
                                  'ui.grid.selection', 
                                  'ui.grid.edit', 
                                  // MODULES CALENDARIO VIRTUAL                                  
                                  'pprModules'
                                ]);

appExpuestas.constant('baseURL', 'http://pruebas.akc.co:8089/appexp/servlet/');

