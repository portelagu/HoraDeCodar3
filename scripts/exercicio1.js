//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

var primeiroValor = parseInt(prompt("Olá, informe o primeiro valor: "))
var segundoValor = parseInt(prompt("Agora, me informe o segundo valor: "))

while (segundoValor <= 0) {
    segundoValor = parseInt(prompt("O valor que você informou é inválido. Por favor, digite um valor maior que 0"))
}

var divisão = primeiroValor / segundoValor

alert(`O resultado da divisão entre os dois números é: ${divisão}`)