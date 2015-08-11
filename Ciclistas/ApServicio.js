var modServicio = angular.module('modServicio', []);

modServicio.controller('controlador', function ($scope, datosCiclistas) {
    $scope.sprinters = datosCiclistas.listaSprinters();
       

    $scope.cambiarNombrePrimerSprinter = function () {
        $scope.sprinters[0].nombre = 'Mark';
    };
});


modServicio.factory('datosCiclistas', function () {
    return {
        listaSprinters: function () {
            return [
                { nombre: 'Mark', apellido: 'Cavendish', edad: 29 },
                { nombre: 'Marcel', apellido: 'Kittel', edad: 26 },
                { nombre: 'John', apellido: 'Degenkolb', edad: 25 },
                { nombre: 'André', apellido: 'Greipel', edad: 32 },
                { nombre: 'Peter', apellido: 'Sagan', edad: 24 },
            ];
        }
    };
});