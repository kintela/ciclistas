﻿// Utilizamos un módulo para definir el sistema de routing 
// de la aplicación. 
angular.module('aplicacion_ciclismo', ['ngRoute', 'ngAnimate']).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/ciclistas', {
        templateUrl: 'Codigo/Vistas/Listado.html',
        controller: ListadoController
    }).

    //Para el caso en que soliciten un id concreto
    // Se usa (:) para definir el parámetro
    when('/ciclista/:ciclistaId', {
        templateUrl: 'Codigo/Vistas/Palmares.html',
        controller: DetalleCiclistaController
    }).

    //En cualquier otro caso... 
    otherwise({
        redirectTo: '/ciclistas'
    });

}]);