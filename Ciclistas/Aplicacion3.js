var app = angular.module('Aplicacion', []);

app.controller('controlador', function ($scope) {
    $scope.mostrarAlerta = function (info) {
        alert(info);
    };
});