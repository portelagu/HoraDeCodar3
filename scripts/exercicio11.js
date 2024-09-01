 //11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

 var valoresEntreIntervalo = []
 var valoresForaInteravlo = []

 for(i=0; i<10; i++){
     var valor = parseInt(prompt("Informe um valor: "))
     
     if(valor >= 24 && valor <= 42){
         valoresEntreIntervalo.push(valor)
     } else {
         valoresForaInteravlo.push(valor)
     }
 }
 document.write(`<p> A quantidade de valores entre os números 24 e 42 são ${valoresEntreIntervalo.length}, eles são: ${valoresEntreIntervalo}</p>
 <p> A quantidade de valores fora deste intervalo são ${valoresForaInteravlo.length}, eles são: ${valoresForaInteravlo}</p>`)