let peso = Math.floor(Math.random() * 201);
let emagrecer = peso * 0.8;
let engordar = peso * 1.2;

console.log("Peso sorteado: " + peso + " kg");
console.log("Peso após emagrecer 20%: " + emagrecer.toFixed(2) + " kg");
console.log("Peso após engordar 20%: " + engordar.toFixed(2) + " kg");

document.getElementById("peso").textContent = "Peso sorteado: " + peso + " kg";
document.getElementById("emagrecer").textContent = "Peso após emagrecer 20%: " + emagrecer.toFixed(2) + " kg";
document.getElementById("engordar").textContent = "Peso após engordar 20%: " + engordar.toFixed(2) + " kg";