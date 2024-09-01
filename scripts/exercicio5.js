//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

var primeiroValor = parseInt(prompt("Informe o primeiro valor: "));
var segundoValor = parseInt(prompt("Informe o segundo valor: "));

while(primeiroValor > segundoValor){
    primeiroValor = parseInt(prompt("O primeiro valor deve ser menor que o segundo. Digite novamente o primeiro valor: "));
}

var media = parseInt((primeiroValor + segundoValor) / 2)
document.write("A média dos dois números que você digitou é: " + media);