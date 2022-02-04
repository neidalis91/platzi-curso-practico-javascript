function capacidadDeudaAhorro(){
    const inputsueldo = document.getElementById("inputsueldo");
    const inputsueldoValue =  inputsueldo.value;
    const inputGastos = document.getElementById("inputGastos");
    const inputGastosValue =  inputGastos.value;

    const endeudamiento = (inputsueldoValue-inputGastosValue)*0.35;
    const ahorro = (inputsueldoValue-inputGastosValue);
    const ahorroT = (ahorro*100)/inputsueldoValue;
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "Capacidad de endeudamiento es: $" + endeudamiento + " y la Capacidad de ahorro es: $" + ahorroT + "%";


}
