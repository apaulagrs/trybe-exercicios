
// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) { // percorre o indice de cada propriedade
//     console.log(index, car[index]);
//   } 

// let food = ['hamburguer', 'bife', 'acarajé']; // percorre o valor em cada propriedade
// for (let value of food) {
//   console.log(value);
// };

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//     console.log('Olá ' + names['person1']);
//     console.log('Olá ' + names['person2']);
//     console.log('Olá ' + names['person3']);
//   };

  // 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
  };

  for (let chaves in car) {
    console.log(chaves, car[chaves]);
  };