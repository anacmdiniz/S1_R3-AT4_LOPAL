let nota;
let soma = 0;
let i = 0;


do {
    nota = parseFloat(prompt("digite uma nota de 0 a 10:")); // solicita um número de 0 a 10 ao usuário;
    if (nota >= 0 && nota <= 10) {// se nota for maior que 0 e menor que 10;
        soma += nota;
        i++;//incremento
    } else if (nota >= 0) {
        alert("nota inválida, digite entre 0 e 10.");// se uma nota maior que 1 for digitada, será inválida;
    }
} while (nota >= 0);// enquanto for maior ou igual a 0


if (i > 0) {
    let media = soma / i;// variável que armazena a média
    alert(`a média das notas é : ${media.toFixed(2)}`); // exibe a média com duas casas decimais, usando o tofixed
} else {

    alert("nenhuma nota válida"); //alerta que nenhuma nota é valida se for digitado menor que 0
}
