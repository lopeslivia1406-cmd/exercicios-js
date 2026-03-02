let horaValor = 168;
let dependentesValor = 80;
let horasTrabalhadas = Math.floor(Math.random() * 251);
let dependentes = Math.floor(Math.random() * 7);
let salarioBruto = (horasTrabalhadas * horaValor) + (dependentes * dependentesValor);
let descontoInss = salarioBruto * 0.085;
let descontoIr = salarioBruto * 0.05;
let salarioFinal = salarioBruto - descontoInss - descontoIr;

console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Dependentes: ${dependentes}`);
console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log('Desconto do INSS: R$ ' + descontoInss.toFixed(2));
console.log('Desconto do IR: R$ ' + descontoIr.toFixed(2));
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);


document.getElementById("salarioBruto").innerHTML = "Salário Bruto: R$ " + salarioBruto.toFixed(2);
document.getElementById("descontoInss").innerHTML = "Desconto do INSS: R$ " + descontoInss.toFixed(2);
document.getElementById("descontoIr").innerHTML = "Desconto do IR: R$ " + descontoIr.toFixed(2);
document.getElementById("salarioFinal").innerHTML = "Salário Final: R$ " + salarioFinal.toFixed(2);