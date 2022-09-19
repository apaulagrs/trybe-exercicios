//Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

function substituaX(nome) {
    const frase = 'Tryber x aqui!';
    const array = frase.split(' ');
    return `${array[0]} ${nome} ${array[2]}`;
}
console.log(substituaX('bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

function minhasSkills(function1) {
    const skills = ['HTML', 'CSS', 'Javascript'];
    return `${function1}
    Minhas três principais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`
}
console.log(minhasSkills(substituaX('bebeto')));
