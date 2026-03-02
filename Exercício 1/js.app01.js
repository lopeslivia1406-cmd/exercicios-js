let numeroQualquer = Math.floor(Math.random()*1000)


console.log("Onúmero sorteado é: " + numeroQualquer);
console.log("O Sucessor do número sorteado é: " + (numeroQualquer + 1));
console.log("O Antecessor do número sorteado é: " + (numeroQualquer -1));
console.log("O Dobro do número sorteado: " + (numeroQualquer * 2));
console.log("A Metade do número sorteado é: " + (numeroQualquer / 2));

document.getElementById("numeroQualquer").innerHTML = "O número sorteado é: " + numeroQualquer;
document.getElementById("sucessorNumero").innerHTML = "O Sucessor do número sorteado é: " + (numeroQualquer + 1);
document.getElementById("antecessorNumero").innerHTML = "O Antecessor do número sorteado é: " + (numeroQualquer - 1);
document.getElementById("dobroNumero").innerHTML = "O Dobro do número sorteado é: " + (numeroQualquer * 2);
document.getElementById("metadeNumero").innerHTML = "A Metade do número sorteado é: " + (numeroQualquer / 2);