//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
var valorInicial = 1;
var valorUsuario = parseInt(prompt("Digite um valor: "));

while (valorInicial <= valorUsuario){
    for(i=1; i <=10; i++){
        var multiplicacao = valorInicial * i;
        document.write(`<p>${valorInicial}x${i} = ${multiplicacao}</p>`)
    }
    document.write(`</br>`)
    valorInicial++
}