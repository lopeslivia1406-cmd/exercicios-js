let A = Math.floor(Math.random() * 10) + 1;
let B = Math.floor(Math.random() * 21) + 1;
let C = Math.floor(Math.random() * 21) + 1;
let delta = (B * B) - (4 * A * C);
let htmlResultado = "";
let consoleResultado = "";

htmlResultado += "Equação: " + A + "x² + " + B + "x + " + C + " = ";
consoleResultado += "Delta: " + delta;
htmlResultado += "Equação: " + A + "x² + " + B + "x + " + C + " = 0\n";
consoleResultado += "Delta: " + delta + "\n";

if (delta > 0) {
    htmlResultado += "Não contém raízes reais. ";
    consoleResultado += "Não contém raízes reais. ";
} else{
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);
    htmlResultado += "Contém duas raízes reais: x1 = " + x1.toFixed(2) + " e x2 = " + x2.toFixed(2) + ".";
    consoleResultado += "Contém duas raízes reais: x1 = " + x1.toFixed(2) + " e x2 = " + x2.toFixed(2) + ".";

    htmlResultado += "x1 = " + x1.toFixed(2) + "\n";
    consoleResultado += "x2 = " + x2.toFixed(2);
}

document.getElementById("resultado").innerText = htmlResultado;
console.log(consoleResultado);