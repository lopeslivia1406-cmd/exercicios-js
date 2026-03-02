let nota1 = (Math.random() * 10).toFixed(1);
let nota2 = (Math.random() * 10).toFixed(1);
let nota3 = (Math.random() * 10).toFixed(1);
let nota4 = (Math.random() * 10).toFixed(1);

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

console.log("Notas: " + nota1 + ", " + nota2 + ", " 
    + nota3 + ", "  + nota4);
console.log("Média: " + media.toFixed(1));

document.getElementById("notas").innerHTML = "Notas: " + nota1 + ", " + nota2 + ", " 
    + nota3 + ", "  + nota4;

document.getElementById("media").innerHTML = "Média: " + media.toFixed(1);