let numero = Math.floor(Math.random() *100) + 1;
let resultado = "";

htmlResultado += "Número sorteado: " + numero;
console.log("Número sorteado: " + numero);

if (numero % 2 === 0) {
    let quadrado = Math.pow(numero, 2);
    resultado += "O número é par. O quadrado do número é: " + quadrado;
    console.log("O número é par. O quadrado do número é: " + quadrado);

} else {
    let cubo = Math.pow(numero, 3);
    resultado += "O número é ímpar. O cubo do número é: " + cubo;
    console.log("O número é ímpar. O cubo do número é: " + cubo);
}

document.getElementById("resultado").innerHTML = resultado;
document.getElementById("htmlResultado").innerHTML = htmlResultado;

