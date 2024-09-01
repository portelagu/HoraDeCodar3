//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N é um valor informado pelo usuário

var valor = parseInt(prompt("Insira um valor: "));
    
while(valor <= 0){
    valor = parseInt(prompt("Insira um valor maior que 0, por favor."))
}

for(i=0; i < valor; i++){

document.write(`<p> Contagem: ${i+1} </p>`)
}
