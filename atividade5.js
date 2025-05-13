let saldo = 1000; // exemplo de saldo inicial da conta como R$1000

let saque; // Declara a variável 'saque' que será usada para armazenar o valor digitado pelo usuário

// Verifica se o valor do saque é menor ou igual ao saldo disponível e maior que zero

do {
    saque = parseFloat(prompt(`seu saldo é R$${saldo}, digite o valor do saque:`));
    if (saque <= saldo && saque > 0) {// 
        saldo -= saque; // subtrai o valor do saque do saldo
        alert(`saque de R$${saque} realizado. Saldo restante: R$${saldo}`); // informa que o saque foi feito e mostra o saldo restante
    } else {
        alert("valor inválido ou saldo insuficiente.");
    }
} while (saldo > 0);

alert("saldo esgotado.");// quando o saldo esgotar;
