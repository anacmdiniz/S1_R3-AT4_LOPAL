let numero; //armazena o número
do {
  numero = parseInt(prompt("Digite um número positivo:")); // solicita um número inteiro
} while (numero < 0);
alert(`Número válido digitado: ${numero}`);//mostra o número positivo digitado
