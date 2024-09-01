//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

contador = 30;

while(contador > 0){
    document.write("<p> Contagem regressiva em: " + contador + "</p>")
    contador--;
}

document.write("<p> BOOOOOOOOMMMMMM!!!!! Explodiu</p>")