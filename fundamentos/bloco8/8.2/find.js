/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30 */

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    return numbers.find(element => {
        if (element % 3 === 0 && element % 5 === 0) {
            return element;
        }
    });
};

console.log(findDivisibleBy3And5()); */

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find(element => {
    if (element.length >= 5) {
        return element;
    }
  });
};

console.log(findNameWithFiveLetters()); */

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
  
function findMusic(id) {
    return musicas.find(element => {
        if (element.id === id) {
            return element;
        }
    });
};
  
console.log(findMusic('31031685'));
