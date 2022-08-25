// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaInserida = 85;

let conceito;

if (notaInserida < 0 || notaInserida > 100) {
    console.log('Erro');

} else if (notaInserida >= 90) {
    conceito = 'A';
    console.log(conceito);

} else if (notaInserida >= 80){
    conceito = 'B';
    console.log(conceito);

} else if (notaInserida >= 70){
    conceito = 'C';
    console.log(conceito);

} else if (notaInserida >= 60){
    conceito = 'D';
    console.log(conceito);

} else if (notaInserida >= 50){
    conceito = 'E';
    console.log(conceito);

} else if (notaInserida < 50){
    conceito = 'F';
    console.log(conceito);
}