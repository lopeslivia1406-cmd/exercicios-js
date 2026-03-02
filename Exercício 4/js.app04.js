let salarioFixo = 1500;
let comissaoPorCalça = 35;
let preçoCada = 150;
let calçasVendidas = Math.floor(Math.random() * 200);
let totalComissao = calçasVendidas * comissaoPorCalça;
let salarioFinal = salarioFixo + totalComissao;
let totalVendas = calçasVendidas * preçoCada;

console.log("Salário Fixo: R$ " + salarioFixo);
console.log("Calças Vendidas: " + calçasVendidas);
console.log("Total de Comissâo: R$ " + totalComissao);
console.log("Sálario Final: R$ " + salarioFinal);
console.log("total de vendas: R$ " + totalVendas);

document.getElementById("salarioFixo").innerHTML = "Sálario Fixo: R$" + salarioFixo;
document.getElementById("calçasVendidas").innerHTML = "Calças Vendidas: " + calçasVendidas;
document.getElementById("totalComissao").innerHTML = "Total de Comissão: R$" + totalComissao;
document.getElementById("salarioFinal").innerHTML = "Salário Final: R$" + salarioFinal;
document.getElementById("totalVendas").innerHTML = "Total de Vendas: R$" + totalVendas;