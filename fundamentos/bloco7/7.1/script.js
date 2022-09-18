// const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

// testingScope(true);

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => oddsAndEvens.sort((a, b) => a - b);

console.log(sortOddsAndEvens(oddsAndEvens)); */

// PARTE II
// EXERCICIO 1:

// Crie uma função que receba um número e retorne seu fatorial.

/* let result;
const factorial = (n) => {
  for (let i = (n - 1); i >= 1; i -= 1) {
    n = n * i;
    result = n;
  }
  n <= 0 ? result = 1 : result;
  return result;
}

console.log(`Esse é o fatorial ${factorial(5)}`); */

// Exercício 2:

const longestWord = (phrase) => {
  const split = phrase.split(' ');
  let longest;
  for (let i = 1; i < split.length; i += 1) {
    for (let i2 = 0; i2 < split.length; i2 += 1) {
      if (split[i2].length > split[i].length) {
        longest = split[i2];
      } else {
        longest = split[i];
      }
    }
  }
  console.log(longest)
}

longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');

