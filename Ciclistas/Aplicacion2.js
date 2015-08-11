var app = new angular.module("ModuloFB", ["firebase"]);

app.controller('ControladorFB', ['$scope', '$filter', '$firebase', function ($scope, $filter, $firebase) {
    var refCiclistas = new Firebase("https://flickering-fire-9197.firebaseio.com/");
    $scope.contrarelojistas = $firebase(refCiclistas);
}]);