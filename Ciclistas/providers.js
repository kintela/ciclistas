var app = angular.module("app", []);

app.provider('holaMundo', function () {
    // En la función que se le pasa al provider no se 
    // puede inyectar ningún servicio o factory. Eso 
    // solo puede hacerse en el método $get
    this.nombre = 'Mundo';

    this.$get = function () {
        var nombre = this.nombre;
        return {
            saludar: function () {
                return "¡Hola, " + nombre + "!"
            }
        }
    };

    this.setNombre = function (nombre) {
        this.nombre = (nombre == undefined) ? this.nombre : nombre;
    };
});

//Aquí configuramos el provider
app.config(function(holaMundoProvider){
    // Con esto, se devolverá "¡Hola Mundo!"
    //holaMundoProvider.setNombre();
    // Si eliminas el comentario de la línea siguiente, se devolverá "¡Hola AngularJS!"
    holaMundoProvider.setNombre("AngularJS");
});

// Y este es el controlador que usamos
app.controller('ControladorSaludos', function ($scope, holaMundo) {
    $scope.saludo = holaMundo.saludar();
});