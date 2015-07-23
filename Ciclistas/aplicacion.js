angular.module('miApp', [])
       .directive('miDirectiva', [function () {
           return {
               restrict: 'E',
               replace: true,
               link: function (scope, iElement, iAttrs) {
               },
               template: '<p>Este es el párrafo de la directiva</p>'
           };
}]);