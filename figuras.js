// codigo cuadrado
console.group("cuadrados");
/*const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");*/

function perimetroCuadrado (lado) {
    return lado * 4;
}
perimetroCuadrado();
/*console.log("El poerimetro del cuadrado es: " + perimetroCuadrado + " cm");*/

/*const areaCuadrado = ladoCuadrado * ladoCuadrado;*/
function areaCuadrado(lado){
   return lado * lado;
}
areaCuadrado();

/*console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");*/
console.groupEnd();
// codigo triangulo
console.group("Triangulos");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo2 +"cm, "
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es : " + alturaTriangulo + " cm");
*/

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}
perimetroTriangulo();
/*console.log("El perimetro del triangulo es: " + perimetroTriangulo +" cm");*/

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
areaTriangulo();
/*console.log("El area del triangulo es: " + areaTriangulo +" cm^2");*/
console.groupEnd();

//codigo del circulo
console.group("Circulos");
//radio
/*const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo +" cm");*/

//diametro
function diametroCirculo(radio) {
    return  radio * 2;
}
diametroCirculo();
/*console.log("El diametro del circulo es: " + diametroCirculo +" cm");*/

//Pi
//const PI = 3.1415;
const PI = Math.PI;
/*console.log("El PI es: " + PI);*/

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);

    return diametro * PI;
}

perimetroCirculo()

///area
function areaCirculo (radio){
    return (radio * radio) * PI;
}
areaCirculo();


console.groupEnd()

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1");
    const valueLado1 = parseInt(lado1.value);
    const lado2 = document.getElementById("lado2");
    const valueLado2 = parseInt(lado2.value);
    const base = document.getElementById("base");
    const valueBase = parseInt(base.value);
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("altura");
    const valueAltura = altura.value;
    const base = document.getElementById("base");
    const valueBase = base.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}


function calcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("ladoIso1");
    const valueLado1 = parseInt(lado1.value);
    const lado2 = document.getElementById("ladoIso2");
    const valueLado2 = parseInt(lado2.value);
    const lado3 = document.getElementById("ladoIso3");
    const valuelado3 = parseInt(lado3.value);

  function  area(a, b){
      var h =Math.sqrt(a*a- ((b/2)*(b/2)));
      return h;
  }


    if(valueLado1 == valueLado2 &&  valueLado1 != valuelado3){
        var resultado = area(valueLado1,valuelado3)
        alert(resultado);
    }else if (valueLado1 != valueLado2 &&  valueLado2 == valuelado3){
        var resultado = area(valueLado2,valueLado1);
        alert(resultado);
    }else {
        alert("Los valores no corresponden a un triangulo Isoceles")
    }



}