﻿var app = angular.module('Aplicacion', []);

app.controler('controlador', function ($scope) {
    $scope.usuarios = [
        { nombre: 'Vicenzo', apellidos: 'Nibali', email: 'vicenzo@nibali.com', pais: 'Italia' },
        { nombre: 'Alejandro', apellidos: 'Valverde', email: 'alejandro@valverde.com', pais: 'España' },
        { nombre: 'Alberto', apellidos: 'Contador', email: 'alberto@contador.com', pais: 'España' },
        { nombre: 'Chris', apellidos: 'Froome', email: 'chris@froome.com', pais: 'R. Unido' }
    ];

    $scope.NombreCompleto = function (usuario) {
        return usuario.nombre + ' ' + usuario.apellidos;
    };

    $scope.paisesPorCodigo = {
        'ES': 'ESPAÑA',
        'IT': 'ITALIA',
        'UK':'R. UNIDO'
    };

    $scope.codigosPorPais = {
        'ESPAÑA': 'ES',
        'ITALIA': 'IT',
        'R. UNIDO': 'UK'
    };

});