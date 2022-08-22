// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let soma = 0;

for (let index = 0; index <= 50; index += 1) {
    soma += index;
}
console.log('A soma total de 1 a 50 é', soma);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (index = 2; index <= 150; index += 1) {

    if(index % 3 === 0) {
        contador += 1

    }
}
if (contador === 50) {
    console.log('Secret message!');
}


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = 'scissors';
let player2 = 'stone';

if (player1 === 'stone' && player2 === 'stone') {
    console.log('Player 2 won')
} else if (player1 === 'papper' && player2 === 'stone') {
    console.log('Player 1 won')
} 
else if (player1 === 'scissors' && player2 === 'papper') {
    console.log('Player 1 won')
} 

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 18;

console.log((idade >= 18) ? "A pessoa é maior de idade" : "A pessoa é menor de idade");


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 26;
let Murilo = 30;
let Baêta = 19;

if (Carolzita < Murilo && Carolzita < Baêta) {
    console.log('Carolzita é a pessoa mais nova');
} else if (Murilo < Carolzita && Murilo < Baêta) {
    console.log('Murilo é a pessoa mais nova');
} else {
    console.log('Baêta é a pessoa mais nova');
}