angular.module('miApp', [])
       .directive('cajaBusqueda', function () {
           return {
               restrict: 'E',
               transclude: false,
               scope: {
                   textoABuscar: '=',
                   resultados: '='
               },
               controller: function ($scope) {
                   $scope.textoLocal = '';
                   $scope.borrarBusqueda = function () {
                       $scope.textABuscar = "";
                       $scope.textoLocal = "";
                   };
                   $scope.Buscar = function () {
                       $scope.textABuscar = $scope.textoLocal;
                   };
               },
               replace: true,
               template:
                   '<form>' +
                        '<div>' +
                            '<input ng-model="textoLocal" type="text" />' +
                        '</div>' +
                        '<div>' +
                            '<button ng-click="borrarBusqueda()">Borrar</button>' +
                            '<button ng-click="Buscar()">Buscar</button>' +
                        '</div>' +
                    '</form>'
           };
       });

angular.module("miApp", []).
        directive('resultadosBusqueda', function () {
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    resultados: '=',
                    textoABuscar: '='
                },
                replace: true,
                template:
                '<div>' +
                    '<h4 ng-show="resultados">Encontrados {{resultados.length}} resultados de la búsqueda :</h4>' +
                    '<ul>' +
                        '<li ng-repeat="resultado in resultados">' +
                            '{{resultado}}' +
                        '</li>' +
                    '</ul>' +
                '</div>'
            };
        });

angular.module("miApp", []).controller("ControladorBusquedas", function ($scope, $timeout) {
    $scope.$watch("corredoresBuscados", function (corredoresBuscados) {
        if (corredoresBuscados) {
            $scope.corredoresEncontrados = [];
            $timeout(function () { // simular retardo de búsqueda de 1 seg. siempre con el mismo resultado
                $scope.corredoresEncontrados = ['Froome', 'Contador', 'Nibali', 'Quintana', 'Cancellara'];
            }, 1000);
        } else {
            $scope.corredoresEncontrados = [];
        }
    });
});
