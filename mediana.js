function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoelemento) {
            return valorAcomulado + nuevoelemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


/*const lista1 = [
    100,
    200,
    500,
    400000000,
];*/
function calcularLaMedia(lista) {

    lista.sort(function(a, b){return a - b})

    const mitadLlista = parseInt(lista.length / 2);

    function esPar(numerito) {
        if (numerito % 2 == 0) {
            return true;
        } else {
            return false
        }

    }

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLlista - 1];
        const elemento2 = lista[mitadLlista];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])
        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLlista];
    }
    return mediana;
}

