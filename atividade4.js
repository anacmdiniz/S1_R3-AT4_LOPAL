let nome = 0; // nome do usuário
let sobrenome = 0;// sobrenome do usuário 


do {
    nome = prompt("digite seu primeiro nome:"); // nome e sobrenome do usuário;

} while (nome >= 0 || nome <= 0)
//para que não aceite somente números e solicite novamente ao usuário
do {
    sobrenome = prompt("digite seu sobrenome:");//

} while (sobrenome >= 0 || sobrenome <= 0)


alert(`seu nome completo é ${nome} ${sobrenome}`); // mostra o nome completo do usuário
