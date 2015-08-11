// Primer bloque: Manejo de constantes mediante constant
var app = angular.module("app", []);

app.constant("numero", 99);

(function () {
    var funcionConstructora = function (numero) { // "numero" se recoge por inyección
        this.leerNumero = function () {
            return numero;
        };
    };
    app.service('servNumericoConConstructor', funcionConstructora);
}());


// numero y cadena son "inyectadas", igual que $scope
app.controller('NumeroDesdeServicioConConstructorCtl', function ($scope, servNumericoConConstructor) {
    $scope.numeroDesdeUnServicioConConstructor = servNumericoConConstructor.leerNumero();
});