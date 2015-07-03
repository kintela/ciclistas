describe('Pruebas', function () {
    it('Debería contener Mundo', function () {
        expect(HolaMundo()).toContain("Mundo");
    });

    describe("PruebaSumas", function () {
        var r1 = Math.floor(Math.random() * 100 + 1);
        var r2 = Math.floor(Math.random() * 100 + 1);
        it("Comprueba sumandos", function () {
            expect(Sumar(r1, r2)).toEqual(r1 + r2);
        });
    });

    /// <reference path="app.js" />
})