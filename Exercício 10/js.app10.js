let primeiroNumero = Math.floor(Math.random() * 100);
let segundoNumero = Math.floor(Math.random() * 100);

let soma = primeiroNumero + segundoNumero;
let resultado;


console.log("Número 1: " + primeiroNumero);
console.log("Número 2: " + segundoNumero);
console.log("Soma: " + soma);

if (soma > 100) {
    resultado = soma * 3;
    

    console.log("Como a soma <= 100, o resultado é a soma multiplicada por 3.");
    console.log("Resultado: " + resultado);
} else {
    resultado = soma * 3;
    


    console.log("Como a soma > 100, o resultado é a soma multiplicada por 2.");
    console.log("Resultado: " + resultado);
}

document.getElementById("primeiroNumero").innerHTML = "Primeiro Número: " + primeiroNumero;
document.getElementById("segundoNumero").innerHTML = "Segundo Número: " + segundoNumero;
document.getElementById("soma").innerHTML = "Soma: " + soma;
document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
