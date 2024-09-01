//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

var notas = []
var soma = 0;

for (i = 0; i < 6; i++) {
    var nota = parseInt(prompt("Informe a sua nota: "));

    while (nota < 0 || nota > 10) {
        nota = parseInt(prompt("Nota inválida. Digite novamente: "));
    }
    notas.push(nota);
    soma += nota;

}

var media = soma / notas.length;
document.write(`A sua média é: ${parseInt(media)}`)