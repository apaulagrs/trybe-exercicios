let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = [];

for (index = numbers.length; index >= 0; index -= 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
};

console.log(maiorValor);