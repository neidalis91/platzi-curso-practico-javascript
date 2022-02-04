
function calcularMediaAritmetica(lista){
    /*let sumaLista =0;
    for (let i=0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoelemento){
            return valorAcomulado +nuevoelemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


/*const lista1 = [
    4,
    2,
    3,
    ];*/

function calcularMediaGeometrica(lista){
const n = lista.length;
    const multiplicaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoelemento) {
            return valorAcomulado * nuevoelemento;
        }
    );
    const resultado = Math.pow(multiplicaLista, 1 / n);
    return resultado;
}



