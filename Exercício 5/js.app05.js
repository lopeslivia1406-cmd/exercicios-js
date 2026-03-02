let base = Math.floor(Math.random() * 100) + 1;
let altura = Math.floor(Math.random() * 100) +1;
let area = (base/altura)/2;

console.log("Base: "  + base);
console.log("Altura: " + altura);
console.log("Área: " + area);

document.getElementById("base").innerHTML = "A Base é: " + base;
document.getElementById("altura").innerHTML = "A Altura é: " + altura;
document.getElementById("area").innerHTML = "A Área é: " + area.toFixed(2);