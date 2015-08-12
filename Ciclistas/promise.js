var app = angular.module("app", ["firebase"]);

app.controller("controlador2", function ($scope, $q, $firebase) {
    var objDiferido = $q.defer();
    var URL = "https://flickering-fire-9197.firebaseio.com/";

    objDiferido.promise.then(function () {
        var refDatos = new Firebase(URL);
        return $firebase(refDatos);
    }).then(function (datos) {
        $scope.ciclistas = datos;
    });
    // Aquí no pasamos ningún argumento, pero podríamos pasar la URL
    objDiferido.resolve(); // Pone en marcha las promises definidas antes
});

app.controller("controlador",['$scope','$filter','$firebase','$q', function ($scope,$filter, $firebase,$q) {
    var objDiferido = $q.defer();
    var URL = "https://flickering-fire-9197.firebaseio.com/";

    objDiferido.promise.then(function () {
        var refDatos = new Firebase(URL);
        return $firebase(refDatos);
    }).then(function (datos) {
        $scope.ciclistas = datos;
    });
    // Aquí no pasamos ningún argumento, pero podríamos pasar la URL
    objDiferido.resolve(); // Pone en marcha las promises definidas antes
}]);