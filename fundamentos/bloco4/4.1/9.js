// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const a = 5;
const b = 30;
const c = 9;

if ((a % 2) === 1 || (b % 2) === 1 || (c % 2) === 1) {
    console.log('true');
}
else {
    console.log('false');
}