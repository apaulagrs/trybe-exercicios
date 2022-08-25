let rei = 'em qualquer direcao';
let rainha = 'em qualquer direcao';
let torre = 'linha reta';
let bispo = 'diagonal';
let cavalo = 'em L';
let peao = 'sempre a frente'

let pecaXadrez = 'peao';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei -> em qualquer direcao');
        break;
    case 'rainha':
        console.log('Rainha -> em qualquer direcao');
        break;
    case 'torre':
        console.log('Torre ->  linha reta');
        break;
    case 'bispo':
        console.log('Bispo -> diagonal');
        break;
    case 'cavalo':
        console.log('Cavalo -> em L');
        break;
    case 'peao':
        console.log('Peão -> sempre a frente');
        break;
    default:
        console.log('Inválido');
        break;
}
