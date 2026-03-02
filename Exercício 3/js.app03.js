let celsius = Math.floor(Math.random() * 101);
let farenheit = (celsius * 9/5) + 32;

console.log("A temperatura em Celsius é: " + celsius);
console.log("A tmperatura em Farenheit è: " + farenheit);

document.getElementById("celsius").innerHTML = "A temperatura em Celsius é: " + celsius;
document.getElementById("farenheit").innerHTML = "A temperatura em Farenheit é: " + farenheit.toFixed(2);