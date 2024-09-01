 //6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

 var opcao = "S"
 var qntdAprovados = 0;

 while (opcao == "S") {
     var primeiraNota = parseFloat(prompt("Informe a sua primeira nota: "));
     var segundaNota = parseFloat(prompt("Informe a sua segunda nota: "));
     
     var mediaFinal = parseFloat((primeiraNota + segundaNota) / 2)

     if (mediaFinal >= 9.5){
         qntdAprovados++
     }

     opcao = prompt(`A sua média final foi: ${mediaFinal}. A nota de aprovação é 9,5!!! Você deseja calcular a média de outro aluno? Digite S`)
 }

 document.write(`A quantidade de alunos aprovados é: ${qntdAprovados}`)