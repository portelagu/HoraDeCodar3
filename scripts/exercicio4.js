//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var numeros = [];
var soma = 0;

for (i=15; i<=100; i++){
    var numero = i;
    numeros.push(numero);
    soma+= numero;
}

var media = soma / numeros.length;
document.write("A média aritmética entre os numeros inteiros de 15 a 100 é: " + media);