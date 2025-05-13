let valor;// variável que armazena os valores
let total = 0;//armazena o total da compra

do {
    valor = parseFloat(prompt("digite o valor da compra e 0 quando finalizar:"));// solicita os valores da compra e 0 para finalizar
    if (valor > 0) total += valor;
} while (valor !== 0); // para o looping e finaliza quando 0 é digitado

alert(`total da compra: R$${total.toFixed(2)}`);// informa o valor total da compra 

