// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).



const sorteio = (numeroApostado, check) => {
    return check(numeroApostado) ? 'Parabéns você ganhou' : 'Tente novamente';
};

const numeroGerado = () => {
    let number = Math.floor((Math.random() * 5) + 1);
    return number < 1 ? number + 1 : number;
};

const check = (numeroApostado) => {
    return numeroApostado === numeroGerado() ? true : false;
};

console.log(sorteio(4, check));
